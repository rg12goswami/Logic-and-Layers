# Logic & Layers

Marketing site for the Logic & Layers freelance full-stack development brand.
React + Vite + Tailwind CSS, no UI framework dependencies beyond that.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL. `npm run build` produces a production bundle in
`dist/`; `npm run preview` serves that bundle locally.

## Project structure

```
src/
  components/   One component per section (Hero, Projects, Services, ...)
  data/         Static content — projects, services, skills, testimonials
  hooks/        useInView.js — scroll-reveal, no animation library needed
  lib/api.js    Fetch wrapper for the inquiry form
public/
  hero-battle.mp4   Hero background video
  hero-poster.jpg   Poster frame shown before the video loads
```

Edit the arrays in `src/data/` to change project cards, services, tech stack,
or testimonials — the components just render whatever is there.

## Wiring up the contact form

The inquiry form in `src/components/ContactForm.jsx` already posts to a
backend via `src/lib/api.js`. It currently targets `/api/inquiries` and will
fail until that route exists — that's expected for this frontend-only pass.

To connect a real Node.js/Express + MongoDB API:

1. Copy `.env.example` to `.env` and set `VITE_API_URL` to your API's base URL.
2. Implement `POST {VITE_API_URL}/inquiries` on the server, accepting:
   ```json
   {
     "name": "string",
     "email": "string",
     "company": "string",
     "projectType": "string",
     "budget": "string",
     "description": "string"
   }
   ```
3. Save the body as a MongoDB document (e.g. an `inquiries` collection) and
   return a 2xx response. Non-2xx responses surface as an inline error in
   the form; nothing else in the frontend needs to change.

## Notes

- The hero video autoplays muted and loops per browser autoplay policy —
  keep `muted` on the `<video>` element or autoplay will be blocked.
- Swap `public/hero-battle.mp4` / `hero-poster.jpg` for different footage at
  any time; the `<video>` tag in `Hero.jsx` doesn't need to change.
- Project, testimonial, and about images currently point at Unsplash URLs as
  placeholders — replace with real project screenshots before shipping.
