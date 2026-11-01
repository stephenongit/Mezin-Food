"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, MessageCircle, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  const { t, isTamil } = useLanguage();
  const currentYear = new Date().getFullYear();

  const generalWhatsappUrl = siteConfig.buildWhatsappUrl(t.whatsappMessages.general);

  // Address summary in current language
  const addressSummary = isTamil
    ? `${siteConfig.address.areaTa}, ${siteConfig.address.cityTa} – ${siteConfig.address.pincode}`
    : `${siteConfig.address.line1}, ${siteConfig.address.area}, ${siteConfig.address.city} – ${siteConfig.address.pincode}.`;

  return (
    <footer className="bg-brown-950 text-cream-100 border-t-4 border-gold-500 pt-12 md:pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-brown-800">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center gap-3">
              {/* Logo in rounded square with object-contain */}
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-gold-500/50 bg-cream-50 p-1 shrink-0">
                <Image
                  src="/images/mfp-logo.jpg"
                  alt={t.accessibility.logoAlt}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-cream-50 tracking-tight">
                  {siteConfig.name}
                </h3>
                <span className="text-xs text-gold-400 font-semibold uppercase tracking-wider block">
                  {siteConfig.shortName} • {isTamil ? siteConfig.address.areaTa : siteConfig.address.area}
                </span>
              </div>
            </div>

            <p
              className={`text-xs sm:text-sm text-brown-200 leading-relaxed max-w-sm ${
                isTamil ? "font-tamil text-xs sm:text-sm leading-normal" : ""
              }`}
            >
              {t.footer.shortDesc}
            </p>

            <p className="text-xs text-gold-400 italic">
              &ldquo;{isTamil ? siteConfig.taglineTa : siteConfig.taglineEn}&rdquo;
            </p>
          </div>

          {/* Quick Links with 44px min-height tap targets */}
          <div className="lg:col-span-3 space-y-3">
            <h4
              className={`font-bold text-cream-100 ${
                isTamil ? "font-tamil text-base" : "font-serif text-sm uppercase tracking-wider"
              }`}
            >
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-1 text-xs sm:text-sm text-brown-200">
              <li>
                <a
                  href="#home"
                  className={`inline-flex items-center min-h-[44px] min-w-[44px] hover:text-gold-300 transition-colors ${
                    isTamil ? "font-tamil" : ""
                  }`}
                >
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`inline-flex items-center min-h-[44px] min-w-[44px] hover:text-gold-300 transition-colors ${
                    isTamil ? "font-tamil" : ""
                  }`}
                >
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className={`inline-flex items-center min-h-[44px] min-w-[44px] hover:text-gold-300 transition-colors ${
                    isTamil ? "font-tamil" : ""
                  }`}
                >
                  {t.nav.products}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`inline-flex items-center min-h-[44px] min-w-[44px] hover:text-gold-300 transition-colors ${
                    isTamil ? "font-tamil" : ""
                  }`}
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details with 44px min-height tap targets */}
          <div className="lg:col-span-4 space-y-3">
            <h4
              className={`font-bold text-cream-100 ${
                isTamil ? "font-tamil text-base" : "font-serif text-sm uppercase tracking-wider"
              }`}
            >
              {t.footer.contactHeading}
            </h4>

            <div className="space-y-2 text-xs sm:text-sm text-brown-200">
              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span className={isTamil ? "font-tamil text-xs" : ""}>{addressSummary}</span>
              </div>

              <div>
                <a
                  href={siteConfig.phoneUrl}
                  className="inline-flex items-center gap-2.5 min-h-[44px] font-semibold text-cream-100 hover:text-gold-300 transition-colors tracking-wide"
                >
                  <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{siteConfig.displayPhone}</span>
                </a>
              </div>

              <div>
                <a
                  href={generalWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2.5 min-h-[44px] hover:text-gold-300 transition-colors ${
                    isTamil ? "font-tamil text-xs" : ""
                  }`}
                >
                  <MessageCircle className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{t.footer.chatWhatsapp}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & localized footnote (font size text-xs / 12px) */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-brown-400 gap-3">
          <p>
            © {currentYear} {siteConfig.name} ({siteConfig.shortName}).{" "}
            {isTamil ? "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை." : "All rights reserved."}
          </p>

          <p className="flex items-center gap-1.5 text-xs text-brown-400">
            <span>{t.footer.locationFootnote}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
