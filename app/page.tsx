import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Features from "./Features";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <ContactSection />
      <Footer />
    </main>
  );
}
