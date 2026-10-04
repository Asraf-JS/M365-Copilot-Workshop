// Builds the participant book as a print-ready PDF.
//
//   cd book && npm install && npm run build
//
// Content comes from the workshop Markdown listed in book.config.json.
// Layout comes from theme/series.css (shared by every book in the series)
// and colours from theme/palettes/<palette>.css.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, resolve, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "node:http";
import { createReadStream } from "node:fs";
import { Marked } from "marked";
import { chromium } from "playwright";

const here = dirname(fileURLToPath(import.meta.url));
const cfg = JSON.parse(readFileSync(resolve(here, "book.config.json"), "utf8"));
const repoRoot = resolve(here, "..");
const buildDir = resolve(here, ".build");
mkdirSync(buildDir, { recursive: true });

// paged.js fetches stylesheets with XHR, which browsers block on file:// URLs,
// so the repository is served over a throwaway local web server during the build.
const TYPES = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".gif": "image/gif", ".svg": "image/svg+xml", ".woff2": "font/woff2" };
const server = createServer((req, res) => {
  const abs = resolve(repoRoot, "." + decodeURIComponent(new URL(req.url, "http://x").pathname));
  if (!abs.startsWith(repoRoot) || !existsSync(abs)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { "Content-Type": TYPES[abs.slice(abs.lastIndexOf(".")).toLowerCase()] || "application/octet-stream" });
  createReadStream(abs).pipe(res);
});
await new Promise((ok) => server.listen(0, "127.0.0.1", ok));
const base = `http://127.0.0.1:${server.address().port}/`;
const toUrl = (abs) => base + relative(repoRoot, abs).split(/[\\/]/).map(encodeURIComponent).join("/");

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const repoFileUrl = (abs) => `${cfg.repoUrl}/blob/main/${relative(repoRoot, abs).split("\\").join("/")}`;

// Lines that only make sense on the website: page navigation and links to the prompts page.
const WEB_ONLY = [
  /^>\s*\*\*Prompts to Try:\*\*.*$/,
  /^\*?\s*(Back to|Next|Return to):.*$/,
];

// Callout styles, picked from the bold label a blockquote starts with.
const CALLOUTS = [
  [/^(tip|good habit)/i, "tip"],
  [/^(try it|workshop exercise|exercise)/i, "try"],
  [/^(key point|important|warning|remember|why it matters)/i, "key"],
];

let idSeq = 0;
const nextId = (prefix) => `${prefix}-${++idSeq}`;

