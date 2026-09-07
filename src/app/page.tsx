import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import ContactLocation from "@/components/ContactLocation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Products />
        <About />
        <ContactLocation />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
