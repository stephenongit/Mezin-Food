# Mezin Food Products (MFP)

> **Saravanampatti, Coimbatore.**  
> *சரவணம்பட்டி, கோயம்புத்தூர்.*

Official brand website and product catalogue for **Mezin Food Products (MFP)**, a traditional food-processing business located in North Vinayagapuram, Saravanampatti, Coimbatore, Tamil Nadu.

---

## 🌾 Business Summary

- **Business Name:** Mezin Food Products
- **Short Name:** MFP
- **Address:** 72K6, 3rd PeriyaGounder Street, North Vinayagapuram, Saravanampatti, Coimbatore – 641035, Tamil Nadu, India.
- **Landmark:** Opposite Kalyani Medicals
- **Phone:** 96590 87877
- **Core Activities:**
  1. Grinding spices
  2. Grinding flour
  3. Preparing batter
  4. Packaging selected raw ingredients sourced from farmer's markets

---

## 🚀 Key Features

1. **60% Modern, 40% Traditional South Indian Aesthetic:**
   - Warm earthy palette: Cream, Deep Brown, Warm Beige, Olive Green, Muted Gold, Terracotta.
   - Elegant typography with **Noto Sans Tamil** for crisp Tamil rendering and **Plus Jakarta Sans** for modern Latin readability.
   - Traditional Kolam and spice geometric motif accents.
2. **Bilingual Support (English & Tamil):**
   - Seamless language toggle with persistence via `localStorage`.
   - Complete, separate translation dictionaries (`src/i18n/en.ts` and `src/i18n/ta.ts`).
3. **Verified Initial Product Catalogue (5 Products):**
   - Chilli Powder (*மிளகாய் தூள்*)
   - Sambar Powder (*சாம்பார் தூள்*)
   - Idli Podi (*இட்லி பொடி*)
   - Ragi Flour (*ராகி மாவு*)
   - Mappillai Samba Puttu (*மாப்பிள்ளை சம்பா புட்டு*)
4. **WhatsApp Enquiry & Lightweight Enquiry List:**
   - Individual product enquiry: One-click prefilled message with Tamil/English product name.
   - Multi-product enquiry list: Add products to a temporary enquiry list; send a consolidated enquiry on WhatsApp listing all selected items.
   - Zero e-commerce bloat (no checkout, no payment gateway, no accounts, no database).
5. **Direct Calling & Navigation:**
   - Click-to-call: `tel:+919659087877` (with country code restricted only to link protocols; display is strictly `96590 87877`).
   - Get Directions: Opens Google Maps search directly with the verified Saravanampatti address.
6. **SEO & Accessibility (WCAG AA):**
   - Clean semantic HTML structure.
   - Verified `LocalBusiness` JSON-LD schema (no fake ratings or unverified opening hours).
   - Touch targets >= 44px, full keyboard navigation, and focus trapping in modals and drawers.

---

## 🛠 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Fonts:** Next.js Google Fonts (`Plus_Jakarta_Sans` & `Noto_Sans_Tamil`)

---

## 📂 Quick Editing Guide

| Item to Change | File Location | What to Edit |
|---|---|---|
| **Phone number, address, landmark, map link** | `src/config/site.ts` | Edit `displayPhone`, `phoneUrl`, `whatsappBaseUrl`, and `address` object |
| **Products (names, weights, prices, descriptions)** | `src/data/products.ts` | Edit or add items to the `products` array. Add `variants: [{ weight: "500g", price: 120 }]` once confirmed |
| **English website text** | `src/i18n/en.ts` | Edit text values for English |
| **Tamil website text** | `src/i18n/ta.ts` | Edit text values for Tamil |
| **Brand Logo & Images** | `public/images/` | Replace `mfp-logo.jpg` or place product photos in `public/images/products/<product-id>.webp` (1200×1200). When `product.image` is set in `src/data/products.ts`, it automatically renders the real photograph. |

---

## 🚢 Local Development & Production Build

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run production build
npm run build

# Run automated tests and checks (classes, claims, tamil vocabulary)
npm run verify

# Start production server
npm start
```

---

## 🌐 Environment Variables & Deployment (Vercel)

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Optional (Recommended once domain is registered) | The public canonical URL of the website (e.g. `https://your-domain.example`). If not set, falls back to `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` on Vercel, or `http://localhost:3000` in local development. When no production domain is configured, canonical URL, OpenGraph URLs, and sitemap advertising are omitted to prevent pointing search engines to unconfirmed domains. |

### Deploying to Vercel

1. Push this repository to GitHub/GitLab.
2. In the Vercel Dashboard, click **Add New...** > **Project** and import the repository.
3. Framework Preset will auto-detect as **Next.js**.
4. In **Settings > Environment Variables**, once the custom domain is acquired, add:
   - **Key:** `NEXT_PUBLIC_SITE_URL`
   - **Value:** `https://yourdomain.com` (no trailing slash)
5. Click **Deploy**. Vercel will build and assign preview and production URLs automatically.


