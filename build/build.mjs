// Builds dist/User-Guide.pdf and dist/guide.json from USER_GUIDE.md.
//
//   npm ci && npm run build            (or: node build/build.mjs [source.md])
//
// USER_GUIDE.md: YAML-style front matter (title, version), then `#` = part,
// `##` = page. The build fails on text the guide must not contain (the
// product codename, UK spellings), so a mistake can't be published.
// guide.json is what the app checks at startup: { version, date, pdf, bytes, sha256 }.

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import MarkdownIt from 'markdown-it';
import puppeteer from 'puppeteer';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.resolve(process.argv[2] ?? path.join(root, 'USER_GUIDE.md'));
const dist = path.join(root, 'dist');

function fail(msg) {
  console.error(`build failed: ${msg}`);
  process.exit(1);
}

// ── Read and check ────────────────────────────────────────────────────────────
const text = fs.readFileSync(source, 'utf8');
const fm = /^---\n([\s\S]*?)\n---\n/.exec(text);
if (!fm) fail('USER_GUIDE.md must start with front matter (---, title:, version:, ---)');
const meta = Object.fromEntries(fm[1].split('\n').map(l => l.split(/:\s*/, 2)).filter(p => p.length === 2));
const version = Number(meta.version);
if (!Number.isInteger(version) || version < 1) fail('front matter "version" must be a whole number');
const title = (meta.title ?? 'User Guide').trim();
const body = text.slice(fm[0].length);

