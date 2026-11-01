"use client";

import React, { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";
import { useEnquiry } from "@/context/EnquiryContext";
import { MessageCircle, Phone } from "lucide-react";

export const MobileBottomBar: React.FC = () => {
  const { t, isTamil } = useLanguage();
  const { isDrawerOpen } = useEnquiry();
  const [modalOpen, setModalOpen] = useState(false);

  // Detect if modal or any overlay has locked body scroll
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setModalOpen(document.body.style.overflow === "hidden");
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["style"] });
    return () => observer.disconnect();
  }, []);

  // Hide while product modal or enquiry drawer is open
  if (isDrawerOpen || modalOpen) {
    return null;
  }

  const generalWhatsappUrl = siteConfig.buildWhatsappUrl(t.whatsappMessages.general);

  return (
    <aside
      aria-label={t.accessibility.quickContact}
      className="md:hidden fixed bottom-0 inset-x-0 z-30 h-14 bg-cream-50/95 backdrop-blur-md border-t border-beige-300 shadow-warm px-3 flex items-center justify-between gap-2.5"
    >
      {/* Primary WhatsApp Action (flex-1) */}
      <a
        href={generalWhatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 h-11 px-4 rounded-xl bg-olive-700 active:bg-olive-800 text-cream-50 font-bold text-sm shadow transition-colors"
      >
        <MessageCircle className="w-4 h-4 text-cream-100" />
        <span className={isTamil ? "font-tamil text-sm" : ""}>{t.mobileBar.whatsapp}</span>
      </a>

      {/* Call Button */}
      <a
        href={siteConfig.phoneUrl}
        className="flex items-center justify-center gap-1.5 h-11 px-4 rounded-xl border border-brown-300 bg-cream text-brown-900 font-semibold text-xs active:bg-beige-100 transition-colors shrink-0"
      >
        <Phone className="w-4 h-4 text-olive-700" />
        <span className={isTamil ? "font-tamil text-xs" : ""}>{t.mobileBar.call}</span>
      </a>
    </aside>
  );
};

