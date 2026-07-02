import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ContactConclusion = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Artistic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10"></div>
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 left-1/4 w-64 h-64 bg-accent/8 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 right-1/4 w-48 h-48 bg-mint/10 rounded-full blur-2xl"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-light text-foreground">
            YOUR WELLNESS
            <span className="block font-bold text-primary italic transform -rotate-1">JOURNEY</span>
            <span className="block font-light text-secondary transform rotate-1">STARTS HERE</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center space-y-6"
          >
            <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Heart className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Personalized Care</h3>
            <p className="text-muted-foreground leading-relaxed">
              Every journey is unique. We tailor our approach to match your individual needs,
              preferences, and wellness goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center space-y-6"
          >
            <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Holistic Approach</h3>
            <p className="text-muted-foreground leading-relaxed">
              We believe in addressing the whole person - mind, body, and spirit - for sustainable
              wellness and lasting transformation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center space-y-6"
          >
            <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
              <Users className="w-10 h-10 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Community Support</h3>
            <p className="text-muted-foreground leading-relaxed">
              Join a supportive community of individuals on similar journeys, sharing experiences
              and celebrating growth together.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center space-y-8"
        >
          <div className="backdrop-blur-sm bg-card/40 border border-primary/20 rounded-2xl p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-light text-foreground mb-6">
              Ready to Begin Your
              <span className="block font-bold text-primary italic">Transformation?</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Take our personality quiz to discover your unique wellness style and get personalized
              recommendations for your journey ahead.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-light group"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactConclusion;
