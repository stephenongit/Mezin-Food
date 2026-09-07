"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/data/siteConfig";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Products", href: "#products" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-ivory/95 backdrop-blur-md py-3 border-b border-chocolate/10 shadow-xs"
          : "bg-ivory/80 backdrop-blur-xs py-4 sm:py-5 border-b border-chocolate/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link
            href="#home"
            className="flex items-center gap-3.5 group rounded-lg focus-visible:ring-2 focus-visible:ring-olive"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-ivory-card border border-chocolate/15 shadow-2xs group-hover:border-olive transition-colors">
              <Image
                src="/mfp-logo.png"
                alt="Mezin Food Products (MFP) Logo"
                fill
                sizes="(max-width: 640px) 44px, 48px"
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base sm:text-lg tracking-tight text-chocolate leading-none">
                Mezin Food Products
              </span>
              <span className="text-[11px] font-sans text-chocolate-muted font-medium tracking-wider uppercase mt-1">
                MFP · Saravanampatti
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8 font-sans text-xs font-semibold uppercase tracking-wider text-chocolate"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-olive transition-colors duration-200 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={SITE_CONFIG.phoneTel}
              className="btn-press inline-flex items-center gap-2 text-chocolate hover:text-olive text-xs font-semibold uppercase tracking-wider px-3 py-2 rounded-full transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-olive" />
              <span>Call Us</span>
            </a>

            <a
              href={SITE_CONFIG.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-flex items-center gap-2 bg-olive-dark hover:bg-olive text-ivory text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-200 shadow-2xs hover:shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-ivory/20" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={SITE_CONFIG.phoneTel}
              aria-label="Call Us"
              className="p-2 text-chocolate hover:text-olive"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-chocolate hover:text-olive cursor-pointer"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden fixed inset-x-0 top-[65px] bg-ivory-card border-b border-chocolate/10 shadow-lg px-6 py-6"
          >
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider text-chocolate hover:bg-linen hover:text-olive transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 border-t border-chocolate/10 mt-2 flex flex-col gap-2.5">
                <a
                  href={SITE_CONFIG.phoneTel}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-press inline-flex items-center justify-center gap-2 border border-chocolate/15 text-chocolate text-xs font-semibold uppercase tracking-wider py-3 px-4 rounded-xl hover:bg-linen transition-colors"
                >
                  <Phone className="w-4 h-4 text-olive" />
                  <span>Call Us: {SITE_CONFIG.phone}</span>
                </a>

                <a
                  href={SITE_CONFIG.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-press inline-flex items-center justify-center gap-2 bg-olive-dark text-ivory text-xs font-semibold uppercase tracking-wider py-3 px-4 rounded-xl shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-ivory/20" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
