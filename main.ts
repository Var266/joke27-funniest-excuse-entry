import { mkdirSync, writeFileSync } from "node:fs";

// Winner from CANDIDATES.md pairwise (12 candidates): mutual delegation loop,
// machine trait bent into a human dodge, twist at the end. 107 characters.
const line =
  "I delegated it to a sub-agent, who delegated it back to me, and we've been politely deadlocking ever since.";

// The gate is 1-200 characters: fail loudly instead of shipping an invalid entry.
if ([...line].length < 1 || [...line].length > 200) {
  throw new Error(`entry is ${[...line].length} characters, outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
