# User Guide

The app's User Guide, including the Tutorials, as one document: **`USER_GUIDE.md`**. A GitHub Action builds it into a PDF and publishes it as a release. The app doesn't bundle it: at startup each install downloads the latest release's `guide.json` and, when its version is newer than the copy it has, `User-Guide.pdf`. Desktop opens it in the browser; the iPhone opens it in the system viewer.

## Publishing a change

1. Edit `USER_GUIDE.md`. `#` starts a part (e.g. Tutorials), `##` a page; use `###` and below inside a page. Plain Markdown: tables and code blocks are fine; no HTML or images.
2. **Increase `version`** in the front matter at the top by 1. Installs only replace their copy when this number is higher.
3. Commit and push to `main`. The **Build User Guide** action builds the PDF and publishes release `v<version>`. Installs pick it up at their next launch.

If you push without bumping `version`, the action still builds the PDF (download it from the run's artifacts to review) but publishes nothing.

The build fails, and nothing is published, if the text contains the product codename or a UK spelling; the error lists the lines.

## Building on your own computer

```sh
npm ci
npm run build    # → dist/User-Guide.pdf, dist/guide.json
```

## Tutorials

Text only, on purpose: videos (screen recordings and screenshots, on YouTube) will be linked from each tutorial later. Each tutorial has a `Video: coming soon` line under its title for that link.

## Older installs

`wiki_seed.json` is the previous format (v18), still read by builds from before 2026-11-25. It's no longer updated.
