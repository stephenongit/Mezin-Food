"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Flame, Wheat, UtensilsCrossed, ShoppingBag, Eye, MessageCircle, PhoneCall } from "lucide-react";

export const About: React.FC = () => {
  const { t, isTamil } = useLanguage();

  const activitiesData = [
    {
      id: "spices",
      icon: Flame,
      title: t.about.spicesTitle,
      desc: t.about.spicesDesc,
      iconColor: "text-terracotta-600 bg-terracotta-50 border-terracotta-100",
    },
    {
      id: "flour",
      icon: Wheat,
      title: t.about.flourTitle,
      desc: t.about.flourDesc,
      iconColor: "text-olive-600 bg-olive-50 border-olive-100",
    },
    {
      id: "batter",
      icon: UtensilsCrossed,
      title: t.about.batterTitle,
      desc: t.about.batterDesc,
      iconColor: "text-gold-600 bg-gold-50 border-gold-100",
    },
    {
      id: "raw-ingredients",
      icon: ShoppingBag,
      title: t.about.rawTitle,
      desc: t.about.rawDesc,
      iconColor: "text-brown-600 bg-brown-50 border-brown-100",
    },
  ];

  const stepsData = [
    {
      number: "1",
      icon: Eye,
      title: t.about.step1Title,
      desc: t.about.step1Desc,
    },
    {
      number: "2",
      icon: MessageCircle,
      title: t.about.step2Title,
      desc: t.about.step2Desc,
    },
    {
      number: "3",
      icon: PhoneCall,
      title: t.about.step3Title,
      desc: t.about.step3Desc,
    },
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-cream-50 relative border-b border-beige-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-beige-100 border border-beige-300 text-brown-800 text-xs font-semibold mb-3">
            <span className={isTamil ? "font-tamil text-xs" : "tracking-wide"}>{t.about.badge}</span>
          </div>

          <h2
            className={`font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-brown-950 tracking-tight leading-tight ${
              isTamil ? "font-tamil text-2xl sm:text-3xl" : ""
            }`}
          >
            {t.about.title}
          </h2>

          <div className="w-16 h-1 bg-gold-500 mx-auto mt-3 rounded-full" />
        </div>

        {/* Story Intro Text */}
        <div className="max-w-3xl mx-auto mb-12 space-y-3.5 text-center sm:text-left">
          <p
            className={`text-sm sm:text-base md:text-lg text-brown-800 leading-relaxed ${
              isTamil ? "font-tamil text-base sm:text-lg leading-loose" : ""
            }`}
          >
            {t.about.introP1}
          </p>
          <p
            className={`text-sm sm:text-base md:text-lg text-brown-800 leading-relaxed ${
              isTamil ? "font-tamil text-base sm:text-lg leading-loose" : ""
            }`}
          >
            {t.about.introP2}
          </p>
          <p
            className={`text-sm sm:text-base md:text-lg text-brown-700 leading-relaxed ${
              isTamil ? "font-tamil text-base sm:text-lg leading-loose" : ""
            }`}
          >
            {t.about.introP3}
          </p>
        </div>

        {/* 4 Core Activities Grid: 2x2 on phones, 4 across on desktop */}
        <div className="mb-14">
          <div className="text-center mb-6">
            <h3
              className={`font-serif text-xl sm:text-2xl font-bold text-brown-950 ${
                isTamil ? "font-tamil text-xl" : ""
              }`}
            >
              {t.about.activitiesTitle}
            </h3>
            <p
              className={`text-xs sm:text-sm text-brown-600 mt-1 max-w-xl mx-auto ${
                isTamil ? "font-tamil text-xs" : ""
              }`}
            >
              {t.about.activitiesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {activitiesData.map((act) => {
              const IconComponent = act.icon;
              return (
                <div
                  key={act.id}
                  className="bg-cream rounded-2xl p-4 sm:p-6 border border-beige-200 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 border ${act.iconColor}`}
                    >
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    <h4
                      className={`font-serif text-base sm:text-lg font-bold text-brown-950 mb-1.5 ${
                        isTamil ? "font-tamil text-base" : ""
                      }`}
                    >
                      {act.title}
                    </h4>

                    <p
                      className={`text-xs sm:text-sm text-brown-700 leading-relaxed ${
                        isTamil ? "font-tamil text-xs leading-normal" : ""
                      }`}
                    >
                      {act.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3-Step "How to Enquire" Section (Replaces "What Defines Us") */}
        <div className="bg-beige-100/70 rounded-3xl p-5 sm:p-8 border border-beige-300/80">
          <div className="text-center mb-6">
            <h3
              className={`font-serif text-xl sm:text-2xl font-bold text-brown-950 ${
                isTamil ? "font-tamil text-xl" : ""
              }`}
            >
              {t.about.howToEnquireTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {stepsData.map((step) => {
              const IconComp = step.icon;
              return (
                <div
                  key={step.number}
                  className="bg-cream-50/95 rounded-2xl p-4 sm:p-5 border border-beige-200 shadow-sm flex items-start gap-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-olive-100 text-olive-800 flex items-center justify-center shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4
                      className={`font-bold text-brown-950 text-sm sm:text-base mb-1 ${
                        isTamil ? "font-tamil" : ""
                      }`}
                    >
                      {step.title}
                    </h4>
                    <p
                      className={`text-xs sm:text-sm text-brown-700 leading-relaxed ${
                        isTamil ? "font-tamil text-xs leading-normal" : ""
                      }`}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