const lines = body.split('\n');
const problems = [];
// Codename: user-facing text never names it (it will change).
// UK spellings: US spelling everywhere.
const banned = [
  [/\bracer\s?x\b/i, 'the codename without italics (write *RacerX*, so it can be replaced later)'],
  [/\b(colour|behaviour|favourite|(organ|real|recogn|initial|synchron|custom|author|optim|minim|maxim|summar|priorit|categor|visual)is(e|ed|es|ing|ation|ations)\b|analys(e|ing)\b|cancell(ed|ing)|labell(ed|ing)|modell(ed|ing)|travell|centre|licence\b|catalogue|dialogue box)/i, 'UK spelling'],
];
const off = fm[0].split('\n').length - 1;
let inFence = false;
lines.forEach((l, i) => {
  if (/^\s*```/.test(l)) { inFence = !inFence; return; }
  // Code (fenced or `inline`) holds real names: file paths, the data folder.
  // *RacerX* in italics is the product's placeholder name (Rick, 2026-11-25:
  // "put racerx in italics and then we'll replace it later on"); bare, it's a slip.
  const prose = inFence ? '' : l.replace(/`[^`]*`/g, '').replace(/(?<![*_])([*_])RacerX\1(?![*_])/g, '');
  for (const [re, why] of banned) {
    if (re.test(prose)) problems.push(`line ${i + 1 + off}: ${why}: ${l.trim().slice(0, 100)}`);
  }
  if (/<\/?[a-z][^>]*>/i.test(prose)) problems.push(`line ${i + 1 + off}: raw HTML isn't allowed`);
});
if (problems.length) fail(`\n  ${problems.join('\n  ')}`);

// ── Markdown → HTML ───────────────────────────────────────────────────────────
const md = new MarkdownIt({ html: false, linkify: true, typographer: true });
const slugs = new Map();
function slug(s) {
  const base = s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'section';
  const n = slugs.get(base) ?? 0;
  slugs.set(base, n + 1);
  return n ? `${base}-${n}` : base;
}
const toc = [];
md.core.ruler.push('anchors', state => {
  const t = state.tokens;
  let part = '';
  for (let i = 0; i < t.length; i++) {
    if (t[i].type !== 'heading_open') continue;
    const level = Number(t[i].tag.slice(1));
    const content = t[i + 1].content;
    if (level === 1) part = content;
    // Each tutorial starts on a new page, so one can be printed on its own.
    else if (level === 2 && part === 'Tutorials' && toc.at(-1)?.level === 2) t[i].attrSet('class', 'newpage');
    const id = slug(content);
    t[i].attrSet('id', id);
    if (level <= 2) toc.push({ level, content, id });
  }
});
const html = md.render(body);
if (!toc.some(e => e.level === 1)) fail('no parts (# headings) found');

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const date = new Date().toISOString().slice(0, 10);
const tocHtml = toc.map(e => e.level === 1
  ? `<li class="part"><a href="#${e.id}">${esc(e.content)}</a></li>`
  : `<li class="page"><a href="#${e.id}">${esc(e.content)}</a></li>`).join('\n');

const page = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${esc(title)}</title>
<style>
  @page { size: Letter; margin: 0.8in 0.75in 0.8in 0.75in; }
  body { font-family: -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif; font-size: 10.5pt; line-height: 1.5; color: #1f2328; }
  .cover { height: 8.8in; display: flex; flex-direction: column; justify-content: center; page-break-after: always; }
  .cover h1 { font-size: 34pt; margin: 0 0 8px; border: 0; page-break-before: avoid; break-before: avoid; }
  .cover p { color: #57606a; font-size: 12pt; margin: 2px 0; }
  nav { page-break-after: always; }
  nav h2 { border: 0; }
  nav ol { list-style: none; padding: 0; columns: 2; column-gap: 28px; }
  nav li.part { font-weight: 600; margin-top: 10px; break-after: avoid; }
  nav li.page { margin-left: 14px; font-size: 9.5pt; }
  nav a { color: inherit; text-decoration: none; }
  main h1 { break-before: page; }
  h1 { font-size: 22pt; border-bottom: 2px solid #d0d7de; padding-bottom: 6px; margin-top: 0; }
  h2 { font-size: 15pt; margin-top: 26px; border-bottom: 1px solid #eaeef2; padding-bottom: 3px; break-after: avoid; }
  h2.newpage { break-before: page; margin-top: 0; }
  h3 { font-size: 12pt; margin-top: 18px; break-after: avoid; }
  h4 { font-size: 10.5pt; break-after: avoid; }
  p, li { orphans: 3; widows: 3; }
  a { color: #0969da; }
  code { font-family: "SF Mono", Consolas, "Courier New", monospace; font-size: 9pt; background: #f3f4f6; padding: 1px 4px; border-radius: 4px; }
  pre { background: #f6f8fa; padding: 10px 12px; border-radius: 6px; white-space: pre-wrap; break-inside: avoid; }
  pre code { background: none; padding: 0; }
  table { border-collapse: collapse; margin: 10px 0; width: 100%; break-inside: auto; }
  th, td { border: 1px solid #d0d7de; padding: 5px 8px; text-align: left; vertical-align: top; font-size: 9.5pt; }
  th { background: #f6f8fa; }
  tr { break-inside: avoid; }
  blockquote { margin: 10px 0; padding: 4px 12px; border-left: 4px solid #d0d7de; color: #57606a; }
</style></head><body>
<section class="cover"><h1>${esc(title)}</h1><p>Version ${version}</p><p>${date}</p></section>
<nav><h2>Contents</h2><ol>${tocHtml}</ol></nav>
<main>${html}</main>
</body></html>`;

// ── HTML → PDF ────────────────────────────────────────────────────────────────
fs.mkdirSync(dist, { recursive: true });
fs.writeFileSync(path.join(dist, 'User-Guide.html'), page);
const browser = await puppeteer.launch({ args: process.env.CI ? ['--no-sandbox'] : [] });
try {
  const tab = await browser.newPage();
  await tab.setContent(page, { waitUntil: 'load' });
  await tab.pdf({
    path: path.join(dist, 'User-Guide.pdf'),
    format: 'Letter',
    printBackground: true,
    outline: true,          // PDF bookmarks from the headings
    tagged: true,
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate: `<div style="font-family:-apple-system,Segoe UI,Arial,sans-serif;font-size:8px;color:#888;width:100%;padding:0 0.75in;display:flex;justify-content:space-between">
      <span>${esc(title)} · v${version}</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>`,
    margin: { top: '0.8in', bottom: '0.8in', left: '0.75in', right: '0.75in' },
  });
} finally {
  await browser.close();
}

const pdf = fs.readFileSync(path.join(dist, 'User-Guide.pdf'));
const manifest = {
  version,
  date,
  pdf: 'User-Guide.pdf',
  bytes: pdf.length,
  sha256: crypto.createHash('sha256').update(pdf).digest('hex'),
};
fs.writeFileSync(path.join(dist, 'guide.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`built ${title} v${version}: ${toc.filter(e => e.level === 1).length} parts, ${toc.filter(e => e.level === 2).length} pages, ${(pdf.length / 1024).toFixed(0)} KB`);
