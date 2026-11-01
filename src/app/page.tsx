import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ProductCatalogue } from "@/components/ProductCatalogue";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { EnquiryDrawer } from "@/components/EnquiryDrawer";
import { MobileBottomBar } from "@/components/MobileBottomBar";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-brown antialiased selection:bg-gold-200">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <ProductCatalogue />
        <Contact />
      </main>
      <Footer />
      <EnquiryDrawer />
      <MobileBottomBar />
    </div>
  );
}
