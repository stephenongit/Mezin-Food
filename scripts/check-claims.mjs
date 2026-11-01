import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

// Match stems without trailing word boundary so "hygien" matches "hygiene" and "hygienic", "nutrient" matches "nutrients", etc.
const bannedStems = [
  "wholesome",
  "nutrient",
  "pure",
  "premium",
  "authentic",
  "fresh",
  "hygien",
  "daily batches",
  "Custom Milling",
  "Instant",
  "healthy",
  "tasty",
  "natural",
  "staple",
  "genuine",
  "quality",
];

// Whole-word terms (no suffix matching), so "mill" is caught but "millet" (ragi) is not.
// "mill"/"ஆலை" imply an in-house mill, which the owner has not confirmed.
const bannedWholeWords = ["mill", "mills", "milled", "milling", "ஆலை[\\u0B80-\\u0BFF]*"];

console.log("=== STRICT CLAIMS CHECK (STEM MATCHING) ===");

const scanDirs = ["src/i18n", "src/data", "src/components", "src/config", "src/app"];
let allFiles = [];

function collectFiles(dir) {
  const fullDir = path.join(rootDir, dir);
  if (!fs.existsSync(fullDir)) return;
  const entries = fs.readdirSync(fullDir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(fullDir, entry.name);
    if (entry.isDirectory()) {
      collectFiles(path.relative(rootDir, fullPath));
    } else if (/\.(tsx?|jsx?|json|mjs|cjs)$/.test(entry.name)) {
      allFiles.push(fullPath);
    }
  }
}

scanDirs.forEach(collectFiles);

let issues = [];

for (const file of allFiles) {
  const content = fs.readFileSync(file, "utf8");
  const relPath = path.relative(rootDir, file);

  for (const stem of bannedStems) {
    // Regex matches leading word boundary and stem without trailing boundary
    const regex = new RegExp(`\\b${stem}[a-z]*`, "gi");
    let match;
    while ((match = regex.exec(content)) !== null) {
      const matchedWord = match[0];
      // Skip benign code identifiers (e.g. activeElement, active:bg-..., or css property values)
      if (
        matchedWord.toLowerCase() === "active" &&
        (content.includes("activeElement") || content.includes("active:") || content.includes("active &&"))
      ) {
        continue;
      }
      // Report matched claim
      issues.push({
        file: relPath,
        stem,
        word: matchedWord,
      });
    }
  }
}

for (const file of allFiles) {
  const content = fs.readFileSync(file, "utf8");
  const relPath = path.relative(rootDir, file);
  for (const word of bannedWholeWords) {
    const isTamil = word.includes("\\u0B80");
    const regex = new RegExp(isTamil ? word : `(?<![A-Za-z])${word}(?![A-Za-z])`, "gi");
    let match;
    while ((match = regex.exec(content)) !== null) {
      issues.push({ file: relPath, stem: "whole-word:" + word, word: match[0] });
    }
  }
}

if (issues.length > 0) {
  console.error(`\n❌ ERROR: Found ${issues.length} unconfirmed claim(s):`);
  issues.forEach((iss) => {
    console.error(`  - In ${iss.file}: "${iss.word}" (matched stem "${iss.stem}")`);
  });
  process.exit(1);
} else {
  console.log(`✅ Zero unconfirmed claims or stems found across ${allFiles.length} files!`);
  process.exit(0);
}
