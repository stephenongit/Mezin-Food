"use client";

import { MapPin, Phone, MessageCircle, ExternalLink, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/data/siteConfig";

export default function ContactLocation() {
  const embedUrl = SITE_CONFIG.mapLocation.getEmbedUrl();

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 md:py-36 bg-ivory border-b border-chocolate/10"
      aria-label="Contact and Location"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-olive block mb-2">
            Contact &amp; Visit
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-chocolate tracking-tight uppercase">
            Location &amp; Inquiries
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Formatted Address & Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="catalog-card p-7 sm:p-9 rounded-2xl h-full flex flex-col justify-between">
              
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-linen flex items-center justify-center text-olive shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-chocolate-soft block">
                      Business Address
                    </span>
                    <h3 className="font-serif text-lg font-bold text-chocolate">
                      MEZIN FOOD PRODUCTS
                    </h3>
                  </div>
                </div>

                {/* Formatted Address Block */}
                <address className="not-italic text-chocolate leading-relaxed text-sm sm:text-base font-normal space-y-1 pb-6 border-b border-chocolate/10">
                  <p className="font-semibold text-chocolate">
                    {SITE_CONFIG.address.line1}
                  </p>
                  <p>{SITE_CONFIG.address.line2}</p>
                  <p>{SITE_CONFIG.address.area}</p>
                  <p>{SITE_CONFIG.address.city} – {SITE_CONFIG.address.postalCode}</p>
                  <p className="text-olive font-medium pt-1">
                    {SITE_CONFIG.address.landmark}
                  </p>
                </address>

                {/* Phone & Direct Calling */}
                <div className="py-6 border-b border-chocolate/10">
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-chocolate-soft block mb-1">
                    Direct Phone &amp; WhatsApp
                  </span>
                  <a
                    href={SITE_CONFIG.phoneTel}
                    className="font-sans text-xl sm:text-2xl font-bold text-chocolate hover:text-olive transition-colors block"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                  <p className="font-sans text-xs text-chocolate-muted mt-1 font-medium">
                    Saravanampatti, Coimbatore
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 flex flex-wrap items-center gap-3">
                <a
                  href={SITE_CONFIG.phoneTel}
                  className="btn-press font-sans inline-flex items-center gap-2 bg-ivory hover:bg-linen text-chocolate text-xs sm:text-sm font-semibold uppercase tracking-wider px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl border border-chocolate/15 transition-colors"
                >
                  <Phone className="w-4 h-4 text-olive" />
                  <span>Call Us</span>
                </a>

                <a
                  href={SITE_CONFIG.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-press font-sans inline-flex items-center gap-2 bg-olive-dark hover:bg-olive text-ivory text-xs sm:text-sm font-semibold uppercase tracking-wider px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl shadow-2xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-ivory/20" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <a
                  href={SITE_CONFIG.mapLocation.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans inline-flex items-center gap-1.5 text-olive hover:text-olive-dark text-xs sm:text-sm font-semibold uppercase tracking-wider py-2 transition-colors ml-auto"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Visual Google Map Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="catalog-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between h-full bg-ivory-card">
              
              {/* Card Header Information */}
              <div className="mb-5">
                <span className="font-sans text-xs font-semibold uppercase tracking-wider text-olive block mb-1">
                  FIND US IN COIMBATORE
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-chocolate mb-2">
                  Located in Saravanampatti
                </h3>
                <p className="font-sans text-chocolate-muted text-sm sm:text-base leading-relaxed">
                  Visit us at 72K6 3rd PeriyaGounder Street, directly opposite Kalyani Medicals in North Vinayagapuram.
                </p>
              </div>

              {/* Large Visual Google Map Container */}
              <div className="w-full rounded-xl overflow-hidden border border-chocolate/15 bg-linen/50 shadow-2xs relative">
                <iframe
                  title="Mezin food products - Google Maps Location"
                  src={embedUrl}
                  className="w-full h-[260px] sm:h-[320px] md:h-[350px] border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>

              {/* Details & Directions Action Beneath Map */}
              <div className="mt-5 pt-5 border-t border-chocolate/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs">
                  <p className="font-sans font-bold text-base sm:text-lg text-chocolate leading-tight">
                    {SITE_CONFIG.mapLocation.listingName}
                  </p>
                  <p className="font-sans text-chocolate-muted text-xs sm:text-sm mt-0.5">
                    Coimbatore · 641035 · Opposite Kalyani Medicals
                  </p>
                </div>

                <a
                  href={SITE_CONFIG.mapLocation.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-press font-sans inline-flex items-center justify-center gap-2 bg-olive-dark hover:bg-olive text-ivory text-xs sm:text-sm font-semibold uppercase tracking-wider px-5 py-3 rounded-xl shadow-2xs hover:shadow-xs transition-colors shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
