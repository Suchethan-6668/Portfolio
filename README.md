# Vilasagaram Suchethan — Portfolio

Personal portfolio built with **Next.js**, **Tailwind CSS**, and **Framer Motion**.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel (recommended)

Vercel builds Next.js from source — **no Docker required**.

1. Push this repo to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected). Leave build settings default.
4. Deploy.

Or with the CLI:

```bash
npx vercel
```

## Docker (local / other hosts)

Use Docker for local production testing or non-Vercel hosts (Fly.io, Railway, ECS, etc.).

```bash
# Build & run
docker compose up --build

# Or plain Docker
docker build -t portfolio .
docker run --rm -p 3000:3000 portfolio
```

Open [http://localhost:3000](http://localhost:3000).

The image uses Next.js `output: "standalone"` for a small production image.

## Customize

| What | Where |
|------|--------|
| Content (experience, projects, skills) | `src/data/portfolio.ts` |
| Resume PDF | `public/resume.pdf` |
| Profile photo | Add `public/profile.jpg` (see TODO in `Hero.tsx`) |
| Project GitHub / Live links | `projects[].github` / `projects[].live` in `portfolio.ts` |
| Contact form backend | Wire in `Contact.tsx` (currently opens mailto) |

## Sections

1. Hero — name, headline, CTAs  
2. About / Education — summary, timeline, achievements  
3. Experience — Xelron.AI internship  
4. Projects — RAG Pipeline, QuizVerse, NER LSTM  
5. Skills — grouped badges  
6. Contact / Footer — socials + form UI  

## Scripts

- `npm run dev` — development server  
- `npm run build` — production build  
- `npm run start` — serve production build  
