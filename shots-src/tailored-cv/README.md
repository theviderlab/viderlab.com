# tailored-cv screenshots

Source for `src/assets/shots/tailored-cv/{cover,questions,prep}.png`. Everything shown is fictional: the candidate (Alex Morgan), the employers, the posting (Fieldstone Analytics) and the interview history.

| File | What it is |
|---|---|
| `demo-cv.md` | Fictional tailored CV, built with the real `cv/` pipeline |
| `cover.html` | Posting next to the tailored CV, with the requirements report |
| `questions.html` | Terminal view of `/cv-tailor` asking about what is missing |
| `prep.html` | Interview prep sheet from the question bank |
| `shared.css` | Site tokens and fonts (from `node_modules`) |
| `render.cjs` | Builds the CV, writes `cv.html` and screenshots each scene with headless Chrome/Edge |

Regenerate (from the site folder, with `npm install` done here and in `../cv`):

```sh
node shots-src/tailored-cv/render.cjs
```

Scenes are 1600×1000 CSS px rendered at 2x. Keep content inside `.stage` (80 px margin) so the 16:9 crop on the home page loses nothing.
