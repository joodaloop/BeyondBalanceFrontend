
import { motion } from "framer-motion";

const FoundersSection = () => {
  return (
    <section className="py-16 md:py-32 bg-gradient-to-bl from-card/30 via-background to-muted/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
        
        {/* Centered Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight">
             Our {" "}
            <span className="text-primary block font-normal italic transform rotate-1 inline-block">
              Founders
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent to-primary rounded-full mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://cyzofnicsspmbsqdrkla.supabase.co/storage/v1/object/public/landing-assets/IMG_0357.JPG"
                alt="Founders of Beyond Balance"
                className="w-full h-[350px] md:h-[500px] lg:h-[600px] object-cover rounded-[2rem] md:rounded-[3rem] shadow-2xl transform hover:scale-105 transition-transform duration-700"
              />
              {/* Artistic Frame */}
              <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[2.5rem] md:rounded-[3.5rem] -z-10"></div>
              {/* Floating Elements */}
              <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 w-24 md:w-32 h-24 md:h-32 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>
          
          {/* Info Box - Same Size as Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-background to-card/50 backdrop-blur-sm p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-primary/10 h-auto md:h-[600px] flex flex-col justify-center">
              {/* Background Decorative Element */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-[2.5rem] md:rounded-[3.5rem] -z-10"></div>
              
              <div className="space-y-6">
                <div className="space-y-6 text-base md:text-lg leading-relaxed">
                  <p className="text-muted-foreground font-light">
                    Built on a deep foundation of psychological insight and heartfelt intention, Beyond Balance is co-founded 
                    by two passionate minds with a shared mission to make mental wellness feel less clinical and more human. 
                    They knew one thing for sure — healing should feel human. With a strong foundation in psychological theory 
                    and real-life experience, they combine deep knowledge with grounded, approachable care.
                  </p>
                  <p className="text-muted-foreground font-light">
                    They're quick thinkers with a warm, vibrant presence, the kind of people who make deep conversations 
                    feel light, and growth feel exciting. Whether they're helping you untangle your thoughts or guiding 
                    you back to balance, they do it with energy, empathy, and heart. No masks, no jargon — just authentic 
                    support with a spark.
                  </p>
                  <p className="text-muted-foreground font-light">
                    Together, they've created a space where support is soulful, science-backed, and anything but boring 
                    because balance should go beyond just feeling "fine."
                  </p>
                </div>
              </div>
              
              {/* Floating Element */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
