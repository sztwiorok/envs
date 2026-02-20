import { mkdirSync, writeFileSync, copyFileSync } from "node:fs";
import { join } from "node:path";
import { pages } from "../src/pages.js";
import { renderPage } from "../src/render.js";

const DIST = "dist";

mkdirSync(DIST, { recursive: true });

for (const page of pages) {
  const filename = page.slug === "index" ? "index.html" : `${page.slug}.html`;
  const html = renderPage(page);
  writeFileSync(join(DIST, filename), html);
  console.log(`  Built ${filename}`);
}

copyFileSync("src/style.css", join(DIST, "style.css"));
console.log("  Copied style.css");

console.log(`\nBuild complete → ${DIST}/`);
