# AGENTS.md

## Repo Notes

- This site is a single-page Astro portfolio driven by `src/data/resume.json`.
- Keep `src/pages/index.astro`, `src/styles/global.css`, and `src/scripts/main.js` aligned when changing structure or presentation.
- The page uses a `data-theme` attribute on `<html>` with `paper` and `ink` modes. Update both theme token sets together if you change colors.
- Section content is data-driven, so new sections should map cleanly to `resume.json` instead of hardcoding repeated content.

## Design Conventions

- The current design language is editorial and paper-like. Prefer warm surfaces, restrained borders, ink-blue accents, and serif-led headings.
- Use spacing, hierarchy, and border treatment before introducing extra color or motion.
- Keep motion subtle: scroll reveals and lightweight hover states are acceptable; decorative animation is not.

## Implementation Rules

- Preserve the single-page reading order unless there is a strong reason to reorganize it.
- Keep the layout responsive by checking the hero, grids, and timeline at mobile widths.
- If you change class names or section IDs in `index.astro`, update matching styles and anchor links at the same time.
- Theme toggling is handled in `src/scripts/main.js`; keep the icon state and stored preference in sync with the theme token names.

## Verification

- Run `npm run build` after UI or layout changes.
- If build dependencies are missing, reinstall before assuming a code issue.