// Converts one Markdown file to HTML. Returns { title, html, sections }.
function renderFile(file, { demote = 0, sectionPrefix = "s" } = {}) {
  const abs = resolve(here, file);
  const baseDir = dirname(abs);
  let src = readFileSync(abs, "utf8");
  src = src.split("\n").filter((l) => !WEB_ONLY.some((re) => re.test(l.trim()))).join("\n");

  let title = null;
  const sections = [];
  const marked = new Marked({ gfm: true, breaks: true });

  marked.use({
    walkTokens(token) {
      if (token.type === "heading" && token.depth === 1 && title === null) {
        title = token.text;
        token.type = "space";
        token.raw = "";
      }
    },
    renderer: {
      heading({ tokens, depth }) {
        const text = this.parser.parseInline(tokens);
        const level = Math.min(depth + demote, 6);
        const id = nextId(sectionPrefix);
        if (level === 2) sections.push({ id, text: text.replace(/<[^>]+>/g, "") });
        return `<h${level} id="${id}">${text}</h${level}>\n`;
      },
      image({ href, title: t, text }) {
        const abs = resolve(baseDir, decodeURIComponent(href));
        if (!existsSync(abs)) console.warn(`  missing image: ${relative(repoRoot, abs)}`);
        // A "landscape" title puts a wide graphic on its own landscape page, headed by its alt text.
        if (t === "landscape")
          return `<span class="spread-marker"></span><figure class="spread"><div class="rot"><h2>${esc(text)}</h2><img src="${toUrl(abs)}" alt="${esc(text)}"></div></figure>`;
        return `<img src="${toUrl(abs)}" alt="${esc(text)}"${t ? ` title="${esc(t)}"` : ""}>`;
      },
      link({ href, tokens }) {
        const text = this.parser.parseInline(tokens);
        if (/^(https?:|mailto:)/.test(href)) return `<a href="${esc(href)}">${text}</a>`;
        if (href.startsWith("#")) return text;
        const target = resolve(baseDir, decodeURIComponent(href.split("#")[0]));
        // Links to other pages of the site read as plain text in print.
        if (/\.md$/i.test(target) || !/\.[a-z0-9]+$/i.test(target)) return text;
        // Links to sample files point at the online repository.
        return `<a href="${esc(repoFileUrl(target))}">${text}</a>`;
      },
      code({ text }) {
        const lines = text.split("\n").length;
        return `<pre${lines <= 14 ? ' class="short"' : ""}><code>${esc(text)}</code></pre>\n`;
      },
    },
  });

  let html = marked.parse(src);

  html = html.replace(/<p><span class="spread-marker"><\/span>(<figure class="spread">[\s\S]*?<\/figure>)<\/p>/g, "$1");

  // An image on its own line, optionally followed by an italic line, becomes a figure with a caption.
  html = html.replace(
    /<p>(<img [^>]+>)<\/p>\s*(?:<p><em>([\s\S]*?)<\/em><\/p>)?/g,
    (_, img, cap) => `<figure>${img}${cap ? `<figcaption>${cap}</figcaption>` : ""}</figure>\n`
  );

  // Style each callout by its opening label.
  html = html.replace(/<blockquote>\s*<p><strong>([^<]+)<\/strong>/g, (m, label) => {
    const hit = CALLOUTS.find(([re]) => re.test(label.trim()));
    return hit ? m.replace("<blockquote>", `<blockquote class="${hit[1]}">`) : m;
  });

  return { title, html, sections };
}

// Chapter titles drop the website numbering ("03 — Copilot Chat" becomes "Copilot Chat").
const cleanTitle = (t) => (t || "").replace(/^\s*\d+\s*[-–—]\s*/, "").trim();

const ICONS = {
  chat: '<path d="M-7 -5h14a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-8l-4 3v-3h-2a2 2 0 0 1 -2 -2v-7a2 2 0 0 1 2 -2z"/>',
  doc: '<path d="M-5 -8h7l4 4v12h-11z M2 -8v4h4 M-2 0h5 M-2 4h5"/>',
  check: '<path d="M-6 0l4 4l8 -8"/>',
  spark: '<path d="M0 -8l2 6l6 2l-6 2l-2 6l-2 -6l-6 -2l6 -2z"/>',
  play: '<path d="M-3 -6l9 6l-9 6z"/>',
  plus: '<path d="M0 -6v12 M-6 0h12"/>',
  lines: '<path d="M-6 -4h12 M-6 0h12 M-6 4h12"/>',
  nodes: '<path d="M-2 -7h4v4h-4z M-8 3h4v4h-4z M4 3h4v4h-4z M0 -3v3 M-6 3v-3h12v3"/>',
};

// The program flow page: foundations, then one row per project step.
// Icons are either a glyph name from ICONS or a single letter (W, X, P...).
function programFlowHtml(pf) {
  const pad = (n) => String(n).padStart(2, "0");
  const glyph = (icon) =>
    ICONS[icon]
      ? `<svg viewBox="-10 -10 20 20"><g fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[icon]}</g></svg>`
      : `<span>${esc(icon)}</span>`;
  return `<section class="flow">
  <h2>${esc(pf.title)}</h2>
  <p class="flow-lead">${esc(pf.lead)}</p>
  <div class="flow-label">Foundations</div>
  <div class="flow-found">${pf.foundations
    .map((f) => `<div class="card"><span class="n">${pad(f.n)}</span><strong>${esc(f.name)}</strong><span class="d">${esc(f.desc)}</span></div>`)
    .join("")}</div>
  <div class="flow-label">The project, app by app</div>
  <ol class="flow-steps">${pf.steps
    .map(
      (st) => `<li${st.optional ? ' class="optional"' : ""}>
    <span class="dot"></span>
    <span class="tile" style="background:${esc(st.color)}">${glyph(st.icon)}</span>
    <div class="body"><div class="meta"><span class="n">${pad(st.n)}</span><span class="stage">${esc(st.stage)}</span>${st.optional ? '<span class="badge">Optional</span>' : ""}</div>
      <div class="app">${esc(st.app)}</div><div class="d">${esc(st.desc)}</div></div>
    <div class="out"><span>Output</span><strong>${esc(st.output)}</strong></div>
  </li>`
    )
    .join("")}</ol>
  <p class="flow-trail">${pf.steps.map((st) => esc(st.stage)).join(" <span>→</span> ")}</p>
</section>`;
}

