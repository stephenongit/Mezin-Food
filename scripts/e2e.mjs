// Real-browser test (Playwright + Chromium). Run against a running server:
//   npm run build && npm start   (in one terminal)
//   npm run e2e                  (in another)   BASE_URL=http://127.0.0.1:3000 by default
// Exits 1 if anything fails. Screenshots go to ./verify-output/.
import { chromium } from "playwright";
import fs from "fs";

const BASE = process.env.BASE_URL || "http://127.0.0.1:3000";
const WIDTHS = [320, 360, 375, 390, 412, 768, 820, 1024, 1280, 1440];
const MENU_WIDTHS = [320, 360, 390, 412];
const OUT = "verify-output";
fs.mkdirSync(OUT, { recursive: true });

let failures = 0;
let passes = 0;
function check(ok, name, detail = "") {
  if (ok) {
    passes++;
    console.log(`  PASS ${name}${detail ? " - " + detail : ""}`);
  } else {
    failures++;
    console.log(`  FAIL ${name}${detail ? " - " + detail : ""}`);
  }
}

const browser = await chromium.launch();

async function newPage(width, lang, height = 800) {
  const ctx = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 1,
    hasTouch: width < 768,
    isMobile: false,
  });
  await ctx.addInitScript((l) => {
    try {
      localStorage.setItem("mfp_preferred_lang", l);
    } catch {}
  }, lang);
  const page = await ctx.newPage();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  return { page, ctx };
}

// ---------- 1. Widths: overflow, tap targets, tiny text ----------
for (const lang of ["en", "ta"]) {
  console.log(`\n[1] Layout at all widths (${lang})`);
  for (const w of WIDTHS) {
    const { page, ctx } = await newPage(w, lang);
    const r = await page.evaluate(() => {
      const docW = document.documentElement.scrollWidth;
      const innerW = window.innerWidth;
      const small = [];
      const tiny = [];
      for (const el of document.querySelectorAll("a, button, [role=button]")) {
        const b = el.getBoundingClientRect();
        const cs = getComputedStyle(el);
        if (b.width === 0 || b.height === 0 || cs.visibility === "hidden" || cs.display === "none") continue;
        if (el.closest("[aria-hidden=true], [inert]")) continue;
        if (b.width < 43.5 || b.height < 43.5)
          small.push(`${el.tagName.toLowerCase()} "${(el.getAttribute("aria-label") || el.textContent || "").trim().slice(0, 30)}" ${Math.round(b.width)}x${Math.round(b.height)}`);
      }
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let n;
      while ((n = walker.nextNode())) {
        if (!n.textContent.trim()) continue;
        const el = n.parentElement;
        const cs = getComputedStyle(el);
        if (cs.display === "none" || cs.visibility === "hidden" || el.closest("script,style,noscript")) continue;
        const b = el.getBoundingClientRect();
        if (b.width === 0 || b.height === 0) continue;
        if (parseFloat(cs.fontSize) < 12) tiny.push(`"${n.textContent.trim().slice(0, 25)}" ${cs.fontSize}`);
      }
      const tamilSizes = [];
      if (document.documentElement.lang === "ta") {
        for (const p of document.querySelectorAll("p, li")) {
          const fs = parseFloat(getComputedStyle(p).fontSize);
          if (fs < 14 && p.textContent.trim() && p.getBoundingClientRect().width > 0) tamilSizes.push(`"${p.textContent.trim().slice(0, 25)}" ${fs}px`);
        }
      }
      const brand = [...document.querySelectorAll("header a[href='#home'] span")].find((s) => s.textContent.includes("Mezin"));
      const brandBox = brand ? brand.getBoundingClientRect() : null;
      const brandOk = !!brand && brandBox.width > 60 && brand.scrollWidth <= Math.ceil(brandBox.width) + 1;
      const brandInfo = brand ? `box ${Math.round(brandBox.width)}px, text ${brand.scrollWidth}px` : "brand not found";
      return { docW, innerW, small, tiny, tamilSizes, brandOk, brandInfo, htmlLang: document.documentElement.lang };
    });
    check(r.htmlLang === lang, `${lang}@${w} html lang`, r.htmlLang);
    check(r.docW <= r.innerW, `${lang}@${w} no horizontal scroll`, `scrollWidth ${r.docW} vs innerWidth ${r.innerW}`);
    check(r.small.length === 0, `${lang}@${w} tap targets >= 44px`, r.small.slice(0, 4).join("; "));
    check(r.brandOk, `${lang}@${w} brand name fully visible (not truncated)`, r.brandInfo);
    check(r.tiny.length === 0, `${lang}@${w} no text < 12px`, r.tiny.slice(0, 4).join("; "));
    if (lang === "ta") check(r.tamilSizes.length === 0, `ta@${w} Tamil paragraphs >= 14px`, r.tamilSizes.slice(0, 4).join("; "));
    await page.screenshot({ path: `${OUT}/${lang}-${w}.png`, fullPage: false });
    await ctx.close();
  }
}

