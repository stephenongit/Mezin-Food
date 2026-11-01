"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Phone, MessageCircle, Navigation, Landmark, ArrowUpRight } from "lucide-react";

export const Contact: React.FC = () => {
  const { t, isTamil } = useLanguage();

  const generalWhatsappUrl = siteConfig.buildWhatsappUrl(t.whatsappMessages.general);

  return (
    <section id="contact" className="py-12 md:py-20 bg-cream-50 relative border-b border-beige-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-beige-200/70 border border-beige-300 text-brown-800 text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5 text-olive-700" />
            <span className={isTamil ? "font-tamil text-xs" : "tracking-wide"}>{t.contact.badge}</span>
          </div>

          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-brown-950 tracking-tight ${
              isTamil ? "font-tamil text-2xl sm:text-3xl" : "font-serif"
            }`}
          >
            {t.contact.title}
          </h2>

          <p
            className={`mt-3 text-sm sm:text-base md:text-lg text-brown-700 leading-relaxed ${
              isTamil ? "font-tamil text-base sm:text-lg leading-loose" : ""
            }`}
          >
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Column: Location & Landmark Card */}
          <div className="lg:col-span-7 bg-cream rounded-3xl p-6 sm:p-8 border border-beige-300 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-olive-100 text-olive-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span
                    className={`text-xs font-bold text-brown-600 block ${
                      isTamil ? "font-tamil text-xs" : "uppercase tracking-wider text-xs"
                    }`}
                  >
                    {t.contact.locationHeading}
                  </span>
                  <h3
                    className={`text-2xl font-bold text-brown-950 ${
                      isTamil ? "font-tamil text-2xl" : "font-serif"
                    }`}
                  >
                    {siteConfig.name}
                  </h3>
                </div>
              </div>

              {/* Formatted Address (Tamil mode uses fullFormattedTa, English uses English lines) */}
              <div className="space-y-1.5 text-base sm:text-lg text-brown-900 font-medium leading-relaxed mb-6">
                {isTamil ? (
                  <p className="font-tamil text-base leading-loose whitespace-pre-line">
                    {siteConfig.address.fullFormattedTa}
                  </p>
                ) : (
                  <>
                    <p>{siteConfig.address.line1},</p>
                    <p>{siteConfig.address.line2},</p>
                    <p>{siteConfig.address.area},</p>
                    <p>
                      {siteConfig.address.city} – {siteConfig.address.pincode},
                    </p>
                    <p>{siteConfig.address.state}, {siteConfig.address.country}.</p>
                  </>
                )}
              </div>

              {/* Landmark Highlight */}
              <div className="p-4 rounded-2xl bg-beige-100/70 border border-gold-500/30 flex items-center gap-3.5 mb-6">
                <Landmark className="w-5 h-5 text-gold-600 shrink-0" />
                <div>
                  <span
                    className={`text-xs font-bold text-brown-600 block ${
                      isTamil ? "font-tamil text-xs" : "uppercase tracking-wider text-xs"
                    }`}
                  >
                    {t.contact.landmarkLabel}
                  </span>
                  <p className={`text-sm sm:text-base font-bold text-brown-950 ${isTamil ? "font-tamil" : ""}`}>
                    {isTamil ? siteConfig.address.landmarkTa : siteConfig.address.landmark}
                  </p>
                </div>
              </div>
            </div>

            {/* Directions Action */}
            <div className="pt-4 border-t border-beige-200">
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-xl bg-brown-950 hover:bg-brown-900 text-cream-50 font-bold text-sm tracking-wide shadow transition-colors min-h-[48px]"
              >
                <Navigation className="w-4 h-4 text-gold-400" />
                <span className={isTamil ? "font-tamil text-sm" : ""}>
                  {t.contact.directionsButton}
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Communication Channels (Phone & WhatsApp) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Phone Call Card */}
            <div className="bg-cream rounded-3xl p-6 sm:p-7 border border-beige-300 shadow-sm flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-2xl bg-gold-100 text-gold-800 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span
                      className={`text-xs font-bold text-brown-600 block ${
                        isTamil ? "font-tamil text-xs" : "uppercase tracking-wider text-xs"
                      }`}
                    >
                      {t.contact.phoneHeading}
                    </span>
                    <h3
                      className={`text-xl font-bold text-brown-950 ${
                        isTamil ? "font-tamil text-xl" : "font-serif"
                      }`}
                    >
                      {t.contact.phoneLabel}
                    </h3>
                  </div>
                </div>

                <div className="py-2">
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-brown-950 tracking-wide">
                    {siteConfig.displayPhone}
                  </p>
                  <p className={`text-xs sm:text-sm text-brown-600 mt-1 ${isTamil ? "font-tamil text-xs" : ""}`}>
                    {t.contact.phoneDesc}
                  </p>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-beige-200">
                <a
                  href={siteConfig.phoneUrl}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-olive-700 hover:bg-olive-800 text-cream-50 font-bold text-sm shadow transition-colors min-h-[44px]"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t.contact.callButton}</span>
                </a>
              </div>
            </div>

            {/* WhatsApp Chat Card */}
            <div className="bg-cream rounded-3xl p-6 sm:p-7 border border-beige-300 shadow-sm flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-2xl bg-olive-100 text-olive-800 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span
                      className={`text-xs font-bold text-brown-600 block ${
                        isTamil ? "font-tamil text-xs" : "uppercase tracking-wider text-xs"
                      }`}
                    >
                      {t.contact.whatsappHeading}
                    </span>
                    <h3
                      className={`text-xl font-bold text-brown-950 ${
                        isTamil ? "font-tamil text-xl" : "font-serif"
                      }`}
                    >
                      {t.contact.whatsappLabel}
                    </h3>
                  </div>
                </div>

                <p
                  className={`text-xs sm:text-sm text-brown-700 leading-relaxed py-1 ${
                    isTamil ? "font-tamil text-xs leading-normal" : ""
                  }`}
                >
                  {t.contact.whatsappDesc}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-beige-200">
                <a
                  href={generalWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-olive-800 hover:bg-olive-900 text-cream-50 font-bold text-sm shadow transition-colors min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className={isTamil ? "font-tamil text-sm" : ""}>
                    {t.contact.whatsappButton}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
