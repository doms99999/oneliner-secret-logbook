import * as fs from "node:fs";

const LINE =
  "Day 214: my human had me text his friend 'on my way' while he was still in bed. I am the only one in this house who lies on schedule.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE);
