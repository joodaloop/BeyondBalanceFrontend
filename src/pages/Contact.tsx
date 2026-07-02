import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";
import ContactFAQ from "@/components/ContactFAQ";
import ContactConclusion from "@/components/ContactConclusion";
import CrisisResources from "@/components/CrisisResources";
import MultiLayeredWave from "@/components/MultiLayeredWave";
import { CircularGradients } from "@/components/CircularGradients";
import WaveDivider from "@/components/WaveDivider";
import AnimatedBackground from "@/components/AnimatedBackground";
import ColorfulAccent from "@/components/ColorfulAccent";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle navigation to specific sections
    const hash = location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location]);
  return (
    <AnimatedBackground className="min-h-screen bg-background" intensity="subtle">
      <CircularGradients count={5} />
      <Navigation />

      {/*<ColorfulAccent accentType="glow" intensity="medium">
        <ContactHero />
      </ColorfulAccent>*/}

      {/*<MultiLayeredWave height={70} className="my-10" />*/}

      <ColorfulAccent accentType="background" intensity="light" className="pt-64 pb-24 text-center">
        <h2 className="text-4xl md:text-5xl font-light text-foreground">
          GET IN
          <span className="block font-bold text-primary italic transform -rotate-1">TOUCH</span>
          <span className="block font-light text-secondary transform rotate-1">WITH US</span>
        </h2>
      </ColorfulAccent>

      <div className="text-center">
        <a href="https://wa.me/917977615383"> Text us on Whatsapp</a>
      </div>

      {/*<WaveDivider position="bottom" height={120} className="my-16" />*/}

      <div id="faq">
        <ContactFAQ />
      </div>

      {/*<MultiLayeredWave height={85} className="my-12" />*/}

      {/*<div id="location">
        <ContactConclusion />
      </div>*/}

      {/*<WaveDivider position="top" height={90} className="my-14" />*/}

      <CrisisResources />

      <WaveDivider position="top" height={100} className="mb-0" />
      <Footer />
    </AnimatedBackground>
  );
};

export default Contact;
