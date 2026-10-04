// Renders program-flow.html to ../program-flow.png at 2x for sharp display.
//   npm install && npm run render
import { chromium } from "playwright";
import { existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = resolve(here, process.argv[2] || "program-flow.html");
const out = resolve(here, process.argv[3] || "../program-flow.png");

const launch = existsSync("/opt/pw-browsers/chromium") ? { executablePath: "/opt/pw-browsers/chromium" } : {};
const browser = await chromium.launch(launch);
const page = await browser.newPage({ viewport: { width: 2400, height: 740 }, deviceScaleFactor: 2 });
await page.goto(pathToFileURL(src).href);
await page.evaluate(() => document.fonts.ready);
const width = await page.evaluate(() => Math.ceil(document.body.getBoundingClientRect().width));
await page.setViewportSize({ width, height: 740 });
await page.screenshot({ path: out, clip: { x: 0, y: 0, width, height: 740 } });
await browser.close();
console.log(`Wrote ${out} (${width * 2} x 1480)`);
