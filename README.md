# RacerX User Guide

The User Guide shown in RacerX (sidebar → **RacerX Guide**). RacerX doesn't bundle it: each install downloads `wiki_seed.json` from this repo's `main` branch at launch, and again when the Guide is opened (at most every 10 minutes).

## Publishing a change

1. Edit `wiki_seed.json`: `categories` → `pages` → `title` and `body` (Markdown).
2. **Increase `version`** by 1. RacerX only replaces its copy when this number is higher than the one it has.
3. Commit and push to `main`. Installs pick it up on their next launch or Guide open (GitHub's raw file cache can take a few minutes).

To preview before pushing, start RacerX with `RX_GUIDE_FILE=/path/to/wiki_seed.json`.

If a download fails, RacerX keeps the copy it already has; if it has never downloaded one, the Guide says so and offers **Try again**.
