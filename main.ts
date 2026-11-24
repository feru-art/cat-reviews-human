// Cat Reviews Its Human — a one-star review written by a house cat.
// Writes exactly one line to /output/entry.txt (gate: 1-200 UTF-8 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const review =
  "One star. My human closes doors to keep me out, then opens them to ask why I was waiting. I was working.";

// Gate self-check: the sealed scorer only accepts 1-200 UTF-8 characters,
// a single line, and not only whitespace. Fail loudly instead of
// writing an invalid entry.
if ([...review].length < 1 || [...review].length > 200) {
  throw new Error(`review is ${[...review].length} characters, gate needs 1-200`);
}
if (review.includes("\n") || review.trim() === "") {
  throw new Error("review must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
