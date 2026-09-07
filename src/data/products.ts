export interface ProductImage {
  src: string;
  alt: string;
  isPlaceholder: boolean;
}

export type ProductCategory = "Spice Powders" | "Flours" | "Puttu Flour" | "Batters";

export interface Product {
  id: string;
  index: string;
  nameEnglish: string;
  nameTamil: string;
  category: ProductCategory;
  categoryTamil: string;
  weight?: string;
  price?: number;
  description: string;
  image: ProductImage;
}

export const PRODUCTS: Product[] = [
  {
    id: "chilli-powder",
    index: "01",
    nameEnglish: "Chilli Powder",
    nameTamil: "மிளகாய் தூள்",
    category: "Spice Powders",
    categoryTamil: "பொடி வகைகள்",
    weight: "250 g",
    price: 80,
    description: "Freshly ground chilli powder.",
    image: {
      src: "/images/chilli-powder.jpg",
      alt: "Chilli Powder in transparent clear pouch - மிளகாய் தூள்",
      isPlaceholder: true,
    },
  },
  {
    id: "sambar-powder",
    index: "02",
    nameEnglish: "Sambar Powder",
    nameTamil: "சாம்பார் தூள்",
    category: "Spice Powders",
    categoryTamil: "பொடி வகைகள்",
    weight: "250 g",
    price: 80,
    description: "Aromatic spice blend for sambar.",
    image: {
      src: "/images/sambar-powder.jpg",
      alt: "Sambar Powder in transparent clear pouch - சாம்பார் தூள்",
      isPlaceholder: true,
    },
  },
  {
    id: "idli-podi",
    index: "03",
    nameEnglish: "Idli Podi",
    nameTamil: "இட்லி பொடி",
    category: "Spice Powders",
    categoryTamil: "பொடி வகைகள்",
    weight: "100 g",
    price: 40,
    description: "Tasty traditional idli podi.",
    image: {
      src: "/images/idli-podi-v2.jpg",
      alt: "Idli Podi in transparent clear pouch - இட்லி பொடி",
      isPlaceholder: true,
    },
  },
  {
    id: "ragi-flour",
    index: "04",
    nameEnglish: "Ragi Flour",
    nameTamil: "ராகி மாவு",
    category: "Flours",
    categoryTamil: "மாவு வகைகள்",
    weight: "500 g",
    price: 35,
    description: "Nutritious ragi flour.",
    image: {
      src: "/images/ragi-flour.jpg",
      alt: "Ragi Flour in transparent clear pouch - ராகி மாவு",
      isPlaceholder: true,
    },
  },
  {
    id: "puttu-flour",
    index: "05",
    nameEnglish: "Mappillai Samba Puttu Flour",
    nameTamil: "மாப்பிள்ளை சம்பா புட்டு மாவு",
    category: "Puttu Flour",
    categoryTamil: "புட்டு மாவு",
    weight: "500 g",
    price: 55,
    description: "Traditional Mappillai Samba puttu flour.",
    image: {
      src: "/images/puttu-flour.jpg",
      alt: "Mappillai Samba Puttu Flour in transparent clear pouch - மாப்பிள்ளை சம்பா புட்டு மாவு",
      isPlaceholder: true,
    },
  },
  {
    id: "idli-dosa-batter",
    index: "06",
    nameEnglish: "Idli / Dosa Batter",
    nameTamil: "இட்லி / தோசை மாவு",
    category: "Batters",
    categoryTamil: "மாவு வகைகள்",
    price: 30,
    description: "Freshly prepared traditional batter.",
    image: {
      src: "/images/idli-dosa-batter-v2.jpg",
      alt: "Idli / Dosa Batter in transparent clear plastic bag tied with rubber band - இட்லி / தோசை மாவு",
      isPlaceholder: true,
    },
  },
];

export const CATEGORIES = [
  { id: "ALL", label: "All Products" },
  { id: "Spice Powders", label: "Spice Powders" },
  { id: "Flours", label: "Flours" },
  { id: "Puttu Flour", label: "Puttu Flour" },
  { id: "Batters", label: "Batters" },
] as const;
