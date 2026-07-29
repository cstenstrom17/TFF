# Tortorella Family Foundation — Pages Router Starter

A modern redesign concept built in the older, familiar Next.js **Pages Router** structure.

## What this project intentionally uses

- JavaScript (`.js`), not TypeScript
- `pages/`, not `app/`
- CSS Modules (`.module.css`)
- A shared `components/layout.js` wrapper
- Plain CSS, not Tailwind
- Local images in `public/images/`

## Start the site

You need Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Folder map

```text
tortorella-foundation-starter/
├── components/
│   ├── layout.js
│   ├── layout.module.css
│   ├── header.js
│   ├── header.module.css
│   ├── footer.js
│   ├── footer.module.css
│   ├── programCard.js
│   ├── programCard.module.css
│   ├── sectionHeading.js
│   └── sectionHeading.module.css
├── lib/
│   └── siteData.js
├── pages/
│   ├── _app.js
│   ├── index.js
│   ├── about.js
│   ├── programs.js
│   ├── partners.js
│   ├── news.js
│   └── contact.js
├── public/
│   └── images/
├── styles/
│   ├── globals.css
│   ├── Home.module.css
│   └── Page.module.css
├── SITE-AUDIT.md
├── next.config.js
├── jsconfig.json
└── package.json
```

## Important before publishing

1. Replace the placeholder donation destination in `lib/siteData.js` with the foundation's verified donation processor.
2. Connect the contact form to a secure form handler or API route.
3. Get approval for all copy, program names, images, partner links, and impact claims.
4. Add the foundation's EIN/tax status, privacy policy, accessibility statement, and financial/transparency documents if approved.
5. Replace or optimize older images with higher-resolution originals.
6. Keep the Pages Router for now, then learn the App Router separately rather than mixing both structures in one starter.

## Image note

The included images were downloaded from the existing foundation site solely for this redesign concept. Confirm usage rights and obtain original high-resolution files before public launch.
