export const SITE_CONFIG = {
  brandName: "Mezin Food Products",
  brandAbbreviation: "MFP",
  tagline: "Healthy and Tasty",
  phone: "+91 96590887877",
  phoneRaw: "+919659087877",
  phoneTel: "tel:+919659087877",
  whatsappNumber: "919659087877",
  address: {
    line1: "72K6 3rd PeriyaGounder Street",
    line2: "North Vinayagapuram",
    area: "Saravanampatti",
    city: "Coimbatore",
    state: "Tamil Nadu",
    postalCode: "641035",
    country: "India",
    landmark: "Opposite Kalyani Medicals",
    listingAddress:
      "3rd St, North Vinayagapuram, Saravanampatti, Coimbatore, Tamil Nadu 641035, India",
    fullFormatted:
      "72K6 3rd PeriyaGounder Street, North Vinayagapuram, Saravanampatti, Coimbatore - 641035, Opposite Kalyani Medicals",
  },
  // Official verified Google Maps listing & coordinates
  mapLocation: {
    lat: 11.0608872,
    lng: 77.0026602,
    listingName: "Mezin food products",
    directUrl: "https://maps.app.goo.gl/NRFW9RnuBxCuPxvp9",
    getEmbedUrl: () => {
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY;
      if (apiKey) {
        return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=11.0608872,77.0026602&zoom=16`;
      }
      // Clean fallback standard embed with exact verified coordinates & listing marker
      return `https://maps.google.com/maps?q=11.0608872,77.0026602(Mezin%20food%20products)&z=16&output=embed`;
    },
  },
  getWhatsAppUrl: (customMessage?: string) => {
    const defaultMsg = "Hi, I would like to enquire about Mezin Food Products.";
    const text = encodeURIComponent(customMessage || defaultMsg);
    return `https://wa.me/919659087877?text=${text}`;
  },
  // Price excluded from pre-filled message as per client requirement to avoid outdated price info
  getProductEnquiryUrl: (productName: string, weight?: string) => {
    const weightSuffix = weight ? ` (${weight})` : "";
    const text = encodeURIComponent(
      `Hi, I'm interested in MFP ${productName}${weightSuffix}.`
    );
    return `https://wa.me/919659087877?text=${text}`;
  },
};
