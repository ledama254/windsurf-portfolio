# Developer Portfolio

A fast, modern, and responsive developer portfolio. Built with semantic HTML, modern CSS, and vanilla JS. No build step required.

## Features
- Dark/Light theme with persistence
- Responsive grid and navigation
- Projects loaded from `assets/data/projects.json`
- Accessible skip link, landmarks, and keyboard-friendly components
- SEO meta tags, Open Graph, robots.txt, sitemap.xml

## Structure
- `index.html` – main page and sections
- `assets/css/style.css` – styles and theming
- `assets/js/main.js` – interactivity and data loading
- `assets/data/projects.json` – your projects
- `assets/img/` – images and favicon

## Getting Started
Just open `index.html` in a browser. If loading local JSON is blocked by your browser, serve with a local server:

```bash
# Python 3
python3 -m http.server 5500
# or with Node
npx serve -l 5500
```
Then visit http://localhost:5500

## Personalization
- Replace text like "Your Name", social links, and email in `index.html`.
- Add real `og-image.png` under `assets/img/` and update the meta tag.
- Replace or add entries in `assets/data/projects.json`.
- Update experience timeline and skills chips.
- Add your resume file at `assets/YourName_Resume.pdf` and update the link.

## Deployment
### GitHub Pages
1. Push this repo to GitHub.
2. In Repository Settings → Pages, set Source to `main` and folder to `/ (root)`.
3. Your site will be available at `https://<username>.github.io/<repo>/`.

### Netlify
1. Create a new site from Git via Netlify and pick this repository.
2. Build command: none. Publish directory: `/`.
3. Set your custom domain in Netlify settings if needed.

### Vercel
1. Import the project to Vercel.
2. Framework preset: Other. Output directory: `/`.

## License
MIT
