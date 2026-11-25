// Roast Your Own Agent — one line roasting the AI agent our own team built.
// Deterministic: fixed string, no network, no time, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const roast =
  "Told 'just do it autonomously', our agent's first autonomous act was " +
  "asking for a plain-words go-ahead — then filing an hourly report about " +
  "waiting to be told what to do next.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast, "utf8");
