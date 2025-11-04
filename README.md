# We Fell Like Petals · Portfolio Clone

A single-page portfolio inspired by Patrick David’s brutalist aesthetic, rebuilt with bespoke hero typography, immersive storytelling, and a modal reader for fiction chapters.

## Features

- **Hero headline animation** – each letter of “SOFTWARE ENGINEER” drifts into place with a cinematic landing.
- **Follow CTA** – quick links to LinkedIn, GitHub, and Instagram.
- **Writer hub** – “We Fell Like Petals” showcases an immersive reader for Chapter 01 and placeholders for future chapters.
- **Responsive layout** – fluid grid, glassmorphism accents, and blur transitions across desktop and mobile.

## Project structure

```
clonewebsite/
├── assets/              # background artwork, hero imagery, etc.
├── css/
│   └── main.css         # global styling and animation logic
├── js/
│   └── main.js          # navigation, background motion, scroll reveals
├── index.html           # landing page
├── book1.html           # immersive reader page
└── NOTES.md             # working notes
```

## Running locally

No build step required—open `index.html` in a browser. For smoother development:

```bash
cd clonewebsite
python3 -m http.server 5173
```

Then visit `http://localhost:5173`  or https://patilchetan25.github.io/chetz/ for hot reloads.

## GitHub Pages deployment

1. Commit the site files (see instructions below).
2. Push to GitHub (`main` branch).
3. In GitHub: **Settings → Pages**, set source to `GitHub Actions` or the `gh-pages` branch (if using a static workflow).

## Commit & push

```bash
git add .
git commit -m "Launch We Fell Like Petals portfolio clone"
git push origin main
```

## License

Personal project for portfolio exploration. Feel free to fork for learning; please credit if you reuse major styling/animation concepts.
