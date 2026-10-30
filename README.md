# Inside Track — Digital Journalism Museum

A responsive, front-end website concept built with plain HTML, CSS and JavaScript.

## Folder structure

```text
inside-track-website/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/       # Add journalist portraits, archival scans and artwork here
│   ├── pdfs/         # Add reports, clippings and downloadable documents here
│   ├── videos/       # Add interviews, documentaries and field footage here
│   └── fonts/        # Optional self-hosted font files
└── blogs/
    ├── index.html
    ├── why-archives-matter.html
    ├── inside-the-reporting-process.html
    └── verification-in-a-digital-age.html
```

## Run locally

1. Extract the ZIP file.
2. Open `index.html` in a modern browser, or open the folder in VS Code and use the Live Server extension.
3. Keep the `css`, `js`, `assets` and `blogs` folders beside `index.html`; the relative paths depend on this structure.

## Visual identity: Oxide Signal

- Deep ink: `#111719`
- Warm archival paper: `#F1EEE5`
- Oxidised copper: `#BD7655`
- Signal acid: `#D5FF45`
- Field-note mint: `#A8C9B6`

The palette is designed to feel like a contemporary newsroom layered over an archival reading room.

## Included functionality

- Responsive desktop/mobile layout and mobile navigation.
- Archive search across card text and keywords.
- Category filters for investigation, politics, society and environment.
- Timeline, journalist showcase, field-notes section and contact CTA.
- Reduced-motion support and basic keyboard accessibility.

## Add your own media

- Images: save files in `assets/images/`. Use paths such as `assets/images/reporter-name.jpg` in HTML.
- PDFs: save files in `assets/pdfs/`. Link with `<a href="assets/pdfs/report-title.pdf">Read the report</a>`.
- Videos: save files in `assets/videos/`. Embed with `<video controls src="assets/videos/interview.mp4"></video>`.
- Blogs: add new HTML articles in `blogs/` and link them from `blogs/index.html` or the homepage.

## Important publishing checklist

This project contains sample editorial copy, conceptual timeline entries and profile placeholders. Before launch:
- Replace sample collections with actual records and link each record to its original publisher or a properly licensed copy.
- Add verified journalist names, biographies, dates, portraits and sources.
- Confirm copyright, image permissions, privacy and archival reproduction rights.
- Replace `hello@insidetrack.example` with a working email address.
- Add a backend/CMS and server-side search if the museum will hold a large archive. The current search filters only the sample cards present in the page.
- Add real form handling, analytics, security headers and a privacy policy before collecting visitor information.

No external framework or build step is required. Google Fonts are loaded from Google Fonts; use local font files if you need a fully offline/self-hosted deployment.
