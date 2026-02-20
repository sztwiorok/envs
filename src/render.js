import { pages } from "./pages.js";

export function renderPage(page) {
  const nav = pages
    .map((p) => {
      const href = p.slug === "index" ? "/" : `/${p.slug}.html`;
      return `<a href="${href}">${p.title}</a>`;
    })
    .join(" | ");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${page.title} - Static Site</title>
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <nav>${nav}</nav>
  <main>
    <h1>${page.heading}</h1>
    <p>${page.body}</p>
  </main>
</body>
</html>`;
}
