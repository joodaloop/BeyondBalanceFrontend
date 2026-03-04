
import { motion } from "framer-motion";

const ServicesHero = () => {
  return (
    <section className="relative py-24 pt-32 md:pt-36 px-6 overflow-hidden">
      {/* Bubblegum background gradients */}
      <div className="absolute inset-0 bubblegum-bg"></div>
      
      {/* Floating bubblegum shapes */}
      <motion.div 
        className="absolute top-20 left-20 w-64 h-64 bg-bubblegum-pink/20 rounded-full blur-3xl opacity-70"
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
        className="absolute bottom-32 right-16 w-80 h-80 bg-bubblegum-blue/15 rounded-full blur-2xl"
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
        className="absolute top-1/3 right-1/4 w-40 h-40 bg-bubblegum-purple/25 rounded-full blur-xl"
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

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <h1 className="leading-tight space-y-4">
            <motion.span 
              className="block text-5xl md:text-6xl font-light text-foreground"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              DISCOVER OUR
            </motion.span>
            <motion.span 
              className="block text-6xl md:text-7xl font-bold text-primary transform -rotate-1"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              SERVICES,
            </motion.span>
            <motion.span 
              className="block text-4xl md:text-5xl font-light text-secondary italic transform rotate-1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              EMBRACE GROWTH.
            </motion.span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              From interactive workshops to personalized therapy sessions, we provide the tools and support 
              you need for your mental wellness journey.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