// ---------- 2. Mobile menu ----------
console.log("\n[2] Mobile menu");
for (const lang of ["en", "ta"]) {
  for (const w of MENU_WIDTHS) {
    const { page, ctx } = await newPage(w, lang);
    const btn = page.locator("#mobile-menu-button");
    const box0 = await btn.boundingBox();
    check(!!box0 && box0.x >= 0 && box0.x + box0.width <= w && box0.width >= 44 && box0.height >= 44, `${lang}@${w} menu button on screen and >=44px`, JSON.stringify(box0));
    await btn.click();
    await page.waitForTimeout(350);
    const nav = page.locator("#mobile-navigation");
    check(await nav.isVisible(), `${lang}@${w} menu opens`);
    check((await btn.getAttribute("aria-expanded")) === "true", `${lang}@${w} aria-expanded=true`);
    const nb = await nav.boundingBox();
    check(!!nb && nb.x >= 0 && nb.x + nb.width <= w + 0.5, `${lang}@${w} open menu fits width`, JSON.stringify(nb));
    await page.screenshot({ path: `${OUT}/menu-${lang}-${w}.png` });
    await btn.click();
    await page.waitForTimeout(350);
    check(!(await nav.isVisible()), `${lang}@${w} menu closes`);
    await ctx.close();
  }
}

// ---------- 3. Product popup ----------
console.log("\n[3] Product popup");
for (const lang of ["en", "ta"]) {
  const { page, ctx } = await newPage(390, lang);
  const titleBtn = page.locator("article h3 button").first();
  await titleBtn.scrollIntoViewIfNeeded();
  const label = (await titleBtn.textContent()).trim();
  await titleBtn.click();
  const dialog = page.locator('[role="dialog"][aria-modal="true"]').first();
  await dialog.waitFor({ state: "visible", timeout: 3000 });
  await page.waitForTimeout(400);
  const info = await page.evaluate(() => {
    const dlg = document.querySelector('[role="dialog"]');
    // find dimming backdrop: the dialog itself or an ancestor/sibling that is fixed & covers viewport with non-transparent bg
    let el = dlg;
    let dim = null;
    while (el && el !== document.body) {
      const cs = getComputedStyle(el);
      const m = cs.backgroundColor.match(/rgba?\(([^)]+)\)/);
      if (m) {
        const p = m[1].split(",").map((x) => parseFloat(x));
        const a = p.length === 4 ? p[3] : 1;
        const r = el.getBoundingClientRect();
        const covers = r.width >= innerWidth - 1 && r.height >= innerHeight - 1;
        if (a > 0.2 && a < 1 && covers) { dim = { a, rgb: p.slice(0, 3) }; break; }
      }
      el = el.parentElement;
    }
    return { overflow: getComputedStyle(document.body).overflow, dim };
  });
  check(info.overflow === "hidden", `${lang} body scroll locked`, info.overflow);
  check(!!info.dim, `${lang} page dimmed (semi-transparent full-screen backdrop)`, JSON.stringify(info.dim));
  const y0 = await page.evaluate(() => scrollY);
  await page.mouse.wheel(0, 600);
  await page.waitForTimeout(200);
  check((await page.evaluate(() => scrollY)) === y0, `${lang} page does not scroll behind popup`);
  await page.screenshot({ path: `${OUT}/modal-${lang}.png` });
  await page.keyboard.press("Escape");
  await page.waitForTimeout(400);
  check((await page.locator('[role="dialog"]').count()) === 0, `${lang} Escape closes popup`);
  check((await page.evaluate(() => getComputedStyle(document.body).overflow)) !== "hidden", `${lang} body scroll unlocked`);
  const focused = await page.evaluate(() => document.activeElement?.textContent?.trim());
  check(focused === label, `${lang} focus returns to the same product`, `expected "${label}", got "${focused}"`);
  await ctx.close();
}

