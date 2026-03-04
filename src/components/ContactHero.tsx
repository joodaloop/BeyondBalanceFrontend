
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 md:pt-28">
      {/* Flowing background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-sage/20 to-mint/30"></div>
      
      {/* Floating organic shapes */}
      <motion.div 
        className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-70"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute bottom-32 right-16 w-80 h-80 bg-accent/15 rounded-full blur-2xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror"
        }}
      />
      
      <motion.div
        className="relative z-10 text-center max-w-5xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="space-y-8">
          <h1 className="leading-tight space-y-4">
            <span className="block text-6xl md:text-7xl font-light text-foreground">
              CONNECT &
            </span>
            <span className="block text-6xl md:text-7xl font-bold text-primary transform -rotate-1 italic">
              DISCOVER
            </span>
            <span className="block text-5xl md:text-6xl font-light text-secondary transform rotate-1">
              YOUR PATH
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Take our personality quiz, explore resources tailored for you, and find answers to your questions. 
            Your wellness journey is unique, and we're here to support it.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactHero;
