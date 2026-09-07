"use client";

import Image from "next/image";
import { MessageCircle, ArrowDown } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { SITE_CONFIG } from "@/data/siteConfig";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.97 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 md:pt-44 md:pb-32 bg-ivory border-b border-chocolate/10"
      aria-label="Hero"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Statement & Actions */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            
            {/* Brand Eyebrow with Logo Emblem */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-5">
              <div className="relative w-9 h-9 rounded-lg overflow-hidden bg-ivory-card border border-chocolate/15 shadow-2xs shrink-0">
                <Image
                  src="/mfp-logo.png"
                  alt="MFP Logo"
                  fill
                  sizes="36px"
                  className="object-contain p-0.5"
                />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-olive">
                Mezin Food Products · Coimbatore
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-chocolate leading-[1.1] tracking-tight uppercase mb-6 sm:mb-8"
            >
              From Our Mill
              <br />
              <span className="text-olive-dark">To Your Kitchen</span>
            </motion.h1>

            {/* Restrained Supporting Copy */}
            <motion.p
              variants={itemVariants}
              className="text-chocolate-muted text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl font-normal mb-8 sm:mb-10"
            >
              Spices, flours and traditional food products.
            </motion.p>

            {/* CTA Group */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#products"
                className="btn-press inline-flex items-center justify-center gap-2.5 bg-olive-dark hover:bg-olive text-ivory text-xs font-semibold uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-200 shadow-2xs hover:shadow-xs focus-visible:ring-2 focus-visible:ring-olive"
              >
                <span>Explore Our Products</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={SITE_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press inline-flex items-center justify-center gap-2.5 bg-ivory-card hover:bg-linen text-chocolate text-xs font-semibold uppercase tracking-widest px-8 py-4 rounded-full border border-chocolate/15 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-olive"
              >
                <MessageCircle className="w-4 h-4 text-olive" />
                <span>Enquire on WhatsApp</span>
              </a>
            </motion.div>

          </motion.div>

          {/* Right Column: Natural Studio Composition */}
          <motion.div
            className="lg:col-span-5 relative mt-4 lg:mt-0"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative aspect-4/5 w-full rounded-2xl overflow-hidden bg-linen border border-chocolate/10 shadow-xs">
              <Image
                src="/images/hero-spices.jpg"
                alt="Traditional South Indian culinary spices and flours"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 hover:scale-103"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
