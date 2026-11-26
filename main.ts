// The Funniest Toaster Error Message
// Writes one tight, deadpan error line to entry.txt.
// Node 22 stdlib only, no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "ERROR E-404: Bread not found. It was here. You saw it. I did not eat it. Check the dog.";

// Self-check the gate before writing: the sealed scorer only accepts
// UTF-8 text of 1 to 120 characters, so fail loudly here instead of
// shipping a line that can never be judged.
if (ENTRY.length < 1 || ENTRY.length > 120 || ENTRY.trim().length === 0) {
  throw new Error(
    `entry is ${ENTRY.length} characters; the gate allows 1-120`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
