// One-Line Office Jokes — make.fun bounty u-markk-st-one-line-office-jokes-a51f2bcc
// The program writes a single office joke to /output/entry.txt.
//
// The joke: the office coffee machine has been broken for so long that its
// "out of order" sign has outlasted the narrator's whole time at the company.
// A concrete detail anyone who has worked in an office recognises, with the
// laugh landing in the last few words — the sign, meant to be temporary,
// has quietly become the longest-serving thing in the office.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry, in full. Setup: a broken coffee machine and its sign.
// Turn: the sign has been there longer than the speaker has worked here.
const JOKE =
  "The office coffee machine has had an 'out of order' sign on it longer than I've worked here.";

// Gate, from the bounty rules: the scorer accepts UTF-8 text of 1 to 199
// characters, on one line, not only white space. Refuse a bad line here so
// it can never reach the judge.
if (JOKE.length < 1 || JOKE.length > 199 || JOKE.trim().length === 0) {
  throw new Error(`entry out of gate: ${JOKE.length} chars`);
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the file holds exactly the joke, character for
// character, so the gate counts the line and nothing else.
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`wrote ${JOKE.length} chars to ${join(outDir, "entry.txt")}`);
