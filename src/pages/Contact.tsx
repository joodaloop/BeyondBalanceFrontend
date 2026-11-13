import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactFAQ from "@/components/ContactFAQ";
import ContactDetails from "@/components/ContactDetails";
import { CircularGradients } from "@/components/CircularGradients";
import WaveDivider from "@/components/WaveDivider";
import AnimatedBackground from "@/components/AnimatedBackground";
import ColorfulAccent from "@/components/ColorfulAccent";

const Contact = () => {
  return (
    <AnimatedBackground className="min-h-screen bg-background" intensity="subtle">
      <CircularGradients count={5} />
      <Navigation />

      {/*<ColorfulAccent accentType="glow" intensity="medium">
        <ContactHero />
      </ColorfulAccent>*/}

      {/*<MultiLayeredWave height={70} className="my-10" />*/}

      <ColorfulAccent accentType="background" intensity="light" className="pt-40 pb-12 text-center">
        <h2 className="text-5xl md:text-6xl font-light text-foreground">
          GET IN
          <span className="block font-bold text-primary">TOUCH</span>
          {/*<span className="block font-light text-secondary transform rotate-1">WITH US</span>*/}
        </h2>
      </ColorfulAccent>

      <ContactDetails />

      <div id="faq">
        <ContactFAQ />
      </div>

      <WaveDivider position="top" height={100} className="mb-0" />
      <Footer />
    </AnimatedBackground>
  );
};

export default Contact;
