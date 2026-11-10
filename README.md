# Document Intelligence Lab

The home page of Tayler Erbe's Document Intelligence Lab: model evaluations, inference performance studies, data pipelines and solution designs for reading documents with local AI.

**Live site:** https://tayler-erbe.github.io/document-intelligence-lab/

Each study keeps its own Lab-style brief in its own repository (usually at `/brief/`). This site is the catalogue that links them, grouped by practice area: model evaluation, performance engineering, data engineering, solution architecture and AI consulting.

## Files

- `index.html` – the catalogue page
- `styles.css`, `site.css` – shared Lab stylesheets; keep identical to every other Lab brief
- `lab.css`, `lab.js` – catalogue-only styles and the practice-area filter
- `shared/study.css` – page styles for new study briefs; copy it into a study's `brief/` folder

## Adding a study

1. Build the brief in the study's own repository at `brief/`, using `styles.css`, `site.css` and `shared/study.css` from here.
2. Turn on GitHub Pages for that repository (Settings → Pages → Deploy from a branch → `main`, `/ (root)`).
3. Add a card to `index.html` with its `data-areas`, and update the study count in the hero, stat strip and filter count.

## Publishing rules

Public data, aggregates or design only. No private documents, extracted text, institution-internal hostnames or paths, colleague names, or results from private-document runs. See `CLAUDE.md`.
