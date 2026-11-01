/**
 * Central business configuration for Mezin Food Products (MFP).
 * Visible phone number MUST NOT include country code (strictly "96590 87877").
 * Country code +91 appears ONLY in tel: and https://wa.me/ URLs.
 */

export const siteConfig = {
  name: "Mezin Food Products",
  shortName: "MFP",
  taglineEn: "Saravanampatti, Coimbatore",
  taglineTa: "சரவணம்பட்டி, கோயம்புத்தூர்",

  // Strictly formatted display phone number (no country code in visible text)
  displayPhone: "96590 87877",

  // Country code 91 is strictly internal to link protocols
  rawPhone: "919659087877",
  phoneUrl: "tel:+919659087877",
  whatsappBaseUrl: "https://wa.me/919659087877",

  address: {
    line1: "72K6, 3rd PeriyaGounder Street",
    line2: "North Vinayagapuram",
    area: "Saravanampatti",
    city: "Coimbatore",
    pincode: "641035",
    state: "Tamil Nadu",
    country: "India",
    landmark: "Opposite Kalyani Medicals",
    fullFormattedEn:
      "72K6, 3rd PeriyaGounder Street, North Vinayagapuram, Saravanampatti, Coimbatore – 641035, Tamil Nadu, India.",
    fullFormattedTa:
      "72K6, 3வது பெரியகவுண்டர் தெரு, வடக்கு விநாயகபுரம், சரவணம்பட்டி, கோயம்புத்தூர் – 641035, தமிழ்நாடு, இந்தியா.",
    areaTa: "சரவணம்பட்டி",
    cityTa: "கோயம்புத்தூர்",
    landmarkTa: "கல்யாணி மெடிக்கல்ஸ் எதிரில்",
  },

  // Google Maps search query URL without requiring API key
  get mapsUrl(): string {
    const query = `${this.name}, ${this.address.line1}, ${this.address.line2}, ${this.address.area}, ${this.address.city} - ${this.address.pincode}, ${this.address.state}, ${this.address.country}`;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  },

  // Single source of truth for URL builder; message text comes from translation files
  buildWhatsappUrl(message: string): string {
    return `${this.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
  },
};
