/**
 * Environment configuration for Mezin Food Products (MFP).
 * Does not assume or invent an unconfirmed production domain.
 */

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL.trim()}`
  : null;

// Configured production site URL (null if not yet set by owner)
export const configuredSiteUrl = rawSiteUrl || vercelUrl || null;

// Has a confirmed external URL been provided?
export const hasConfiguredSiteUrl = Boolean(configuredSiteUrl);

// Effective URL (falls back strictly to http://localhost:3000 for local dev/preview)
export const siteUrl = configuredSiteUrl || "http://localhost:3000";
