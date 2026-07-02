import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactFAQ from "@/components/ContactFAQ";
import { CircularGradients } from "@/components/CircularGradients";
import WaveDivider from "@/components/WaveDivider";
import AnimatedBackground from "@/components/AnimatedBackground";
import ColorfulAccent from "@/components/ColorfulAccent";

const Childcare = () => {
  return (
    <AnimatedBackground className="min-h-screen bg-background" intensity="subtle">
      <CircularGradients count={5} />
      <Navigation />
      <div className="min-h-dvh">
        <ColorfulAccent
          accentType="background"
          intensity="light"
          className="pt-40 pb-24 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-light text-foreground uppercase">
            Childcare
            <span className="block font-bold text-primary"> Services</span>
            {/*<span className="block font-light text-secondary transform rotate-1">WITH US</span>*/}
          </h2>
        </ColorfulAccent>
      </div>
      <Footer />
    </AnimatedBackground>
  );
};

export default Childcare;
