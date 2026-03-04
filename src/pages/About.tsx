
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookAppointmentSection from "@/components/BookAppointmentSection";
import AccessibilitySection from "@/components/AccessibilitySection";
import FoundersSection from "@/components/FoundersSection";
import VisionMissionStorySection from "@/components/VisionMissionStorySection";
import MultiLayeredWave from "@/components/MultiLayeredWave";
import { CircularGradients } from "@/components/CircularGradients";
import WaveDivider from "@/components/WaveDivider";
import AnimatedBackground from "@/components/AnimatedBackground";
import ColorfulAccent from "@/components/ColorfulAccent";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle navigation to specific sections
    const hash = location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);
  return (
    <AnimatedBackground className="min-h-screen bg-background" intensity="subtle">
      <CircularGradients count={6} />
      <Navigation />
      
      <ColorfulAccent accentType="glow" intensity="light">
        <div id="appointment">
          <BookAppointmentSection />
        </div>
      </ColorfulAccent>
      
      <MultiLayeredWave height={80} className="my-12" />
      
      <div id="accessibility">
        <AccessibilitySection />
      </div>
      
      <WaveDivider position="bottom" height={110} className="my-16" />
      
      <ColorfulAccent accentType="background" intensity="light" className="py-8">
        <div id="founders">
          <FoundersSection />
        </div>
      </ColorfulAccent>
      
      <MultiLayeredWave height={90} className="my-16" />
      
      <div id="vision">
        <VisionMissionStorySection />
      </div>
      
      <WaveDivider position="top" height={100} className="mb-0" />
      <Footer />
    </AnimatedBackground>
  );
};

export default About;
