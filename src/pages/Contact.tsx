import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactFAQ from "@/components/ContactFAQ";
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

      <ColorfulAccent accentType="background" intensity="light" className="pt-40 pb-24 text-center">
        <h2 className="text-5xl md:text-6xl font-light text-foreground">
          GET IN
          <span className="block font-bold text-primary">TOUCH</span>
          {/*<span className="block font-light text-secondary transform rotate-1">WITH US</span>*/}
        </h2>
      </ColorfulAccent>

      <div className="m-auto max-w-md grid gap-8">
        <div className="flex gap-4 justify-between">
          <div>+91 7021025183</div>
          <div>
            <a
              className="bg-[#25D366] p-1.5 px-2 text-white rounded-sm"
              href="https://wa.me/917021025183"
            >
              {" "}
              Whatsapp
            </a>
          </div>
        </div>

        <div>
          <div className="flex gap-4 justify-between">
            <div>+91 7977615383</div>
            <div>
              <a
                className="bg-[#25D366] p-1.5 px-2 text-white rounded-sm"
                href="https://wa.me/917977615383"
              >
                {" "}
                Whatsapp
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="flex gap-4 justify-between">
            <div>support@beyondbalance.org.in</div>
          </div>
        </div>

        <div>Instagram</div>

        <div>Linkedin</div>
      </div>

      <div id="faq">
        <ContactFAQ />
      </div>

      <WaveDivider position="top" height={100} className="mb-0" />
      <Footer />
    </AnimatedBackground>
  );
};

export default Contact;
