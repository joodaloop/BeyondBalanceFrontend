
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CircularGradient } from "./CircularGradients";

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 1,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };
  
  const titleVariants = {
    firstLine: {
      hidden: { opacity: 0, x: -30 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.8 }
      }
    },
    secondLine: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.8 }
      }
    },
    thirdLine: {
      hidden: { opacity: 0, x: 30 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.8 }
      }
    }
  };
  
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-24 md:pt-28">
      {/* Bubblegum background gradients */}
      <div className="absolute inset-0 bubblegum-bg"></div>
      
      {/* Circular gradients for pop of color */}
      <CircularGradient 
        size="300px" 
        opacity={0.03}
        duration={20} 
        className="top-10 left-10" 
      />
      <CircularGradient 
        size="250px" 
        opacity={0.04}
        duration={15} 
        delay={3} 
        className="bottom-20 right-16" 
      />
      <CircularGradient 
        size="200px" 
        opacity={0.05}
        duration={18} 
        delay={6} 
        className="top-1/3 right-1/4" 
      />
      <CircularGradient 
        size="280px" 
        opacity={0.03}
        duration={22} 
        delay={9} 
        className="bottom-1/4 left-1/3" 
      />
      
      {/* Floating bubblegum bubbles */}
      <motion.div 
        className="absolute top-20 left-20 w-64 h-64 bg-bubblegum-pink/30 rounded-full blur-3xl opacity-70"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-32 right-16 w-80 h-80 bg-bubblegum-blue/25 rounded-full blur-2xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror"
        }}
      ></motion.div>
      <motion.div 
        className="absolute top-1/3 right-1/4 w-40 h-40 bg-bubblegum-purple/30 rounded-full blur-xl"
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror"
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-bubblegum-lavender/20 rounded-full blur-2xl"
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "mirror"
        }}
      ></motion.div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <h1 className="leading-tight space-y-4 text-left">
              <motion.span 
                className="block text-4xl md:text-5xl lg:text-6xl font-light text-foreground"
                variants={titleVariants.firstLine}
              >
                GROUNDED IN
              </motion.span>
              <motion.span 
                className="block text-4xl md:text-5xl lg:text-6xl font-bold text-primary transform -rotate-1"
                variants={titleVariants.secondLine}
              >
                BALANCE,
              </motion.span>
              <motion.span 
                className="block text-3xl md:text-4xl lg:text-5xl font-light text-secondary italic transform rotate-1"
                variants={titleVariants.thirdLine}
              >
                GROWING BEYOND.
              </motion.span>
            </h1>
            
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
                Find your center and nurture your growth with our comprehensive mental health services. 
                Your journey to wellness begins here.
              </p>
              
              <Link to="/get-started" className="inline-block mt-8">
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    y: -2
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20,
                    duration: 0.2
                  }}
                >
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-light rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 ease-out"
                  >
                    Begin Your Journey
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative w-[min(100%,500px)] aspect-square rounded-3xl overflow-hidden shadow-2xl bubblegum-card">
              <img 
                src="https://cyzofnicsspmbsqdrkla.supabase.co/storage/v1/object/public/landing-assets/IMG_0354.JPG"
                alt="Person practicing mindfulness and wellness"
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay for better integration */}
              <div className="absolute inset-0 bg-gradient-to-br from-bubblegum-pink/10 to-transparent rounded-3xl"></div>
            </div>
            
            {/* Decorative bubblegum elements around the image */}
            <motion.div 
              className="absolute -top-4 -left-4 w-8 h-8 bg-bubblegum-purple/40 rounded-full blur-sm"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.6, 0.8, 0.6]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror"
              }}
            ></motion.div>
            <motion.div 
              className="absolute -bottom-6 -right-6 w-12 h-12 bg-bubblegum-blue/30 rounded-full blur-lg"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "mirror"
              }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
