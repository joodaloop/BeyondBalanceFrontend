
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import UpcomingEvents from "@/components/UpcomingEvents";
import StatsGrid from "@/components/StatsGrid";
import StagesSection from "@/components/StagesSection";
import ComparisonTable from "@/components/ComparisonTable";
import ClosingPhilosophy from "@/components/ClosingPhilosophy";
import CrisisResources from "@/components/CrisisResources";
import Footer from "@/components/Footer";
import MultiLayeredWave from "@/components/MultiLayeredWave";
import { CircularGradients } from "@/components/CircularGradients";
import WaveDivider from "@/components/WaveDivider";
import AnimatedBackground from "@/components/AnimatedBackground";
import ColorfulAccent from "@/components/ColorfulAccent";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
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
      <CircularGradients count={8} />
      
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
        <Navigation />
      </motion.div>
      
      <ColorfulAccent accentType="glow" intensity="light">
        <motion.div id="hero" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}>
          <HeroSection />
        </motion.div>
      </ColorfulAccent>
      
      <MultiLayeredWave height={80} className="my-8" />
      
      <motion.div id="events" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}>
        <UpcomingEvents />
      </motion.div>
      
      <WaveDivider position="bottom" height={100} className="my-16" />
      
      <ColorfulAccent accentType="background" intensity="light" className="py-8">
        <motion.div id="stats" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}>
          <StatsGrid />
        </motion.div>
      </ColorfulAccent>
      
      <MultiLayeredWave height={60} className="my-12" />
      
      <motion.div id="stages" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}>
        <StagesSection />
      </motion.div>
      
      <WaveDivider position="top" height={120} className="my-20" />
      
      <motion.div id="comparison" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}>
        <ComparisonTable />
      </motion.div>
      
      <MultiLayeredWave height={90} className="my-16" />
      
      <ColorfulAccent accentType="glow" intensity="medium" className="my-8">
        <motion.div id="philosophy" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}>
          <ClosingPhilosophy />
        </motion.div>
      </ColorfulAccent>
      
      <WaveDivider position="bottom" height={140} className="my-12" />
      
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.9, ease: 'easeOut' }}>
        <CrisisResources />
      </motion.div>
      
      <WaveDivider position="top" height={100} className="mb-0" />
      <Footer />
    </AnimatedBackground>
  );
};

export default Index;
