import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-chocolate text-ivory pt-16 pb-24 sm:pb-16 border-t border-chocolate/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-ivory/10">
          
          {/* Brand Identity & Logo */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <Link href="#home" className="flex items-center gap-3.5 group">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-ivory-card border border-ivory/20 shadow-xs">
                <Image
                  src="/mfp-logo.png"
                  alt="Mezin Food Products Logo"
                  fill
                  sizes="48px"
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-ivory block leading-none">
                  {SITE_CONFIG.brandName}
                </span>
                <span className="text-xs font-sans text-wheat tracking-wider uppercase mt-1 block">
                  &ldquo;{SITE_CONFIG.tagline}&rdquo;
                </span>
              </div>
            </Link>

            <p className="text-ivory/70 text-sm leading-relaxed max-w-sm font-normal">
              Spices, flours and traditional food products prepared with care.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-olive hover:bg-olive-light text-ivory px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-ivory/20" />
                <span>WhatsApp</span>
              </a>

              <a
                href={SITE_CONFIG.phoneTel}
                className="inline-flex items-center gap-2 bg-ivory/10 hover:bg-ivory/20 text-ivory px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors border border-ivory/15"
              >
                <Phone className="w-3.5 h-3.5 text-wheat" />
                <span>Call Us</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-wheat mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 font-sans text-sm font-medium text-ivory/90">
              <li>
                <a href="#home" className="hover:text-wheat transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-wheat transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-wheat transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-wheat transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Contact Details */}
          <div className="md:col-span-4">
            <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-wheat mb-4">
              Location &amp; Contact
            </h3>
            <div className="font-sans text-sm text-ivory/85 space-y-1.5 leading-relaxed">
              <p className="font-semibold text-ivory">{SITE_CONFIG.brandName}</p>
              <p>{SITE_CONFIG.address.line1}</p>
              <p>{SITE_CONFIG.address.line2}</p>
              <p>{SITE_CONFIG.address.area}, {SITE_CONFIG.address.city} – {SITE_CONFIG.address.postalCode}</p>
              <p className="text-wheat">{SITE_CONFIG.address.landmark}</p>
              <p className="pt-2 text-ivory font-semibold">Phone: {SITE_CONFIG.phone}</p>
            </div>
          </div>

        </div>

        {/* Minimal Copyright Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-ivory/60">
          <p>© {new Date().getFullYear()} Mezin Food Products. All rights reserved.</p>
          <p className="text-xs text-wheat/90 font-medium">
            Healthy and Tasty · Coimbatore
          </p>
        </div>

      </div>
    </footer>
  );
}
