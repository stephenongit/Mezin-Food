export type ProductVariant = {
  weight: string;
  price?: number;
};

export type Product = {
  id: string;
  nameEn: string;
  nameTa: string;
  categoryEn: string;
  categoryTa: string;
  descriptionEn: string;
  descriptionTa: string;
  // Path under public/, e.g. "/products/chilli-powder.jpg". If absent, the SVG motif is rendered.
  // AI-generated placeholder, replace with real MFP pack photos.
  image?: string;
  variants?: ProductVariant[]; // Omit entirely until supplied by business owner
  descriptionIsPlaceholder: boolean;
  accentColor: string;
  motifType: "chilli" | "sambar" | "podi" | "ragi" | "puttu";
};

export const products: Product[] = [
  {
    id: "chilli-powder",
    nameEn: "Chilli Powder",
    nameTa: "மிளகாய் தூள்",
    categoryEn: "Spice powder",
    categoryTa: "மசாலா தூள்",
    descriptionEn: "Ground chilli powder for everyday cooking.",
    descriptionTa: "தினசரி சமையலுக்கான அரைத்த மிளகாய் தூள்.",
    image: "/products/chilli-powder.jpg",
    descriptionIsPlaceholder: true,
    accentColor: "#983C25",
    motifType: "chilli",
  },
  {
    id: "sambar-powder",
    nameEn: "Sambar Powder",
    nameTa: "சாம்பார் தூள்",
    categoryEn: "Spice powder",
    categoryTa: "மசாலா தூள்",
    descriptionEn: "Spice powder for preparing sambar.",
    descriptionTa: "சாம்பார் தயாரிப்பதற்கான மசாலா தூள்.",
    image: "/products/sambar-powder.jpg",
    descriptionIsPlaceholder: true,
    accentColor: "#C89539",
    motifType: "sambar",
  },
  {
    id: "idli-podi",
    nameEn: "Idli Podi",
    nameTa: "இட்லி பொடி",
    categoryEn: "Podi",
    categoryTa: "பொடி",
    descriptionEn: "A traditional South Indian accompaniment for idli and dosa.",
    descriptionTa: "இட்லி மற்றும் தோசைக்கான பாரம்பரிய தென்னிந்திய பொடி.",
    image: "/products/idli-podi-v2.jpg",
    descriptionIsPlaceholder: true,
    accentColor: "#7A5239",
    motifType: "podi",
  },
  {
    id: "ragi-flour",
    nameEn: "Ragi Flour",
    nameTa: "ராகி மாவு",
    categoryEn: "Flour",
    categoryTa: "மாவு",
    descriptionEn: "Flour ground from ragi (finger millet).",
    descriptionTa: "கேழ்வரகிலிருந்து (ராகி) அரைக்கப்பட்ட மாவு.",
    image: "/products/ragi-flour.jpg",
    descriptionIsPlaceholder: true,
    accentColor: "#496335",
    motifType: "ragi",
  },
  {
    id: "mappillai-samba-puttu",
    nameEn: "Mappillai Samba Puttu",
    nameTa: "மாப்பிள்ளை சம்பா புட்டு",
    categoryEn: "Puttu",
    categoryTa: "புட்டு",
    descriptionEn: "A traditional South Indian puttu product made from Mappillai Samba.",
    descriptionTa: "மாப்பிள்ளை சம்பா அரிசியால் செய்யப்பட்ட பாரம்பரிய தென்னிந்திய புட்டு மாவு தயாரிப்பு.",
    image: "/products/puttu-flour.jpg",
    descriptionIsPlaceholder: true,
    accentColor: "#5E3924",
    motifType: "puttu",
  },
];
