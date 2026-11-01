"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";
import { ProductMotif } from "./ProductMotif";
import { ArrowDown, MessageCircle, MapPin, Sparkles, ShoppingBag } from "lucide-react";

export const Hero: React.FC = () => {
  const { t, isTamil } = useLanguage();

  const generalWhatsappUrl = siteConfig.buildWhatsappUrl(t.whatsappMessages.general);

  return (
    <section
      id="home"
      className="relative overflow-hidden py-10 md:py-20 bg-gradient-to-b from-cream-100 via-beige-50 to-cream-100 border-b border-beige-200"
    >
      {/* Decorative background traditional motifs */}
      <div className="absolute inset-0 pattern-kolam opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Headlines and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-5">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-beige-100 border border-gold-500/30 text-brown-800 text-xs sm:text-sm font-semibold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gold-600 shrink-0" />
              <span className={isTamil ? "font-tamil" : "tracking-wide"}>{t.hero.badge}</span>
            </div>

            {/* Main Headline (text-2xl below sm for Tamil as requested) */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-brown-950 leading-[1.18] tracking-tight">
              {isTamil ? (
                <span className="font-tamil block text-2xl sm:text-4xl lg:text-5xl leading-snug">
                  {t.hero.headlineFull}
                </span>
              ) : (
                <>
                  {t.hero.headlinePrefix}
                  <span className="text-olive-700 italic">{t.hero.headlineAccent}</span>
                </>
              )}
            </h1>

            {/* Supporting description */}
            <p
              className={`text-sm sm:text-base md:text-lg text-brown-800 max-w-2xl leading-relaxed ${
                isTamil ? "font-tamil text-base sm:text-lg leading-loose" : ""
              }`}
            >
              {t.hero.subheadline}
            </p>

            {/* Compact trust chips */}
            <div className="flex flex-wrap gap-2 pt-1 w-full max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cream-50/95 border border-beige-300 shadow-sm text-xs text-brown-800 font-medium">
                <MapPin className="w-3.5 h-3.5 text-olive-600 shrink-0" />
                <span className={isTamil ? "font-tamil text-xs" : ""}>{t.hero.locationValue}</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cream-50/95 border border-beige-300 shadow-sm text-xs text-brown-800 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                <span className={isTamil ? "font-tamil text-xs" : ""}>{t.hero.processValue}</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cream-50/95 border border-beige-300 shadow-sm text-xs text-brown-800 font-medium">
                <ShoppingBag className="w-3.5 h-3.5 text-terracotta-600 shrink-0" />
                <span className={isTamil ? "font-tamil text-xs" : ""}>{t.hero.sourcingValue}</span>
              </div>
            </div>

            {/* CTA Action Hierarchy: 1 clear primary, 1 secondary WhatsApp, 1 text link */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-3 w-full">
              {/* Primary button */}
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-olive-700 hover:bg-olive-800 text-cream-50 font-bold text-sm tracking-wide shadow-warm hover:shadow-warm-lg transition-all duration-200 min-h-[44px]"
              >
                <span className={isTamil ? "font-tamil text-base" : ""}>{t.hero.primaryCta}</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* Secondary button */}
              <a
                href={generalWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cream-50 hover:bg-beige-100 border border-olive-500/40 text-olive-800 font-semibold text-sm shadow-sm transition-all duration-200 min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 text-olive-700" />
                <span className={isTamil ? "font-tamil text-sm" : ""}>{t.hero.whatsappCta}</span>
              </a>

              {/* Text link */}
              <a
                href="#contact"
                className="inline-flex items-center px-3 py-2 text-sm font-semibold text-brown-800 hover:text-olive-700 underline underline-offset-4 transition-colors min-h-[44px]"
              >
                <span className={isTamil ? "font-tamil" : ""}>{t.hero.secondaryCta}</span>
              </a>
            </div>
          </div>

          {/* Right Column: "Product Shelf" Illustration */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md bg-cream-50 rounded-3xl p-5 sm:p-6 shadow-warm-lg border border-beige-300/90 flex flex-col items-center">
              {/* Shelf Header */}
              <div className="w-full pb-3 border-b border-beige-200 flex items-center justify-between">
                <span
                  className={`text-xs font-bold text-brown-700 ${
                    isTamil ? "font-tamil text-xs" : "uppercase tracking-wider"
                  }`}
                >
                  {t.hero.productShelfBadge}
                </span>
                <span className="text-xs font-semibold text-olive-700 bg-olive-50 border border-olive-200 px-2.5 py-0.5 rounded-full">
                  {t.hero.productShelfCount}
                </span>
              </div>

              {/* Shelf Motif Row - 5 motifs with translated labels */}
              <div className="w-full py-6 grid grid-cols-5 gap-1.5 sm:gap-2 items-center justify-items-center">
                <div className="flex flex-col items-center group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-cream border border-beige-200 p-1 flex items-center justify-center shadow-sm">
                    <ProductMotif type="chilli" className="w-11 h-11 sm:w-12 sm:h-12" />
                  </div>
                  <span className="text-xs font-medium text-brown-700 mt-1.5 text-center truncate w-full">
                    {t.hero.shelfLabels.chilli}
                  </span>
                </div>

                <div className="flex flex-col items-center group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-cream border border-beige-200 p-1 flex items-center justify-center shadow-sm">
                    <ProductMotif type="sambar" className="w-11 h-11 sm:w-12 sm:h-12" />
                  </div>
                  <span className="text-xs font-medium text-brown-700 mt-1.5 text-center truncate w-full">
                    {t.hero.shelfLabels.sambar}
                  </span>
                </div>

                <div className="flex flex-col items-center group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-cream border border-beige-200 p-1 flex items-center justify-center shadow-sm">
                    <ProductMotif type="podi" className="w-11 h-11 sm:w-12 sm:h-12" />
                  </div>
                  <span className="text-xs font-medium text-brown-700 mt-1.5 text-center truncate w-full">
                    {t.hero.shelfLabels.podi}
                  </span>
                </div>

                <div className="flex flex-col items-center group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-cream border border-beige-200 p-1 flex items-center justify-center shadow-sm">
                    <ProductMotif type="ragi" className="w-11 h-11 sm:w-12 sm:h-12" />
                  </div>
                  <span className="text-xs font-medium text-brown-700 mt-1.5 text-center truncate w-full">
                    {t.hero.shelfLabels.ragi}
                  </span>
                </div>

                <div className="flex flex-col items-center group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-cream border border-beige-200 p-1 flex items-center justify-center shadow-sm">
                    <ProductMotif type="puttu" className="w-11 h-11 sm:w-12 sm:h-12" />
                  </div>
                  <span className="text-xs font-medium text-brown-700 mt-1.5 text-center truncate w-full">
                    {t.hero.shelfLabels.puttu}
                  </span>
                </div>
              </div>

              {/* Shelf Footer Strip */}
              <div className="w-full pt-3 border-t border-beige-200 text-center">
                <p
                  className={`text-xs text-brown-600 ${
                    isTamil ? "font-tamil text-xs" : ""
                  }`}
                >
                  {t.hero.productShelfNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
