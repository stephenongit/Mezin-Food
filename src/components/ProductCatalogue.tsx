"use client";

import React, { useState } from "react";
import { products, Product } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";
import { Sparkles, MessageCircle } from "lucide-react";

export const ProductCatalogue: React.FC = () => {
  const { t, isTamil } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const generalWhatsappUrl = siteConfig.buildWhatsappUrl(t.whatsappMessages.general);

  return (
    <section id="products" className="py-12 md:py-20 bg-cream-100 relative border-b border-beige-200">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 pattern-dots opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-beige-200/80 border border-gold-500/30 text-brown-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span className={isTamil ? "font-tamil text-xs" : "tracking-wide"}>{t.products.badge}</span>
          </div>

          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-brown-950 tracking-tight ${
              isTamil ? "font-tamil text-2xl sm:text-3xl" : "font-serif"
            }`}
          >
            {t.products.title}
          </h2>

          <p
            className={`mt-3 text-sm sm:text-base md:text-lg text-brown-700 leading-relaxed ${
              isTamil ? "font-tamil text-base sm:text-lg leading-loose" : ""
            }`}
          >
            {t.products.subtitle}
          </p>

          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold-400" />
            <span
              className={`text-xs font-semibold text-brown-600 ${
                isTamil ? "font-tamil text-xs" : "uppercase tracking-widest"
              }`}
            >
              {t.products.itemCount}
            </span>
            <span className="h-px w-10 bg-gold-400" />
          </div>
        </div>

        {/* 5 Product Cards Grid + 6th slot general question card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetails={(p) => setSelectedProduct(p)}
            />
          ))}

          {/* 6th grid card: Questions */}
          <div className="bg-gradient-to-br from-beige-100 to-cream-50 rounded-3xl border-2 border-dashed border-beige-300 p-6 flex flex-col justify-center items-center text-center shadow-sm gap-4">
            <div className="w-12 h-12 rounded-full bg-olive-100 border border-olive-200 flex items-center justify-center text-olive-800">
              <MessageCircle className="w-6 h-6" />
            </div>

            <div className="space-y-1.5 max-w-xs">
              <h3
                className={`text-xl sm:text-2xl font-bold text-brown-950 ${
                  isTamil ? "font-tamil text-xl" : "font-serif"
                }`}
              >
                {t.products.customCardTitle}
              </h3>
              <p
                className={`text-xs sm:text-sm text-brown-700 leading-relaxed ${
                  isTamil ? "font-tamil text-xs leading-normal" : ""
                }`}
              >
                {t.products.customCardDesc}
              </p>
            </div>

            <div className="w-full max-w-xs pt-1">
              <a
                href={generalWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-olive-700 hover:bg-olive-800 text-cream-50 font-bold text-xs sm:text-sm tracking-wide shadow-sm hover:shadow transition-colors min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 text-cream-100" />
                <span className={isTamil ? "font-tamil text-sm" : ""}>
                  {t.products.customCardCta}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Modal */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  );
};
