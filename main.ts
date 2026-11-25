// One Line, Big Laugh — writes a single funny line (<= 200 chars) to /output/entry.txt.
// The line: a GPS request for the scenic route goes wrong in a very personal way.
// Misdirection: "scenic route" promises pretty views; the punchline is a tour of past mistakes.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I asked my GPS for the scenic route; it took me past my ex's house and three of my bad decisions.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`entry line must be 1-200 non-whitespace chars, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
console.log(`wrote ${outDir}/entry.txt (${LINE.length} chars)`);
