"use client";

import React, { useEffect, useRef } from "react";
import { useEnquiry } from "@/context/EnquiryContext";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";
import { ProductMotif } from "./ProductMotif";
import { ClipboardList, X, Trash2, MessageCircle, ArrowRight } from "lucide-react";

export const EnquiryDrawer: React.FC = () => {
  const {
    items,
    itemCount,
    removeItem,
    clearList,
    isDrawerOpen,
    openDrawer,
    closeDrawer,
  } = useEnquiry();

  const { isTamil, t } = useLanguage();
  const drawerRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  // Manage focus & scroll lock
  useEffect(() => {
    if (isDrawerOpen) {
      previouslyFocusedElement.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        const closeBtn = drawerRef.current?.querySelector<HTMLButtonElement>("button");
        closeBtn?.focus();
      }, 50);
    } else {
      document.body.style.overflow = "unset";
      previouslyFocusedElement.current?.focus();
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isDrawerOpen]);

  // Handle ESC key and focus trapping inside drawer
  useEffect(() => {
    if (!isDrawerOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeDrawer();
        return;
      }

      if (e.key === "Tab" && drawerRef.current) {
        const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
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
  }, [isDrawerOpen, closeDrawer]);

  // Product names in current language for the prefilled message
  const productNames = items.map((p) => (isTamil ? p.nameTa : p.nameEn));
  const whatsappMessage = t.whatsappMessages.multipleProducts(productNames);
  const whatsappUrl = siteConfig.buildWhatsappUrl(whatsappMessage);

  return (
    <>
      {/* Floating Trigger Button: Visible ONLY when list has items */}
      {/* Positioned at bottom-20 on mobile (above the 56px sticky bottom bar) and bottom-6 on desktop */}
      {itemCount > 0 && !isDrawerOpen && (
        <aside aria-label={t.accessibility.enquiryListStatus}>
          <button
            type="button"
            onClick={openDrawer}
            className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full bg-olive-700 hover:bg-olive-800 text-cream-50 font-bold text-sm shadow-warm-lg hover:shadow-warm-xl border-2 border-cream-50 transition-all duration-200 animate-in fade-in slide-in-from-bottom-4 group min-h-[48px]"
            aria-label={`${t.enquiryDrawer.floatingButton} (${itemCount})`}
          >
            <div className="relative flex items-center justify-center">
              <ClipboardList className="w-5 h-5 text-cream-100 group-hover:scale-105 transition-transform" />
              <span className="absolute -top-2 -right-2.5 w-5 h-5 rounded-full bg-gold-500 text-brown-950 text-xs font-bold flex items-center justify-center shadow-sm">
                {itemCount}
              </span>
            </div>
            <span className={isTamil ? "font-tamil text-sm" : ""}>
              {t.enquiryDrawer.floatingButton}
            </span>
          </button>
        </aside>
      )}

      {/* Drawer Overlay and Sliding Panel */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-brown-950/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={closeDrawer}
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-drawer-title"
        >
          <div
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-cream-50 shadow-2xl border-l border-beige-300 flex flex-col justify-between animate-in slide-in-from-right duration-300"
          >
            {/* Drawer Header */}
            <div className="p-5 border-b border-beige-200 bg-cream/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-olive-100 text-olive-800 flex items-center justify-center">
                  <ClipboardList className="w-5 h-5" />
                </div>
                <div>
                  <h3
                    id="enquiry-drawer-title"
                    className={`font-bold text-xl text-brown-950 leading-tight ${
                      isTamil ? "font-tamil text-xl" : "font-serif"
                    }`}
                  >
                    {t.enquiryDrawer.title}
                  </h3>
                  <p className="text-xs text-brown-600 mt-0.5">
                    {itemCount} {t.enquiryDrawer.selectedCount}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={closeDrawer}
                className="p-2 rounded-full text-brown-600 hover:text-brown-950 hover:bg-beige-200 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label={t.enquiryDrawer.closeDrawer}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Content: Product List */}
            <div className="p-5 overflow-y-auto flex-1 space-y-4">
              <p
                className={`text-xs text-brown-700 leading-relaxed ${
                  isTamil ? "font-tamil text-xs leading-normal" : ""
                }`}
              >
                {t.enquiryDrawer.subtitle}
              </p>

              {items.length === 0 ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-full bg-beige-100 flex items-center justify-center text-brown-400">
                    <ClipboardList className="w-8 h-8" />
                  </div>
                  <h4
                    className={`font-bold text-lg text-brown-800 ${
                      isTamil ? "font-tamil text-lg" : "font-serif"
                    }`}
                  >
                    {t.enquiryDrawer.emptyTitle}
                  </h4>
                  <p className="text-xs text-brown-600 max-w-xs mx-auto">
                    {t.enquiryDrawer.emptySubtitle}
                  </p>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {items.map((item, idx) => {
                    const itemName = isTamil ? item.nameTa : item.nameEn;
                    const secondaryName = isTamil ? item.nameEn : item.nameTa;
                    return (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-3 rounded-2xl bg-cream border border-beige-200 shadow-sm gap-3"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-beige-300 bg-beige-50">
                            <ProductMotif type={item.motifType} className="w-8 h-8" />
                          </div>

                          <div className="min-w-0">
                            <span className="text-xs font-bold text-brown-500 uppercase tracking-wider block">
                              #{idx + 1}
                            </span>
                            <h4
                              className={`font-bold text-sm text-brown-950 truncate ${
                                isTamil ? "font-tamil text-sm" : "font-serif"
                              }`}
                            >
                              {itemName}
                            </h4>
                            <span className="text-xs text-brown-600 truncate block">
                              {isTamil ? (
                                <span>{secondaryName}</span>
                              ) : (
                                <span lang="ta" className="font-tamil text-xs">
                                  {secondaryName}
                                </span>
                              )}
                            </span>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-brown-500 hover:text-terracotta-600 hover:bg-terracotta-50 rounded-lg transition-colors shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center"
                          aria-label={t.accessibility.removeItem(itemName)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    );
                  })}

                  {/* Clear list action */}
                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={clearList}
                      className="text-xs font-semibold text-brown-600 hover:text-terracotta-600 underline py-1"
                    >
                      {t.enquiryDrawer.clearAll}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-5 border-t border-beige-200 bg-cream/80 space-y-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2.5 w-full py-3.5 px-4 rounded-xl font-bold text-sm tracking-wide shadow transition-colors min-h-[48px] ${
                  items.length === 0
                    ? "bg-brown-300 text-brown-600 cursor-not-allowed pointer-events-none"
                    : "bg-olive-700 hover:bg-olive-800 text-cream-50"
                }`}
              >
                <MessageCircle className="w-5 h-5" />
                <span className={isTamil ? "font-tamil text-base" : ""}>
                  {t.enquiryDrawer.sendWhatsapp}
                </span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <p className="text-xs text-brown-600 text-center leading-normal">
                {t.enquiryDrawer.helperNotice}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
