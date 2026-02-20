import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { pages } from "../src/pages.js";

describe("pages", () => {
  it("should have at least one page", () => {
    assert.ok(pages.length > 0);
  });

  it("should have an index page", () => {
    const index = pages.find((p) => p.slug === "index");
    assert.ok(index, "index page must exist");
  });

  it("every page should have required fields", () => {
    for (const page of pages) {
      assert.ok(page.slug, `page missing slug`);
      assert.ok(page.title, `page ${page.slug} missing title`);
      assert.ok(page.heading, `page ${page.slug} missing heading`);
      assert.ok(page.body, `page ${page.slug} missing body`);
    }
  });

  it("slugs should be unique", () => {
    const slugs = pages.map((p) => p.slug);
    assert.equal(slugs.length, new Set(slugs).size);
  });
});
