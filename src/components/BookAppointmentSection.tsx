
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BookAppointmentSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 md:pt-28">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://cyzofnicsspmbsqdrkla.supabase.co/storage/v1/object/public/landing-assets/Image%20(1).jpeg')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-transparent" />
      </div>
      
      {/* Floating Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16 gap-12"
      >
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-7xl font-light text-background mb-6 leading-tight">
            Book Your
            <span className="block text-bg font-normal italic">Journey</span>
            Today
          </h1>
          <p className="text-xl md:text-2xl text-background/90 max-w-2xl font-light leading-relaxed">
            Take the first step towards your mental wellness with personalized, 
            psychology-informed support designed just for you.
          </p>
        </div>
        
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex-shrink-0"
        >
          <Link to="/get-started">
            <Button 
              size="lg" 
              className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary px-12 py-6 text-xl font-light rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Begin Now
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BookAppointmentSection;
