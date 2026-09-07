"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/data/siteConfig";

export default function FloatingWhatsApp() {
  return (
    <motion.aside
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
      aria-label="Enquire on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center group"
    >
      <a
        href={SITE_CONFIG.getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire on WhatsApp"
        className="btn-press flex items-center gap-2.5 bg-olive-dark hover:bg-olive text-ivory p-3.5 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-ivory/20 focus-visible:ring-2 focus-visible:ring-olive"
      >
        <MessageCircle className="w-5 h-5 fill-ivory/20 shrink-0" />
        <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider pr-1">
          Enquire on WhatsApp
        </span>
      </a>
    </motion.aside>
  );
}
