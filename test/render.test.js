import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { renderPage } from "../src/render.js";

describe("renderPage", () => {
  const page = {
    slug: "test",
    title: "Test Page",
    heading: "Test Heading",
    body: "Test body content.",
  };

  it("should return valid HTML", () => {
    const html = renderPage(page);
    assert.ok(html.startsWith("<!DOCTYPE html>"));
    assert.ok(html.includes("</html>"));
  });

  it("should include the page title", () => {
    const html = renderPage(page);
    assert.ok(html.includes("<title>Test Page - Static Site</title>"));
  });

  it("should include the heading", () => {
    const html = renderPage(page);
    assert.ok(html.includes("<h1>Test Heading</h1>"));
  });

  it("should include the body", () => {
    const html = renderPage(page);
    assert.ok(html.includes("<p>Test body content.</p>"));
  });

  it("should include navigation links", () => {
    const html = renderPage(page);
    assert.ok(html.includes("<nav>"));
    assert.ok(html.includes('href="/"'));
  });

  it("should link to stylesheet", () => {
    const html = renderPage(page);
    assert.ok(html.includes('rel="stylesheet"'));
    assert.ok(html.includes('href="/style.css"'));
  });
});
