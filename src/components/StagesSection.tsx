
import { motion } from "framer-motion";

const stages = [
  {
    number: "01",
    title: "The Stirring",
    subtitle: "Awareness",
    description: "\"When the noise feels louder than your voice. You begin to sense imbalance mentally, emotionally, or physically. There's a desire for more: more peace, more authenticity, more you.\"",
    bgColor: "bubblegum-pink"
  },
  {
    number: "02", 
    title: "The Awakening",
    subtitle: "Reflection",
    description: "\"You pause. You listen. You begin to see yourself again. This is where self-reflection kicks in. You start asking deeper questions and recognizing patterns that no longer serve you.\"",
    bgColor: "bubblegum-blue"
  },
  {
    number: "03",
    title: "The Rebalance",
    subtitle: "Realignment", 
    description: "\"Shedding the noise, rewriting the story. You begin to make intentional shifts in thoughts, habits, boundaries, or beliefs. You're not seeking perfection, but harmony.\"",
    bgColor: "bubblegum-purple"
  },
  {
    number: "04",
    title: "The Becoming",
    subtitle: "Empowerment",
    description: "\"You step into your light unapologetically. Now, you act from a place of alignment. You're more centered, expressive, and self-led. Life feels more fluid and meaningful.\"",
    bgColor: "bubblegum-lavender"
  },
  {
    number: "05",
    title: "The Beyond",
    subtitle: "Expansion",
    description: "\"Balance isn't the end, it's the beginning. You extend that balance to your relationships, work, and purpose. You live not just for survival, but expansion. You are the calm and the storm.\"",
    bgColor: "bubblegum-pink"
  }
];

const StagesSection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Bubblegum flowing background */}
      <div className="absolute inset-0 bubblegum-bg"></div>
      <div className="absolute top-40 left-20 w-80 h-80 bg-bubblegum-purple/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-32 w-64 h-64 bg-bubblegum-blue/25 rounded-full blur-2xl"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 space-y-8"
        >
          <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight">
            5 STAGES OF 
            <span className="block text-primary font-normal italic transform rotate-1">
              BEYOND BALANCE
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full mx-auto"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Intentional and empowered living through a journey of transformation
          </p>
        </motion.div>

        <div className="space-y-16">
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex items-center gap-12 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
            >
              {/* Stage Number - Floating Circle */}
              <div className="flex-shrink-0">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative"
                >
                  <div className={`w-32 h-32 rounded-full bg-${stage.bgColor} backdrop-blur-sm border border-primary/30 flex items-center justify-center shadow-2xl`}>
                    <span className="text-3xl font-bold text-primary">
                      {stage.number}
                    </span>
                  </div>
                  {/* Floating accent */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent/30 rounded-full blur-sm"></div>
                </motion.div>
              </div>
              
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-3xl md:text-4xl font-semibold text-foreground">
                    {stage.title}
                  </h3>
                  <p className="text-xl text-primary italic font-medium">
                    "{stage.subtitle}"
                  </p>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-2xl">
                  {stage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StagesSection;
