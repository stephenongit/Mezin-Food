"use client";

import React from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";
import { useEnquiry } from "@/context/EnquiryContext";
import { ProductMotif } from "./ProductMotif";
import { MessageCircle, Plus, Check, Eye } from "lucide-react";

type ProductCardProps = {
  product: Product;
  onOpenDetails: (product: Product) => void;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenDetails }) => {
  const { isTamil, t } = useLanguage();
  const { addItem, removeItem, isInList } = useEnquiry();

  const inList = isInList(product.id);

  const productName = isTamil ? product.nameTa : product.nameEn;
  const secondaryName = isTamil ? product.nameEn : product.nameTa;
  const description = isTamil ? product.descriptionTa : product.descriptionEn;
  const category = isTamil ? product.categoryTa : product.categoryEn;

  const whatsappMessage = t.whatsappMessages.singleProduct(productName);
  const whatsappUrl = siteConfig.buildWhatsappUrl(whatsappMessage);

  const handleEnquiryListToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (inList) {
      removeItem(product.id);
    } else {
      addItem(product);
    }
  };

  return (
    <article
      onClick={() => onOpenDetails(product)}
      className="group relative bg-cream-50 rounded-3xl border border-beige-300 shadow-sm hover:shadow-warm-lg hover:border-olive-600/50 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
    >
      {/* Top Banner & Category Badge */}
      <div className="p-5 sm:p-6 pb-2">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-beige-100 text-brown-800 border border-beige-200 ${
              isTamil ? "font-tamil text-xs" : "uppercase tracking-wider text-xs"
            }`}
          >
            {category}
          </span>

          {inList && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-olive-100 text-olive-900 border border-olive-300">
              <Check className="w-3.5 h-3.5 text-olive-700" />
              <span className={isTamil ? "font-tamil text-xs" : ""}>{t.products.inList}</span>
            </span>
          )}
        </div>

        {/* Visual Showcase: aspect-[16/9] on phone (~150px) to shorten page, aspect-[4/3] on sm+ */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] rounded-2xl bg-cream border border-beige-200/80 flex items-center justify-center p-3 sm:p-4 overflow-hidden transition-transform group-hover:scale-[1.01] duration-300">
          {/* Subtle colored accent strip on top */}
          <div
            className="absolute top-0 inset-x-0 h-1"
            style={{ backgroundColor: product.accentColor }}
          />

          {/* Real photo if available; otherwise 40% enlarged crisp SVG motif */}
          {product.image ? (
            <div className="relative w-full h-full bg-white rounded-xl overflow-hidden flex items-center justify-center">
              <Image
                src={product.image}
                alt={productName}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
              />
            </div>
          ) : (
            <ProductMotif
              type={product.motifType}
              className="w-32 h-32 sm:w-36 sm:h-36 drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
          )}

          {/* 44px touch target eye icon */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails(product);
            }}
            className="absolute bottom-2.5 right-2.5 bg-cream-50/95 hover:bg-cream-50 text-brown-800 rounded-full shadow-sm min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors border border-beige-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-olive-600"
            aria-label={t.accessibility.openDetails(productName)}
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Product Names: Product name is a real accessible button */}
        <div className="mt-4 space-y-1">
          <h3>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenDetails(product);
              }}
              className={`text-left inline-flex items-center min-h-[44px] font-bold text-xl sm:text-2xl text-brown-950 leading-snug hover:text-olive-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-olive-600 rounded-md p-0.5 ${
                isTamil ? "font-tamil text-xl sm:text-2xl" : "font-serif"
              }`}
            >
              {productName}
            </button>
          </h3>
          <p className="text-xs sm:text-sm font-medium text-brown-600">
            {isTamil ? (
              <span>{secondaryName}</span>
            ) : (
              <span lang="ta" className="font-tamil text-sm">
                {secondaryName}
              </span>
            )}
          </p>
        </div>

        {/* Short description */}
        <p
          className={`mt-2 text-xs sm:text-sm text-brown-700 leading-relaxed ${
            isTamil ? "font-tamil text-sm leading-normal line-clamp-3" : "line-clamp-2"
          }`}
        >
          {description}
        </p>

        {/* Weights and Prices - ONLY displayed if supplied */}
        {product.variants && product.variants.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {product.variants.map((v, idx) => (
              <span
                key={idx}
                className="text-xs px-2.5 py-1 rounded bg-beige-100 text-brown-900 font-semibold border border-beige-200"
              >
                {v.weight}
                {v.price && ` - ₹${v.price}`}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Action Buttons: WhatsApp Enquire & Add to Enquiry List */}
      <div className="p-5 sm:p-6 pt-3 mt-auto space-y-2 border-t border-beige-200/80 bg-cream/40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-olive-700 hover:bg-olive-800 text-cream-50 font-bold text-sm tracking-wide shadow-sm hover:shadow transition-all duration-200 min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-olive-600"
        >
          <MessageCircle className="w-4 h-4 text-cream-100 shrink-0" />
          <span className={isTamil ? "font-tamil text-base" : ""}>{t.products.enquireWhatsapp}</span>
        </a>

        <button
          type="button"
          onClick={handleEnquiryListToggle}
          className={`flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm transition-colors min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-olive-600 ${
            inList
              ? "bg-olive-100 hover:bg-olive-200 text-olive-900 border border-olive-300"
              : "bg-beige-100 hover:bg-beige-200 text-brown-800 border border-beige-300"
          }`}
        >
          {inList ? (
            <>
              <Check className="w-4 h-4 text-olive-700" />
              <span className={isTamil ? "font-tamil text-xs" : ""}>{t.products.inList}</span>
            </>
          ) : (
            <>
              <Plus className="w-4 h-4 text-brown-700" />
              <span className={isTamil ? "font-tamil text-xs" : ""}>{t.products.addToList}</span>
            </>
          )}
        </button>
      </div>
    </article>
  );
};
