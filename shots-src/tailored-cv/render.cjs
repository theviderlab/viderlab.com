// Renders the tailored-cv screenshot scenes to src/assets/shots/tailored-cv/*.png.
// Every person, company and posting in these scenes is fictional.
//
// Usage (from the site folder):  node shots-src/tailored-cv/render.cjs
// Needs the tailored-cv repo next to the site (../cv) with `npm install` done in cv/.

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const { pathToFileURL } = require('url');

const HERE = __dirname;
const SITE = path.resolve(HERE, '..', '..');
const CV_DIR = path.resolve(SITE, '..', 'cv');
const OUT_DIR = path.join(SITE, 'src', 'assets', 'shots', 'tailored-cv');
const { findChrome } = require(path.join(CV_DIR, 'lib.js'));

const chrome = findChrome();
if (!chrome) {
  console.error('Chrome/Edge not found. Set CHROME_PATH.');
  process.exit(1);
}

// 1. Build the demo CV with the real pipeline and keep its HTML.
const demoMd = path.join(HERE, 'demo-cv.md');
const build = spawnSync(process.execPath, [path.join(CV_DIR, 'build-cv.js'), demoMd], {
  cwd: CV_DIR,
  env: { ...process.env, CV_KEEP_HTML: '1' },
  encoding: 'utf8',
});
if (build.status !== 0) {
  console.error(build.stderr || build.stdout);
  process.exit(1);
}
fs.rmSync(demoMd.replace(/\.md$/, '.pdf'), { force: true });

// 2. Copy it next to the scenes, pointing at the real stylesheet and
//    highlighting the keywords the posting asks for.
const tmpHtml = path.join(CV_DIR, 'design', '.tmp_cv.html');
let html = fs.readFileSync(tmpHtml, 'utf8');
fs.unlinkSync(tmpHtml);
const cssHref = path.relative(HERE, path.join(CV_DIR, 'design', 'style.css')).split(path.sep).join('/');
html = html.replace('href="style.css"', `href="${cssHref}"`);

const KEYWORDS = /(Kubernetes|FastAPI|PostgreSQL|Amazon Web Services \(AWS\)|event-driven|Event pipelines|OpenTelemetry|Mentoring|Mentored)/g;
const MARK = 'background:rgba(255,90,31,.16);color:inherit;border-radius:2px;padding:0 1px';
const [head, body] = html.split(/(?=<main)/);
html = head + body
  .split(/(<[^>]+>)/)
  .map((part) => (part.startsWith('<') ? part : part.replace(KEYWORDS, `<mark style="${MARK}">$1</mark>`)))
  .join('');
fs.writeFileSync(path.join(HERE, 'cv.html'), html, 'utf8');

// 3. Screenshot each scene at 1600x1000 CSS px, 2x.
fs.mkdirSync(OUT_DIR, { recursive: true });
for (const scene of ['cover', 'questions', 'prep']) {
  const out = path.join(OUT_DIR, `${scene}.png`);
  const res = spawnSync(chrome, [
    '--headless',
    '--disable-gpu',
    '--hide-scrollbars',
    '--allow-file-access-from-files',
    '--force-device-scale-factor=2',
    '--window-size=1600,1000',
    '--virtual-time-budget=5000',
    `--screenshot=${out}`,
    pathToFileURL(path.join(HERE, `${scene}.html`)).href,
  ], { encoding: 'utf8' });
  if (res.status !== 0 || !fs.existsSync(out)) {
    console.error(`${scene}: failed\n${res.stderr}`);
    process.exit(1);
  }
  console.log(`OK -> ${path.relative(SITE, out)}`);
}
