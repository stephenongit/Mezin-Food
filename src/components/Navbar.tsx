"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

export const Navbar: React.FC = () => {
  const { t, isTamil } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#products", label: t.nav.products },
    { href: "#contact", label: t.nav.contact },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const whatsappGeneralUrl = siteConfig.buildWhatsappUrl(t.whatsappMessages.general);

  // Address text in current language
  const topBarLocation = isTamil
    ? `${siteConfig.address.areaTa}, ${siteConfig.address.cityTa} • ${siteConfig.address.landmarkTa}`
    : `${siteConfig.address.area}, ${siteConfig.address.city} • ${siteConfig.address.landmark}`;

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-cream-50/95 backdrop-blur-md shadow-warm border-b border-beige-200"
          : "bg-cream-50/90 backdrop-blur-sm border-b border-beige-200/80"
      }`}
    >
      {/* Top announcement bar - hidden on small screens (<lg), shown on desktop */}
      <div className="hidden lg:block bg-brown-950 text-cream-100 text-xs px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-block w-2 h-2 rounded-full bg-olive-500 animate-pulse" />
            <span className={isTamil ? "font-tamil text-xs" : ""}>{topBarLocation}</span>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href={siteConfig.phoneUrl}
              className="flex items-center gap-1.5 hover:text-gold-300 transition-colors min-h-[44px]"
              aria-label={t.nav.callUs(siteConfig.displayPhone)}
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span className="font-semibold tracking-wide text-xs">{siteConfig.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 gap-2 sm:gap-4">
          {/* Logo and Brand */}
          <a
            href="#home"
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-olive-600 rounded-lg p-1 min-w-0 shrink"
          >
            {/* Logo in rounded square with object-contain (never cropped to a circle) */}
            <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-xl overflow-hidden border border-beige-300 bg-cream-50 p-0.5 shadow-sm flex items-center justify-center shrink-0 group-hover:border-olive-600 transition-colors">
              <Image
                src="/images/mfp-logo.jpg"
                alt={t.accessibility.logoAlt}
                width={48}
                height={48}
                className="object-contain w-full h-full rounded-lg"
                priority
              />
            </div>
            <div className="flex flex-col min-w-0">
              {/* Wraps to two lines on mobile below sm: "Mezin Food \n Products" - text-base leading-tight, no truncate */}
              <span className="font-serif font-bold text-base sm:text-xl lg:text-2xl text-brown-950 tracking-tight leading-tight">
                <span className="block sm:inline">Mezin Food </span>
                <span className="block sm:inline">Products</span>
              </span>
              {/* Sub-label shown only on xl screens to avoid collision in Tamil mode */}
              <span className="hidden xl:block text-xs font-medium tracking-wider uppercase text-brown-600 truncate">
                {siteConfig.shortName} • {isTamil ? siteConfig.address.areaTa : siteConfig.address.area}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (shown on lg and up) */}
          <nav
            className="hidden xl:flex items-center gap-5 xl:gap-8 shrink-0"
            aria-label={t.accessibility.mainNav}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold tracking-wide text-brown-800 hover:text-olive-700 transition-colors inline-flex items-center min-h-[44px] min-w-[44px] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-olive-600 hover:after:w-full after:transition-all after:duration-200 ${
                  isTamil ? "font-tamil text-base" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions (lg and up) */}
          <div className="hidden xl:flex items-center gap-3 xl:gap-4 shrink-0">
            <LanguageSwitcher />

            <a
              href={whatsappGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-olive-700 hover:bg-olive-800 text-cream-50 font-semibold text-xs tracking-wide shadow-sm hover:shadow transition-all duration-200 min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4 text-cream-100" />
              <span className={isTamil ? "font-tamil text-sm" : ""}>{t.nav.enquireWhatsapp}</span>
            </a>
          </div>

          {/* Mobile Right Controls: Compact language switcher + 44px menu button */}
          <div className="flex items-center gap-1.5 sm:gap-2 xl:hidden shrink-0">
            <LanguageSwitcher compact />
            <button
              type="button"
              id="mobile-menu-button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-brown-900 hover:bg-beige-200 focus:outline-none focus:ring-2 focus:ring-olive-600 min-h-[44px] min-w-[44px]"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? t.nav.menuClose : t.nav.menuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-brown-950" />
              ) : (
                <Menu className="w-6 h-6 text-brown-950" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Disclosure Panel */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          aria-labelledby="mobile-menu-button"
          className="xl:hidden border-t border-beige-200 bg-cream-50/95 px-4 pt-3 pb-6 shadow-warm-lg animate-in slide-in-from-top duration-200"
        >
          <nav className="flex flex-col space-y-2 pt-1" aria-label={t.accessibility.mobileNav}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`flex items-center px-4 py-3 rounded-xl text-base font-semibold text-brown-900 hover:bg-beige-100 hover:text-olive-800 transition-colors min-h-[44px] ${
                  isTamil ? "font-tamil text-lg" : ""
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-beige-200 flex flex-col gap-2.5">
              <a
                href={whatsappGeneralUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl bg-olive-700 text-cream-50 font-semibold text-sm shadow hover:bg-olive-800 transition-colors min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4" />
                <span className={isTamil ? "font-tamil text-sm" : ""}>{t.nav.enquireWhatsapp}</span>
              </a>

              <a
                href={siteConfig.phoneUrl}
                onClick={handleLinkClick}
                className="flex items-center justify-center gap-2.5 w-full py-2.5 px-4 rounded-xl border border-brown-300 text-brown-900 font-semibold text-sm hover:bg-beige-100 transition-colors min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-olive-700" />
                <span>{t.nav.callUs(siteConfig.displayPhone)}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
