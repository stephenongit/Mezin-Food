"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 md:py-36 bg-ivory-card border-b border-chocolate/10"
      aria-label="About Mezin Food Products"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        
        {/* Section Header with Brand Logo */}
        <div className="flex items-center gap-4 mb-8 sm:mb-10">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden bg-ivory-card border border-chocolate/15 shadow-2xs shrink-0">
            <Image
              src="/mfp-logo.png"
              alt="Mezin Food Products Logo"
              fill
              sizes="56px"
              className="object-contain p-1"
            />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-olive block mb-1">
              About Us
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-chocolate tracking-tight uppercase">
              Mezin Food Products
            </h2>
          </div>
        </div>

        {/* Factual Narrative - Inter, High Contrast */}
        <div className="font-sans text-chocolate text-base sm:text-lg md:text-xl leading-relaxed space-y-6">
          <p>
            Established in 2025, Mezin Food Products began as a local grinding mill,
            providing grinding services for spices, flour and batter. MFP has since
            expanded into packaged food products, bringing selected raw ingredients
            sourced from the farmer&apos;s market into convenient products for everyday
            kitchens.
          </p>
        </div>

        {/* Factual Highlights List */}
        <div className="mt-12 pt-8 border-t border-chocolate/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-chocolate-soft block">
              Established
            </span>
            <span className="font-serif text-xl font-bold text-chocolate">2025</span>
          </div>
          <div>
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-chocolate-soft block">
              Location
            </span>
            <span className="font-serif text-xl font-bold text-chocolate">Coimbatore</span>
          </div>
          <div>
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-chocolate-soft block">
              Core Services
            </span>
            <span className="font-sans text-base font-bold text-chocolate">
              Spices, Flour &amp; Batter
            </span>
          </div>
          <div>
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-chocolate-soft block">
              Ingredients
            </span>
            <span className="font-sans text-base font-bold text-chocolate">
              Farmer&apos;s Market Sourced
            </span>
          </div>
        </div>

      </motion.div>
    </section>
  );
}
