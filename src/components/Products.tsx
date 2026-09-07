"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { PRODUCTS, CATEGORIES, Product } from "@/data/products";
import { SITE_CONFIG } from "@/data/siteConfig";
import ProductModal from "@/components/ProductModal";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const filteredProducts =
    selectedCategory === "ALL"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  const totalProductsCount = String(PRODUCTS.length).padStart(2, "0");
  const totalCategoriesCount = CATEGORIES.filter((c) => c.id !== "ALL").length;

  return (
    <section
      id="products"
      className="py-20 sm:py-28 md:py-36 bg-ivory border-b border-chocolate/10"
      aria-label="Product Catalog"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-6 border-b border-chocolate/10"
        >
          <div>
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-olive block mb-2">
              Catalog
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-chocolate tracking-tight uppercase">
              Our Products
            </h2>
          </div>
          <div className="font-sans text-xs font-semibold text-chocolate-muted uppercase tracking-wider">
            {totalProductsCount} Products · {totalCategoriesCount} Categories
          </div>
        </motion.div>

        {/* Category Filter Tabs - Horizontally Scrollable on Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          role="tablist"
          aria-label="Filter Products by Category"
          className="flex items-center gap-2.5 sm:gap-3 mb-12 sm:mb-16 overflow-x-auto pb-2 scrollbar-none sm:flex-wrap"
        >
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`btn-press font-sans px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer shrink-0 ${
                  isActive
                    ? "bg-olive-dark text-ivory shadow-2xs"
                    : "bg-ivory-card text-chocolate hover:text-chocolate hover:bg-linen border border-chocolate/15"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Product Cards Grid - Clean, Stable Dissolve Filter Animation */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {filteredProducts.map((product: Product) => (
            <article
              key={product.id}
              className="catalog-card rounded-2xl overflow-hidden flex flex-col justify-between group cursor-pointer"
              onClick={() => setActiveModalProduct(product)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveModalProduct(product);
                }
              }}
              role="button"
              aria-label={`View details for ${product.nameEnglish} (${product.nameTamil})`}
            >
              {/* Product Image Frame */}
              <div className="relative aspect-square overflow-hidden bg-white border-b border-chocolate/10 flex items-center justify-center p-4 sm:p-6">
                <div className="relative w-full h-full">
                  <Image
                    src={product.image.src}
                    alt={product.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain transition-transform duration-300 ease-out group-hover:scale-[1.015]"
                  />
                </div>

                {/* Category & Index Badges */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-md text-[0.75rem] font-sans font-semibold text-chocolate uppercase tracking-wider border border-chocolate/15 shadow-2xs">
                  {product.category}
                </div>
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[0.75rem] font-sans font-bold text-olive uppercase tracking-wider border border-chocolate/15 shadow-2xs">
                  {product.index}
                </div>
              </div>

              {/* Product Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-ivory-card">
                <div>
                  {/* English and Tamil Names */}
                  <h3 className="font-sans text-[1.4rem] sm:text-[1.5rem] font-bold text-chocolate tracking-tight leading-snug group-hover:text-olive transition-colors duration-200">
                    {product.nameEnglish}
                  </h3>
                  <p className="tamil-text text-[1.25rem] sm:text-[1.35rem] font-semibold text-chocolate leading-snug mt-1 mb-3.5">
                    {product.nameTamil}
                  </p>

                  {/* Metadata Row: [ Weight ] Price */}
                  <div className="flex items-center justify-between gap-3 mb-4 min-h-[32px]">
                    {product.weight ? (
                      <span className="font-sans text-[0.875rem] font-medium text-chocolate bg-linen/80 px-3 py-1 rounded-md border border-chocolate/12">
                        {product.weight}
                      </span>
                    ) : (
                      <span className="font-sans text-xs font-semibold text-olive bg-linen/60 px-3 py-1 rounded-md border border-chocolate/10 uppercase tracking-wider">
                        Enquire for Details
                      </span>
                    )}
                    {product.price !== undefined ? (
                      <span className="font-sans text-[1.25rem] sm:text-[1.3rem] font-bold text-chocolate tracking-normal">
                        ₹{product.price}
                      </span>
                    ) : null}
                  </div>

                  {/* Description */}
                  <p className="font-sans text-[0.95rem] leading-relaxed text-chocolate-muted mb-6 font-normal">
                    {product.description}
                  </p>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-chocolate/10 flex items-center justify-between gap-3 mt-auto">
                  <span className="font-sans text-[0.8rem] uppercase tracking-wider text-olive font-semibold flex items-center gap-1.5 group-hover:text-olive-dark transition-colors">
                    View Details
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>

                  <a
                    href={SITE_CONFIG.getProductEnquiryUrl(
                      product.nameEnglish,
                      product.weight
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="btn-press font-sans inline-flex items-center gap-2 bg-linen hover:bg-olive-dark text-chocolate hover:text-ivory text-[0.8125rem] font-semibold uppercase tracking-wider px-4 py-2.5 rounded-lg transition-colors border border-chocolate/15 shadow-2xs"
                    aria-label={`Enquire about ${product.nameEnglish} on WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4 text-olive group-hover:text-ivory" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </motion.div>

      </div>

      {/* Product Detail Modal */}
      <ProductModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />
    </section>
  );
}
