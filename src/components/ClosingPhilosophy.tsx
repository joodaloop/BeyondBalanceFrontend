
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CircularGradient } from "./CircularGradients";

const ClosingPhilosophy = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
      {/* Circular gradients for pop of color */}
      <CircularGradient 
        size="250px" 
        opacity={0.04}
        duration={20} 
        className="top-10 left-10" 
      />
      <CircularGradient 
        size="200px" 
        opacity={0.05}
        duration={15} 
        delay={5} 
        className="bottom-10 right-10" 
      />
      <CircularGradient 
        size="180px" 
        opacity={0.03}
        duration={18} 
        delay={10} 
        className="top-1/2 left-1/4" 
      />
      <CircularGradient 
        size="220px" 
        opacity={0.04}
        duration={22} 
        delay={15} 
        className="top-1/3 right-1/4" 
      />
      
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-6">
            {/* <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Your Journey to Balance Starts Here
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              At Beyond Balance, we believe that true wellness isn't about perfection—it's about 
              finding harmony within yourself and with the world around you. Every step you take 
              toward understanding yourself better is a step toward a more authentic, fulfilling life.
            </p> */}
          </div>
          
          <div className="py-8 px-6 bg-card/50 rounded-2xl border border-border/50 backdrop-blur-sm">
            <blockquote className="text-xl md:text-2xl font-medium text-primary italic mb-4">
              "Balance isn't something you find, it's something you create."
            </blockquote>
            <p className="text-muted-foreground">
              — Beyond Balance 
            </p>
          </div>

          <div className="pt-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Begin?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Your transformation awaits. Take the first step toward a more balanced, 
              empowered version of yourself.
            </p>
            <Link to="/get-started">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Start Your Journey Today
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingPhilosophy;
