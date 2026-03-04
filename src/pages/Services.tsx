
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesGrid from "@/components/ServicesGrid";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div id="overview">
        <ServicesHero />
      </div>
      <div id="current-services">
        <ServicesGrid />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
