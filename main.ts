// entry.txt: one-line exhibit label, office object as ancient artifact, <=180 chars.
import { mkdirSync, writeFileSync } from "node:fs";

const PLACARD =
  "Microwave, c. 2009. Beige steel, 900 watts. A break-room altar: offerings " +
  "went in, a countdown was observed, and nothing ever became ready. Donated " +
  "by the fourth floor.";

const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(dir + "/entry.txt", PLACARD + "\n", "utf8");
