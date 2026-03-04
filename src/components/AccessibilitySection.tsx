
import { motion } from "framer-motion";

const AccessibilitySection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-background via-card/20 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-2xl"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text Content - More Flowing */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight">
                Therapy Should Be 
                <span className="text-primary block font-normal italic transform -rotate-1 inline-block">
                  Accessible to All
                </span>
              </h2>
              
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground font-light">
                We believe that mental health support shouldn't be a luxury. Our mission is to break down 
                barriers and make quality therapy accessible, affordable, and available to everyone who needs it.
              </p>
              <p className="text-muted-foreground font-light">
                Through innovative approaches, flexible scheduling, and a deep understanding of diverse needs, 
                we're committed to creating a space where healing is possible for all.
              </p>
            </div>
            
            {/* Floating Tags */}
            <div className="flex flex-wrap gap-6 pt-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-r from-primary/20 to-accent/20 px-6 py-3 rounded-full backdrop-blur-sm border border-primary/20"
              >
                <span className="text-foreground font-medium">Flexible Scheduling</span>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-r from-accent/20 to-primary/20 px-6 py-3 rounded-full backdrop-blur-sm border border-accent/20"
              >
                <span className="text-foreground font-medium">Affordable Care</span>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-r from-muted/30 to-card/30 px-6 py-3 rounded-full backdrop-blur-sm border border-muted/30"
              >
                <span className="text-foreground font-medium">Online & In-Person</span>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Image - More Artistic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src="https://cyzofnicsspmbsqdrkla.supabase.co/storage/v1/object/public/landing-assets/IMG_0356.jpeg"
                alt="Accessible therapy session"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
              />
              {/* Artistic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 rounded-3xl"></div>
            </div>
            {/* Floating Accent */}
            {/* <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full opacity-80 blur-sm"></div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AccessibilitySection;
