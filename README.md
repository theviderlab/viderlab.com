# viderlab.com

Personal site of Rodrigo Díaz Velasco. Astro, static, Spanish (`/`) and English (`/en/`). Deployed to GitHub Pages on every push to `main`.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build
```

## Where things live

| What | Where |
|---|---|
| Home texts (hero, services, background, talks, contact) | `src/i18n.ts` |
| Projects (one file per language) | `src/content/projects/{es,en}/<slug>.md` |
| Screenshots | `src/assets/shots/` |
| CV download | `public/cv/rodrigo-diaz-velasco-cv.pdf` |
| Social preview image (optional, 1200×630) | `public/og.png` |

## Images

Drop a file at the path shown in the placeholder (any of `.webp`, `.png`, `.jpg`, `.avif`) and it replaces the placeholder automatically. Astro resizes and optimizes it on build. In `npm run dev` each placeholder shows its expected path.

| Slot | Ratio | Used on |
|---|---|---|
| `portrait` | 4:5 | Hero |
| `talks/caceres-tech` | 3:2 | Talks |
| `apartur/cover`, `apartur/checkout`, `apartur/backoffice` | 16:10 | Apartur |
| `smart-search/cover`, `smart-search/dashboard`, `smart-search/taxonomies` | 16:10 | Smart Search |
| `espacio-alquitara/cover`, `espacio-alquitara/rooms` | 16:10 | Espacio Alquitara |
| `landmark-detection/cover` | 16:9 home, 16:10 page | Landmark Detection |
| `zobik/cover` | 16:9 home, 16:10 page | Zobik |

Images are cropped to the slot (`object-fit: cover`), so export screenshots at roughly that ratio, ~1600 px wide.

To add or rename a slot, edit the `shots` list in the project's front matter.
