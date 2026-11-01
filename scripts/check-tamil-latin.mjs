import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

console.log("=== CHECKING TAMIL TRANSLATIONS FOR UNWANTED LATIN WORDS ===");

const taContent = fs.readFileSync(path.join(rootDir, "src/i18n/ta.ts"), "utf8");

// Extract all string literals inside quotation marks
const stringRegex = /"([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)'|`([^`\\]*(?:\\.[^`\\]*)*)`/g;

const allowedWords = new Set(["Mezin", "Food", "Products", "MFP"]);
const unexpectedWords = [];

let match;
while ((match = stringRegex.exec(taContent)) !== null) {
  let literal = match[1] || match[2] || match[3] || "";
  if (literal.startsWith("./") || literal.startsWith("/") || literal === "use client") continue;

  // Strip JS interpolation like ${name}, ${phone}, ${list}, and escape codes like \n
  literal = literal.replace(/\$\{[^}]+\}/g, " ");
  literal = literal.replace(/\\[nrt]/g, " ");

  const latinWords = literal.match(/[A-Za-z]+/g);
  if (latinWords) {
    for (const word of latinWords) {
      if (!allowedWords.has(word)) {
        unexpectedWords.push({ word, literal });
      }
    }
  }
}

if (unexpectedWords.length > 0) {
  console.error(`\n❌ Found ${unexpectedWords.length} unexpected Latin word(s) in src/i18n/ta.ts:`);
  unexpectedWords.forEach((u) => console.error(`  - Word: "${u.word}" in string: "${u.literal}"`));
  process.exit(1);
} else {
  console.log("✅ PASS: Zero unexpected Latin words found in src/i18n/ta.ts!");
  process.exit(0);
}
