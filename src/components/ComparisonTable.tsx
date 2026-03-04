
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, AlertTriangle, Brain, Heart, Target, Shield, Star, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const ComparisonTable = () => {
  const comparisonPoints = [
    {
      icon: <Brain className="w-4 h-4" />,
      withUs: "Grounded in psychology — backed by research, theory, and training",
      others: "Often based on personal experience alone, not psychological science"
    },
    {
      icon: <Heart className="w-4 h-4" />,
      withUs: "CBT, Emotion Theory, Inner Child Work, Attachment Theory — all integrated thoughtfully",
      others: 'Uses broad advice like "just manifest" or "change your mindset"'
    },
    {
      icon: <Target className="w-4 h-4" />,
      withUs: "Blended: Traditional wisdom + modern science",
      others: "Can lean too far into pseudoscience or spiritual bypassing"
    },
    {
      icon: <Users className="w-4 h-4" />,
      withUs: "Every conversation is customized — no scripts or one-size-fits-all",
      others: "Generic affirmations and pre-written routines"
    },
    {
      icon: <Shield className="w-4 h-4" />,
      withUs: "Inclusive, trauma-aware, and neurodiversity-friendly",
      others: "Often overlook real-world struggles and psychological safety"
    },
    {
      icon: <Star className="w-4 h-4" />,
      withUs: "Compassionate AND structured — feel seen, but also get practical tools",
      others: 'Overemphasis on "feeling better" instead of understanding why you feel that way'
    },
    {
      icon: <Clock className="w-4 h-4" />,
      withUs: "No pressure, no selling, no timelines — healing moves at your pace",
      others: 'Packages, "healing in 3 weeks" promises, or upsells'
    },
    {
      icon: <Brain className="w-4 h-4" />,
      withUs: "Real tools: emotion regulation, self-talk shifts, identity work, boundaries",
      others: 'Vague: "align your energy," "raise your frequency," etc.'
    },
    {
      icon: <Shield className="w-4 h-4" />,
      withUs: "Ethical — rooted in values, consent, and respect for your unique journey",
      others: "Unregulated, sometimes misinformed advice that can do harm"
    }
  ];

  return (
    <section id="comparison" className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-background via-card/10 to-background relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-primary/5 to-secondary/5 blur-xl"
      />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 space-y-6"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
            <span className="text-primary">✓</span> Why Choose Us?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto rounded-full" />
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden shadow-lg"
        >
          {/* Header Row */}
          <div className="grid grid-cols-2 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10">
            <div className="p-4 md:p-6 border-r border-border/30">
              <div className="flex items-center justify-center space-x-2 text-center">
                <Brain className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                <h3 className="text-sm md:text-lg font-bold text-primary">
                  With Us (Psychology-Informed Support)
                </h3>
              </div>
            </div>
            <div className="p-4 md:p-6">
              <div className="flex items-center justify-center space-x-2 text-center">
                <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-yellow-600" />
                <h3 className="text-sm md:text-lg font-bold text-yellow-600">
                  Other Wellness Providers
                </h3>
              </div>
            </div>
          </div>

          {/* Comparison Rows */}
          {comparisonPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`grid grid-cols-2 border-b border-border/30 ${
                index % 2 === 0 ? 'bg-background/50' : 'bg-card/30'
              }`}
            >
              <div className="p-4 md:p-6 border-r border-border/30">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                    <div className="text-primary">{point.icon}</div>
                  </div>
                  <p className="text-xs md:text-sm text-foreground leading-relaxed font-medium">
                    {point.withUs}
                  </p>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mt-0.5">
                    <X className="w-3 h-3 md:w-4 md:h-4 text-red-600" />
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {point.others}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to experience the Beyond Balance difference? Join thousands who have transformed their mental wellness journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/get-started">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto">
                Start Your Journey
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;
