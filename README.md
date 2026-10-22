# Nitish Vishwakarma — Portfolio

An editorial, single-page portfolio built with React, TypeScript, Vite, Tailwind CSS v4, Motion and Lucide.
It is a static site with no backend.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-checks, then outputs ./dist
npm run preview    # serve the production build locally
```

Requires Node 20+.

## Edit your content


All content lives in `src/data/`. You do not need to touch the components.

| File | What it controls |
| --- | --- |
| `profile.ts` | name, email, links, intro, about text, education |
| `experience.ts` | internships (set `published: true` to show an entry) |
| `projects.ts` | featured case studies and the archive |
| `skills.ts` | grouped skills |
| `certifications.ts` | certifications and coding-profile numbers |

Replace the photo at `src/assets/nitish.webp`, the resume at `public/Nitish_Vishwakarma_Resume.pdf`
and the social image at `public/og.jpg`.

### Adding real screenshots later

No repository contains screenshots yet, so each project shows a labelled diagram instead.
When you have real screenshots, add an `image` field to a project in `projects.ts` and render it in
`src/sections/Work.tsx` next to the `FlowDiagram`.

## Deploy