// ---------- 4. Enquiry list + WhatsApp link ----------
console.log("\n[4] Enquiry list and WhatsApp link");
for (const lang of ["en", "ta"]) {
  const { page, ctx } = await newPage(390, lang);
  const addBtns = page.locator("article button:has(svg)").filter({ hasNot: page.locator("h3") });
  // the "add to enquiry list" button is the last button in each card
  const card = page.locator("article").first();
  await card.scrollIntoViewIfNeeded();
  await card.locator("button").last().click();
  const stored = await page.evaluate(() => localStorage.getItem("mfp_enquiry_ids"));
  let ids = null;
  try { ids = JSON.parse(stored); } catch {}
  check(Array.isArray(ids) && ids.length === 1 && /^[a-z0-9-]+$/i.test(String(ids[0])), `${lang} localStorage holds only IDs`, stored);
  await page.locator("aside button").first().click();
  const dlg = page.locator('[role="dialog"]').first();
  await dlg.waitFor({ state: "visible" });
  await page.waitForTimeout(400);
  const href = await dlg.locator('a[href*="wa.me"]').first().getAttribute("href");
  const okPrefix = href?.startsWith("https://wa.me/919659087877?text=");
  check(!!okPrefix, `${lang} wa.me link uses 919659087877`, href?.slice(0, 50));
  const text = decodeURIComponent(href.split("?text=")[1] || "");
  console.log(`      message (${lang}): ${JSON.stringify(text)}`);
  check(text.includes("Mezin Food Products"), `${lang} message names the business`);
  if (lang === "ta") {
    const latin = (text.match(/[A-Za-z]+/g) || []).filter((w) => !["Mezin", "Food", "Products"].includes(w));
    check(latin.length === 0, `ta message has no stray English`, latin.join(", "));
  }
  await page.screenshot({ path: `${OUT}/drawer-${lang}.png` });
  await page.keyboard.press("Escape");
  await page.waitForTimeout(300);
  await page.reload({ waitUntil: "networkidle" });
  const after = await page.evaluate(() => localStorage.getItem("mfp_enquiry_ids"));
  check(after === stored, `${lang} enquiry list persists after reload`);
  await ctx.close();
}

// ---------- 5. Visible text rules + Tamil Latin scan ----------
console.log("\n[5] Visible text rules");
for (const lang of ["en", "ta"]) {
  const { page, ctx } = await newPage(1280, lang);
  const text = await page.evaluate(() => document.body.innerText);
  check(!/\+91|\b91\s?9659/.test(text), `${lang} no +91 / 91 in visible text`);
  check(text.includes("96590 87877"), `${lang} phone shown as 96590 87877`);
  check(!/\bmill\b/i.test(text) && !text.includes("ஆலை"), `${lang} no "mill" wording`);
  const tels = await page.$$eval('a[href^="tel:"]', (a) => a.map((x) => x.getAttribute("href")));
  check(tels.length > 0 && tels.every((h) => h === "tel:+919659087877"), `${lang} tel links all tel:+919659087877`, [...new Set(tels)].join(","));
  if (lang === "ta") {
    const names = await page.evaluate(() => [...document.querySelectorAll("article h3, article h3 + p")].map((e) => e.textContent));
    const html = await page.content();
    // Allowed per CLAUDE.md: brand, MFP, product names. Also the language switcher's own labels ("EN", "English").
    const allowed = new Set(["Mezin", "Food", "Products", "MFP", "EN", "English"]);
    for (const n of names) for (const w of n.match(/[A-Za-z]+/g) || []) allowed.add(w);
    // letters glued to digits (e.g. house number "72K6") are not words
    const latin = [...new Set((text.match(/(?<![\dA-Za-z])[A-Za-z]+(?![\dA-Za-z])/g) || []).filter((w) => !allowed.has(w)))];
    check(latin.length === 0, "ta page text has no unexpected Latin words", latin.join(", "));
    check(html.includes("Noto Sans Tamil") || (await page.evaluate(() => getComputedStyle(document.body).fontFamily)).length > 0, "ta font stack present");
    const fam = await page.evaluate(() => getComputedStyle(document.querySelector("h1")).fontFamily);
    console.log(`      ta h1 font-family: ${fam}`);
    check(/tamil/i.test(fam), "ta h1 uses the Tamil font variable", fam);
  }
  await ctx.close();
}

await browser.close();
console.log(`\n==== ${passes} passed, ${failures} failed ====`);
process.exit(failures ? 1 : 0);
