
import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import ComingSoonCard from "@/components/ComingSoonCard";
import { services, comingSoonServices } from "@/data/servicesData";

const ServicesGrid = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Artistic background with flowing gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card/30 to-background"></div>
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-accent/10 to-primary/10"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Available Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-light text-foreground">
            Available <span className="font-bold text-primary italic">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Expertly crafted experiences designed to support your unique journey toward wellness and growth.
          </p>
        </motion.div>

        {/* Services Cards - Flowing Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-light text-foreground">
            <span className="italic text-secondary">Coming</span> <span className="font-bold text-secondary">Soon</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary/50 via-secondary to-secondary/50 mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Exciting new offerings in development to further enhance your wellness experience.
          </p>
        </motion.div>

        {/* Coming Soon Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {comingSoonServices.map((service, index) => (
            <ComingSoonCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
