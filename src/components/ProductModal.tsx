"use client";

import { useEffect } from "react";
import Image from "next/image";
import { MessageCircle, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/data/products";
import { SITE_CONFIG } from "@/data/siteConfig";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (product) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-chocolate/40 backdrop-blur-xs"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-product-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-2xl bg-ivory-card rounded-2xl border border-chocolate/15 shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="btn-press absolute top-4 right-4 z-10 p-2 rounded-full bg-ivory/80 text-chocolate hover:bg-linen hover:text-chocolate transition-colors border border-chocolate/10 cursor-pointer"
              aria-label="Close Product Details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid sm:grid-cols-2">
              {/* Large Product Image Preview */}
              <div className="relative aspect-square sm:aspect-auto bg-white border-b sm:border-b-0 sm:border-r border-chocolate/10 flex items-center justify-center p-6 sm:p-8">
                <div className="relative w-full h-full min-h-[260px] sm:min-h-[340px]">
                  <Image
                    src={product.image.src}
                    alt={product.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="absolute bottom-3 left-3 bg-ivory/90 backdrop-blur-xs px-2.5 py-1 rounded text-[10px] font-mono font-medium text-chocolate-muted uppercase tracking-wider border border-chocolate/10">
                  {product.category}
                </div>
              </div>

              {/* Product Detail Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  {/* Index & Category */}
                  <div className="flex items-center justify-between text-xs font-sans font-semibold text-chocolate-muted mb-3">
                    <span className="font-bold text-olive">PRODUCT {product.index}</span>
                    <span className="tracking-wider uppercase">{product.category}</span>
                  </div>

                  {/* English & Tamil Names */}
                  <h2
                    id="modal-product-title"
                    className="font-sans text-2xl sm:text-3xl font-bold text-chocolate leading-tight mb-1"
                  >
                    {product.nameEnglish}
                  </h2>
                  <p className="tamil-text text-xl sm:text-2xl font-semibold text-chocolate mb-5">
                    {product.nameTamil}
                  </p>

                  {/* Weight & Price Details (Factual, no fabricated data) */}
                  <div className="py-3 px-4 rounded-xl bg-linen/50 border border-chocolate/12 flex items-center justify-between mb-5">
                    <div>
                      <span className="text-[11px] font-sans uppercase tracking-wider text-chocolate-soft font-medium block">
                        Net Weight
                      </span>
                      <span className="text-base font-sans font-semibold text-chocolate">
                        {product.weight ? product.weight : "Enquire for details"}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-sans uppercase tracking-wider text-chocolate-soft font-medium block">
                        Price
                      </span>
                      <span className="text-xl sm:text-2xl font-sans font-bold text-chocolate tracking-normal">
                        {product.price !== undefined ? `₹${product.price}` : "Enquire for pricing"}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h3 className="text-xs font-sans uppercase tracking-wider font-semibold text-chocolate-soft mb-1.5">
                      Description
                    </h3>
                    <p className="text-base font-sans text-chocolate leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Inquiries / Actions */}
                <div className="pt-4 border-t border-chocolate/10 flex flex-col gap-2.5">
                  <a
                    href={SITE_CONFIG.getProductEnquiryUrl(product.nameEnglish, product.weight)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-press font-sans inline-flex items-center justify-center gap-2 bg-olive-dark hover:bg-olive text-ivory text-xs sm:text-sm font-semibold uppercase tracking-wider py-3.5 px-5 rounded-xl shadow-2xs hover:shadow-xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-ivory/20" />
                    <span>Enquire About This Product</span>
                  </a>

                  <a
                    href={SITE_CONFIG.phoneTel}
                    className="btn-press font-sans inline-flex items-center justify-center gap-2 border border-chocolate/20 hover:bg-linen text-chocolate text-xs sm:text-sm font-semibold uppercase tracking-wider py-3 px-5 rounded-xl transition-colors"
                  >
                    <Phone className="w-4 h-4 text-olive" />
                    <span>Call Us</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
