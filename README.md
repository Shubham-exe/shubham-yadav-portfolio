# Shubham Yadav — Editorial Portfolio

A completely redesigned, responsive multi-page developer portfolio. The design moves away from the cyberpunk/hacker look into an editorial art-direction style: warm paper background, electric cobalt blue, vivid orange, large typography, abstract project artwork, and generous spacing.

## Pages

- `/` — Home and introduction
- `/work` — Selected work
- `/work/streamify` — Streamify case study
- `/work/edemy` — Edemy case study
- `/work/budget-management` — Budget Management System
- `/work/quiz-app` — Quiz App
- `/work/github-profile-review` — GitHub Profile Review
- `/work/employee-management` — Employee Management System
- `/about` — About, skills, education, experience, and certifications, including a direct NPTEL certificate link
- `/Shubham-Yadav-Resume.pdf` — Updated downloadable résumé supplied by Shubham
- `/NPTEL-Data-Science-Using-Python-Certificate.pdf` — SWAYAM/NPTEL Data Science Using Python certificate (63%, Jul–Oct 2025)
- `/contact` — Email, phone, GitHub, and LinkedIn

## Run locally

Requires Node.js 20+.

```bash
npm install
npm run dev
```

To make a production build:

```bash
npm run build
npm run preview
```

## Personal details already added

- Email: `shubham.yadav.projects@gmail.com`
- Phone: `8693851805`
- GitHub: `https://github.com/Shubham-exe`
- LinkedIn: `https://www.linkedin.com/in/shubham-yadav-09a097352/`

## Content notes

The portfolio uses details from the résumé and internship report available for this project. Repository and live-demo links are not fabricated; add individual project URLs in `src/projects.js` when you have the exact links. Streamify and Edemy copy is intentionally factual and avoids invented performance metrics.

## Code formatting

This project uses Prettier to keep JavaScript, JSX, CSS, and configuration files consistently formatted.

```bash
npm install
npm run format
npm run format:check
npm run build
```

Run `npm run format` before committing changes so the source stays easy to review.
