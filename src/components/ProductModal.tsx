"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";
import { useEnquiry } from "@/context/EnquiryContext";
import { ProductMotif } from "./ProductMotif";
import { X, MessageCircle, Plus, Check, Info } from "lucide-react";

type ProductModalProps = {
  product: Product | null;
  onClose: () => void;
};

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { isTamil, t } = useLanguage();
  const { addItem, removeItem, isInList } = useEnquiry();
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  // Store previously focused element and lock scroll
  useEffect(() => {
    if (product) {
      previouslyFocusedElement.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";

      setTimeout(() => {
        const closeBtn = modalRef.current?.querySelector<HTMLButtonElement>("button");
        closeBtn?.focus();
      }, 50);
    } else {
      document.body.style.overflow = "unset";
      previouslyFocusedElement.current?.focus();
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [product]);

  // Handle ESC key and focus trapping inside modal
  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [product, onClose]);

  if (!product) return null;

  const inList = isInList(product.id);
  const productName = isTamil ? product.nameTa : product.nameEn;
  const secondaryName = isTamil ? product.nameEn : product.nameTa;
  const description = isTamil ? product.descriptionTa : product.descriptionEn;
  const category = isTamil ? product.categoryTa : product.categoryEn;

  const whatsappMessage = t.whatsappMessages.singleProduct(productName);
  const whatsappUrl = siteConfig.buildWhatsappUrl(whatsappMessage);

  const handleEnquiryToggle = () => {
    if (inList) {
      removeItem(product.id);
    } else {
      addItem(product);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brown-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-cream-50 rounded-3xl border border-beige-300 shadow-warm-xl overflow-hidden animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-beige-200 bg-cream/70">
          <div className="flex items-center gap-2">
            <span
              className={`text-xs font-bold px-2.5 py-1 rounded-full bg-beige-100 text-brown-800 ${
                isTamil ? "font-tamil text-xs" : "uppercase tracking-wider text-xs"
              }`}
            >
              {category}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-brown-600 hover:text-brown-950 hover:bg-beige-200 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={t.modal.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Visual Showcase */}
          <div className="relative w-full aspect-[16/10] rounded-2xl bg-cream border border-beige-200 flex items-center justify-center overflow-hidden">
            {product.image ? (
              <div className="relative w-full h-full bg-white rounded-xl overflow-hidden flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={productName}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-contain"
                />
              </div>
            ) : (
              <ProductMotif type={product.motifType} className="w-36 h-36 sm:w-44 sm:h-44 drop-shadow-sm" />
            )}
          </div>

          {/* Names */}
          <div>
            <h3
              id="modal-product-title"
              className={`text-2xl sm:text-3xl font-bold text-brown-950 ${
                isTamil ? "font-tamil text-2xl sm:text-3xl" : "font-serif"
              }`}
            >
              {productName}
            </h3>
            <p className="text-sm font-medium text-brown-600 mt-1">
              {isTamil ? (
                <span>{secondaryName}</span>
              ) : (
                <span lang="ta" className="font-tamil text-base">
                  {secondaryName}
                </span>
              )}
            </p>
          </div>

          {/* Definitional Description */}
          <div className="space-y-1.5">
            <span
              className={`text-xs font-bold text-brown-600 ${
                isTamil ? "font-tamil text-xs" : "uppercase tracking-wider"
              }`}
            >
              {t.modal.description}
            </span>
            <p
              className={`text-sm sm:text-base text-brown-800 leading-relaxed bg-cream rounded-xl p-3.5 border border-beige-200 ${
                isTamil ? "font-tamil text-sm leading-normal" : ""
              }`}
            >
              {description}
            </p>
          </div>

          {/* Weight & Price (Only if supplied, cleanly omitted if not) */}
          {product.variants && product.variants.length > 0 && (
            <div className="space-y-2">
              <span
                className={`text-xs font-bold text-brown-600 ${
                  isTamil ? "font-tamil text-xs" : "uppercase tracking-wider"
                }`}
              >
                {t.modal.weights}
              </span>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-beige-100 text-brown-950 font-semibold text-xs border border-beige-300"
                  >
                    {v.weight}
                    {v.price && ` • ₹${v.price}`}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* WhatsApp Pricing Notice */}
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-beige-100/60 border border-beige-200 text-xs text-brown-700">
            <Info className="w-4 h-4 text-olive-700 shrink-0 mt-0.5" />
            <p className={isTamil ? "font-tamil text-xs leading-normal" : ""}>
              {t.modal.pricingNote}
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 pt-4 border-t border-beige-200 bg-cream/70 space-y-2.5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 rounded-xl bg-olive-700 hover:bg-olive-800 text-cream-50 font-bold text-sm tracking-wide shadow transition-colors min-h-[44px]"
          >
            <MessageCircle className="w-4 h-4" />
            <span className={isTamil ? "font-tamil text-base" : ""}>
              {t.modal.enquireWhatsapp}
            </span>
          </a>

          <button
            type="button"
            onClick={handleEnquiryToggle}
            className={`flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-semibold text-sm transition-colors min-h-[44px] ${
              inList
                ? "bg-olive-100 hover:bg-olive-200 text-olive-900 border border-olive-300"
                : "bg-beige-100 hover:bg-beige-200 text-brown-800 border border-beige-300"
            }`}
          >
            {inList ? (
              <>
                <Check className="w-4 h-4 text-olive-700" />
                <span className={isTamil ? "font-tamil text-xs" : ""}>{t.modal.inList}</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4 text-brown-700" />
                <span className={isTamil ? "font-tamil text-xs" : ""}>{t.modal.addToList}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