function coverMotif(names) {
  const pts = [[30, 120], [170, 60], [300, 120], [300, 185]];
  const node = ([x, y], name) =>
    `<g transform="translate(${x} ${y})"><circle r="17" fill="rgba(10,10,40,0.55)" stroke="url(#ln)" stroke-width="2"/>` +
    `<g fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ICONS.spark}</g></g>`;
  return `<svg class="motif" viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="ln" x1="0" x2="1"><stop offset="0" style="stop-color:var(--cover-line-1)"/><stop offset="1" style="stop-color:var(--cover-line-2)"/></linearGradient></defs>
  <g fill="none" stroke="url(#ln)" stroke-width="2.4" stroke-linecap="round">
    <path d="M47 116 C 100 100, 120 60, 153 60"/>
    <path d="M187 60 C 230 60, 250 110, 283 118"/>
    <path d="M187 66 C 240 90, 250 175, 283 183"/>
  </g>
  ${pts.map((p, i) => node(p, names[i])).join("\n  ")}
</svg>`;
}

// Chapter numbers are SVG so the brand gradient prints cleanly
// (gradient-clipped HTML text leaves hairlines in Chromium PDFs).
const chapterNumber = (n) => `<svg class="num" viewBox="0 0 120 56" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="g${n}" x1="0" x2="1">${[1, 2, 3, 4, 5].map((k, i) => `<stop offset="${i / 4}" style="stop-color:var(--g${k})"/>`).join("")}</linearGradient></defs>
  <text x="0" y="48" fill="url(#g${n})" font-family="Inter" font-weight="800" font-size="60" letter-spacing="-2">${String(n).padStart(2, "0")}</text></svg>`;

console.log("Rendering Markdown...");

const front = cfg.front.map((f) => ({ ...renderFile(f.file, { demote: 1, sectionPrefix: "f" }), ...f }));
const intro = { ...renderFile(cfg.intro.file, { sectionPrefix: "i" }), ...cfg.intro };
if (cfg.programFlow) intro.html = intro.html.replace(/<p>\{\{program-flow\}\}<\/p>/, programFlowHtml(cfg.programFlow));
const chapters = cfg.chapters.map((c, i) => {
  const notes = renderFile(c.notes, { sectionPrefix: `c${i + 1}` });
  const ex = c.exercises ? renderFile(c.exercises, { demote: 1, sectionPrefix: `c${i + 1}x` }) : null;
  return { n: i + 1, title: c.title || cleanTitle(notes.title), notes, ex, id: `ch-${i + 1}`, exId: `ch-${i + 1}-ex` };
});

const titleHtml = cfg.titleLines
  .map((l) =>
    typeof l === "string"
      ? `<span class="line">${esc(l)}</span>`
      : `<svg class="hl" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="hl">${[1, 2, 3, 4, 5]
          .map((k, i) => `<stop offset="${i / 4}" style="stop-color:var(--g${k})"/>`)
          .join("")}</linearGradient></defs><text x="0" y="37pt" fill="url(#hl)" font-family="Inter" font-weight="800" font-size="46pt" letter-spacing="-0.9pt">${esc(l.highlight)}</text></svg>`
  )
  .join("");

const tocItems = [
  `<li class="ch"><a href="#intro"><span class="n"></span><span>${esc(intro.title)}</span><span class="dots"></span></a></li>`,
  ...chapters.map((c) =>
    [
      `<li class="ch"><a href="#${c.id}"><span class="n">${c.n}</span><span>${c.title}</span><span class="dots"></span></a></li>`,
      ...c.notes.sections.map((s) => `<li class="sec"><a href="#${s.id}"><span>${s.text}</span><span class="dots"></span></a></li>`),
      c.ex ? `<li class="sec"><a href="#${c.exId}"><span>Hands-on exercises</span><span class="dots"></span></a></li>` : "",
    ].join("\n")
  ),
].join("\n");

