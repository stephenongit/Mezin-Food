import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

console.log("=== STRICT TAILWIND CLASS VERIFICATION (EXACT SELECTOR MATCH) ===");

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath));
    } else if (file.endsWith(".tsx")) {
      results.push(fullPath);
    }
  });
  return results;
}

const tsxFiles = getFiles(path.join(rootDir, "src"));

// Regex to capture color utility classes (e.g. bg-brown-950, text-olive-700, border-olive-600/50)
const colorUtilityRegex = /\b(?:bg|text|border|ring|from|to|via)-(?:cream|beige|brown|olive|gold|terracotta)(?:-[a-z0-9]+)?(?:\/[0-9]+)?\b/g;

const usedClasses = new Set();

tsxFiles.forEach((file) => {
  const content = fs.readFileSync(file, "utf8");
  const matches = content.match(colorUtilityRegex);
  if (matches) {
    matches.forEach((cls) => usedClasses.add(cls));
  }
});

console.log(`Found ${usedClasses.size} unique color utility classes across ${tsxFiles.length} tsx files.`);

const cssDir = path.join(rootDir, ".next/static/css");
if (!fs.existsSync(cssDir)) {
  console.error("Error: .next/static/css does not exist. Run 'npm run build' first.");
  process.exit(1);
}

const cssFiles = fs.readdirSync(cssDir).filter((f) => f.endsWith(".css"));
if (cssFiles.length === 0) {
  console.error("Error: No CSS files found in .next/static/css.");
  process.exit(1);
}

let compiledCss = "";
cssFiles.forEach((f) => {
  compiledCss += fs.readFileSync(path.join(cssDir, f), "utf8") + "\n";
});

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const missing = [];
for (const cls of Array.from(usedClasses).sort()) {
  // Tailwind escapes forward slash as \/ in the CSS selector (e.g. bg-brown-950\/70)
  const cssSelectorPart = cls.replace(/\//g, "\\/");

  // Exact selector match: preceded by dot (or escaped colon from variant like hover\:)
  // and followed by CSS delimiter ({ , : > [ .)
  const exactRegex = new RegExp(`(?:\\.|\\\\:)${escapeRegex(cssSelectorPart)}(?=[\\s,:\\{>\\.\\[])`);

  if (!exactRegex.test(compiledCss)) {
    missing.push(cls);
  }
}

if (missing.length > 0) {
  console.error(`\n❌ ERROR: ${missing.length} color utility class(es) missing from compiled CSS:`);
  missing.forEach((cls) => console.error(`  - ${cls}`));
  process.exit(1);
} else {
  console.log(`\n✅ All ${usedClasses.size} color utility classes have exact matching rules in compiled CSS!`);
  process.exit(0);
}
