import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import DetailedResourcesSection from "@/components/DetailedResourcesSection";
import CrisisResources from "@/components/CrisisResources";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Resources = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle navigation to specific sections
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-24 pb-16 px-6 bg-gradient-to-br from-background via-card/20 to-background"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light text-foreground my-12">
            MENTAL HEALTH
            <span className="block font-bold text-primary italic">RESOURCES</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover comprehensive resources tailored to your unique journey toward mental wellness
            and personal growth.
          </p>
        </div>
      </motion.section>

      {/* Detailed Resources Section */}
      <div id="tailored-resources">
        <DetailedResourcesSection />
      </div>

      {/* Crisis Resources Section */}
      <div id="crisis-resources">
        <CrisisResources />
      </div>

      <Footer />
    </div>
  );
};

export default Resources;