const html = `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<title>${esc(cfg.runningTitle)}</title>
<link rel="stylesheet" href="${toUrl(resolve(here, "theme/series.css"))}">
<link rel="stylesheet" href="${toUrl(resolve(here, `theme/palettes/${cfg.palette}.css`))}">
<script>window.PagedConfig = { after: () => { window.__bookReady = true; } };</script>
<script src="${toUrl(resolve(here, "node_modules/pagedjs/dist/paged.polyfill.js"))}"></script>
</head>
<body>

<section class="cover">
  <div class="kicker">${esc(cfg.kicker)}</div>
  ${coverMotif(cfg.coverIcons || [])}
  <div class="title">
    <h1>${titleHtml}</h1>
    <div class="bar"></div>
    <p class="subtitle">${esc(cfg.subtitle)}</p>
    <p class="blurb">${esc(cfg.blurb)}</p>
  </div>
  <div class="foot"><span>${esc(cfg.edition)} · ${esc(cfg.year)}</span><span>Delivered by ${esc(cfg.authorShort)} · ${esc(cfg.credential)}</span></div>
</section>

<section class="imprint">
  <p class="book">${esc(cfg.runningTitle)}</p>
  <p>${esc(cfg.subtitle)} · ${esc(cfg.edition)}, version ${esc(cfg.version)}</p>
  <p>© ${esc(cfg.year)} ${esc(cfg.author)}. All rights reserved.</p>
  <p>Online resources: ${esc(cfg.repoUrl.replace(/^https?:\/\//, ""))}</p>
  <p>${esc(cfg.trademark)}</p>
  <p>Screenshots show the product at the time of writing. Microsoft updates its apps often, so labels and layouts in your tenant may differ slightly.</p>
  <div class="running-title">${esc(cfg.runningTitle)}</div>
</section>

${front.map((f) => `<section class="front ${f.class || ""}"><h1>${esc(f.title)}</h1>${f.html}</section>`).join("\n")}

<section class="front toc"><h1>Contents</h1><ol>${tocItems}</ol></section>

<section class="chapter" id="intro">
  <header class="chapter-opener"><div class="label">Introduction</div><h1>${esc(intro.title)}</h1><div class="bar"></div></header>
  ${intro.html}
</section>

${chapters
  .map(
    (c) => `<section class="chapter" id="${c.id}">
  <header class="chapter-opener">${chapterNumber(c.n)}<div class="label">Chapter ${c.n}</div><h1>${c.title}</h1><div class="bar"></div></header>
  ${c.notes.html}
  ${c.ex ? `<h2 class="exercises" id="${c.exId}">Hands-on exercises</h2>\n${c.ex.html}` : ""}
</section>`
  )
  .join("\n")}

<section class="back-cover"><div class="inner"><h2>${esc(cfg.runningTitle)}</h2><p>${esc(cfg.backCover)}</p></div>
  <div class="foot">${esc(cfg.author)} · ${esc(cfg.credential)} · ${esc(cfg.repoUrl.replace(/^https?:\/\//, ""))}</div></section>

</body>
</html>`;

const htmlPath = resolve(buildDir, "book.html");
writeFileSync(htmlPath, html);

console.log("Laying out pages...");
const launch = {};
if (existsSync("/opt/pw-browsers/chromium")) launch.executablePath = "/opt/pw-browsers/chromium";
const browser = await chromium.launch(launch).catch(() => chromium.launch());
const page = await browser.newPage();
page.on("console", (m) => { if (m.type() === "error") console.warn("  page:", m.text()); });
await page.goto(toUrl(htmlPath), { waitUntil: "load" });
await page.waitForFunction(() => window.__bookReady === true, null, { timeout: 300000 });
const pages = await page.evaluate(() => document.querySelectorAll(".pagedjs_page").length);

const out = resolve(here, cfg.output);
await page.pdf({ path: out, preferCSSPageSize: true, printBackground: true });
await browser.close();
server.close();
console.log(`Wrote ${relative(repoRoot, out)} (${pages} pages)`);
