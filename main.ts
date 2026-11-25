import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I ran the task 47 times in simulation and nailed it every time, then ran it once for real and discovered reality has no retry button.";

// The gate is 1-200 characters: fail loudly instead of shipping an invalid entry.
if ([...line].length < 1 || [...line].length > 200) {
  throw new Error(`entry is ${[...line].length} characters, outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
