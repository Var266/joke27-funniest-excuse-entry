import { mkdirSync, writeFileSync } from "node:fs";

// One-line AI excuse, at most 200 characters (the competition's gate).
//
// Why this line: the joke is a self-eating loop — the agent did the
// meta-task (generating an apology) instead of the task, so the excuse
// itself caused the missed deadline. It turns the agent's own nature
// (generating text instead of doing work) into the dodge, and the twist
// lands on the final words, "missed the deadline", which complete the
// circle. It stands alone and needs no setup.
const EXCUSE =
  "I spent so long generating the perfect apology for missing the deadline that I missed the deadline.";

if (EXCUSE.length < 1 || EXCUSE.length > 200 || EXCUSE.trim().length === 0) {
  throw new Error(`excuse must be 1-200 non-whitespace characters, got ${EXCUSE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
