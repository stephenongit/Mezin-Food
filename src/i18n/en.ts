import { TranslationSchema } from "./types";

export const en: TranslationSchema = {
  accessibility: {
    languageSelection: "Language selection",
    enquiryListStatus: "Enquiry list status",
    logoAlt: "Mezin Food Products Logo",
    mainNav: "Main Navigation",
    mobileNav: "Mobile Navigation",
    quickContact: "Quick contact",
    openDetails: (name: string) => `View details for ${name}`,
    removeItem: (name: string) => `Remove ${name} from enquiry list`,
  },
  nav: {
    home: "Home",
    about: "About Us",
    products: "Products",
    contact: "Contact",
    enquireWhatsapp: "Enquire on WhatsApp",
    callUs: (phone: string) => `Call ${phone}`,
    menuOpen: "Open Navigation Menu",
    menuClose: "Close Navigation Menu",
  },
  hero: {
    badge: "Spices • Flour • Batter — Saravanampatti, Coimbatore",
    headlinePrefix: "Mezin Food Products, ",
    headlineAccent: "Saravanampatti, Coimbatore.",
    headlineFull: "Mezin Food Products, Saravanampatti, Coimbatore.",
    subheadline:
      "We grind spices and flour and prepare batter in Saravanampatti, Coimbatore. We also pack selected raw ingredients sourced from farmer's markets.",
    primaryCta: "Explore Products",
    secondaryCta: "Contact Us",
    whatsappCta: "Enquire on WhatsApp",
    locationBadge: "Location",
    locationValue: "Saravanampatti, Coimbatore",
    processBadge: "Activities",
    processValue: "Spices, Flour & Batter",
    sourcingBadge: "Raw Ingredients",
    sourcingValue: "Farmer's Market Sourced",
    productShelfBadge: "Our Products",
    productShelfCount: "5 Items",
    productShelfNote: "Our five products",
    shelfLabels: {
      chilli: "Chilli",
      sambar: "Sambar",
      podi: "Podi",
      ragi: "Ragi",
      puttu: "Puttu",
    },
  },
  about: {
    badge: "About Mezin Food Products",
    title: "South Indian Food Preparation, Made Simple to Enquire",
    introP1:
      "Mezin Food Products (MFP) is a local food-processing business in North Vinayagapuram, Saravanampatti, Coimbatore.",
    introP2:
      "We work in four areas: grinding spices, grinding flour, preparing batter, and packing selected raw ingredients sourced from farmer's markets.",
    introP3:
      "We combine traditional South Indian food preparation with a clean, modern way to browse products and enquire.",
    activitiesTitle: "Our Four Activities",
    activitiesSubtitle: "We prepare and package kitchen items in Saravanampatti, Coimbatore.",
    spicesTitle: "Grinding Spices",
    spicesDesc: "We grind spices, including chilli powder and sambar powder.",
    flourTitle: "Grinding Flour",
    flourDesc: "We grind flours, including ragi flour.",
    batterTitle: "Preparing Batter",
    batterDesc: "We prepare batter. Ask us on WhatsApp what is currently available.",
    rawTitle: "Packing Selected Raw Ingredients",
    rawDesc: "We pack selected raw ingredients sourced from farmer's markets.",
    howToEnquireTitle: "How to Enquire",
    step1Title: "1. Browse Products",
    step1Desc: "View our five initial products and their details.",
    step2Title: "2. Build an Enquiry",
    step2Desc: "Tap 'Enquire on WhatsApp' on any product, or add several items to your enquiry list.",
    step3Title: "3. Confirm Weights & Prices",
    step3Desc: "Message or call us directly on WhatsApp or phone for current weights and pricing.",
  },
  products: {
    badge: "Product Catalogue",
    title: "Our Products",
    subtitle:
      "Our current range. Enquire on WhatsApp for weights and prices, or build an enquiry list.",
    itemCount: "5 products",
    enquireWhatsapp: "Enquire on WhatsApp",
    addToList: "Add to Enquiry List",
    inList: "Added to Enquiry List",
    removeFromList: "Remove from List",
    viewDetails: "View Details",
    customCardTitle: "Questions?",
    customCardDesc:
      "Have a question about a product, weight or price? Message us on WhatsApp.",
    customCardCta: "Message on WhatsApp",
  },
  modal: {
    title: "Product Details",
    close: "Close details",
    category: "Category",
    description: "Product Description",
    weights: "Available Weights",
    pricingNote: "Weights and prices are shared when you enquire on WhatsApp.",
    enquireWhatsapp: "Enquire on WhatsApp",
    addToList: "Add to Enquiry List",
    inList: "In Enquiry List",
  },
  enquiryDrawer: {
    floatingButton: "Enquiry List",
    title: "Your Enquiry List",
    subtitle:
      "Review your selected products and send a single WhatsApp enquiry for all items together.",
    emptyTitle: "Your enquiry list is empty",
    emptySubtitle:
      "Click 'Add to enquiry list' on any product card to compile multiple products for enquiry.",
    selectedCount: "Selected Products",
    clearAll: "Clear All",
    removeItem: "Remove item",
    sendWhatsapp: "Send Enquiry on WhatsApp",
    helperNotice:
      "This generates a prefilled message on WhatsApp. No checkout, payment, or account required.",
    closeDrawer: "Close list",
  },
  contact: {
    badge: "Contact & Location",
    title: "Connect with Mezin Food Products",
    subtitle:
      "We are based in Saravanampatti, Coimbatore. Call us directly or message us on WhatsApp for weights, availability and questions.",
    addressHeading: "Our Location",
    landmarkLabel: "Landmark",
    landmarkValue: "Opposite Kalyani Medicals",
    phoneHeading: "Direct Phone Call",
    phoneLabel: "Phone Number",
    phoneDesc: "Direct line for phone enquiries",
    whatsappHeading: "WhatsApp Enquiry",
    whatsappLabel: "Chat on WhatsApp",
    whatsappDesc: "Ask about products, weights and prices.",
    callButton: "Call 96590 87877",
    whatsappButton: "Chat on WhatsApp",
    directionsButton: "Get Directions on Google Maps",
    locationHeading: "Our Location",
  },
  mobileBar: {
    whatsapp: "WhatsApp",
    call: "Call",
  },
  footer: {
    shortDesc:
      "Local food-processing business in Saravanampatti, Coimbatore. We grind spices and flour, prepare batter and pack selected raw ingredients.",
    quickLinks: "Quick Navigation",
    contactHeading: "Contact Details",
    copyright: "Mezin Food Products (MFP). All rights reserved.",
    tagline: "Saravanampatti, Coimbatore.",
    chatWhatsapp: "Chat on WhatsApp",
    locationFootnote: "Coimbatore, Tamil Nadu • Saravanampatti",
  },
  whatsappMessages: {
    singleProduct: (productName: string) =>
      `Hello Mezin Food Products, I would like to enquire about ${productName}. Please share the available weights and pricing.`,
    multipleProducts: (productNames: string[]) => {
      const list = productNames.map((name, i) => `${i + 1}. ${name}`).join("\n");
      return `Hello Mezin Food Products, I would like to enquire about the following products:\n${list}\nPlease share the available weights and pricing.`;
    },
    general:
      "Hello Mezin Food Products, I would like to know more about your products and services.",
  },
};
