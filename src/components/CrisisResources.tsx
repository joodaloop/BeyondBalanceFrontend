
import { motion } from "framer-motion";
import { Phone, Heart, Shield, Clock, ExternalLink } from "lucide-react";
import { CircularGradient } from "./CircularGradients";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const CrisisResources = () => {
  const stats = [
    {
      title: "Mental Health Crisis",
      description: "The global cost of untreated mental health conditions will reach $6 trillion by 2030.",
      highlight: "$6 trillion"
    },
    {
      title: "Depression Impact", 
      description: "Depression is the leading cause of disability worldwide, affecting millions of lives.",
      highlight: "Leading cause"
    },
    {
      title: "Youth Mental Health",
      description: "Suicide ranks among the top causes of death for young people globally.",
      highlight: "Top 4 cause"
    },
    {
      title: "PTSD in Conflict",
      description: "In conflict zones, nearly 7 in 10 children show signs of PTSD requiring immediate intervention.",
      highlight: "70% affected"
    },
    {
      title: "Healthcare Access",
      description: "India has fewer than 1 psychiatrist for every 100,000 people when WHO recommends 3.",
      highlight: "Severe shortage"
    },
    {
      title: "Child Trauma",
      description: "Globally, child neglect and trauma are linked to hundreds of thousands of premature deaths yearly.",
      highlight: "Critical impact"
    }
  ];

  const resources = [
    {
      icon: Phone,
      title: "National Suicide Prevention Lifeline",
      number: "988",
      description: "24/7 crisis support for those in emotional distress or suicidal crisis",
      availability: "Available 24/7"
    },
    {
      icon: Heart,
      title: "Crisis Text Line",
      number: "Text HOME to 741741",
      description: "Free, 24/7 crisis support via text message",
      availability: "Available 24/7"
    },
    {
      icon: Shield,
      title: "National Domestic Violence Hotline",
      number: "1-800-799-7233",
      description: "Confidential support for those affected by domestic violence",
      availability: "Available 24/7"
    },
    {
      icon: Clock,
      title: "SAMHSA National Helpline",
      number: "1-800-662-4357",
      description: "Treatment referral service for mental health and substance use disorders",
      availability: "Available 24/7"
    }
  ];

  return (
    <section className="relative py-16 px-6 bg-muted/20 border-t border-border/30 overflow-hidden">
      {/* Circular gradients for pop of color */}
      <CircularGradient 
        size="200px" 
        opacity={0.04}
        duration={18} 
        className="top-10 left-10" 
      />
      <CircularGradient 
        size="150px" 
        opacity={0.05}
        duration={15} 
        delay={3} 
        className="bottom-10 right-10" 
      />
      <CircularGradient 
        size="180px" 
        opacity={0.03}
        duration={20} 
        delay={6} 
        className="top-1/2 left-1/4" 
      />
      <CircularGradient 
        size="160px" 
        opacity={0.04}
        duration={16} 
        delay={9} 
        className="top-1/3 right-1/4" 
      />
      
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Crisis Resources & Support
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            If you're experiencing a crisis or need immediate support, please reach out to these resources. 
            Help is available 24/7.
          </p>
        </motion.div>
      </div>

      {/* Stats Banner - Full Width */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative py-16 mb-12 overflow-hidden w-full"
      >
        {/* Organic flowing background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/10 to-primary/5"></div>
        <div className="absolute top-10 left-1/4 w-40 h-40 bg-primary/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-56 h-56 bg-secondary/6 rounded-full blur-3xl"></div>
        
        <div className="flex animate-scroll">
          {[...stats, ...stats, ...stats].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % stats.length) * 0.1 }}
              className="flex-shrink-0 mx-8 relative group"
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card/30 to-card/60 backdrop-blur-sm p-8 w-96 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border border-primary/10">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {stat.title}
                    </h3>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {stat.highlight}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed font-light text-sm">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl border border-border/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <resource.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">
                    {resource.title}
                  </h3>
                  <div className="text-primary font-bold text-lg mb-2">
                    {resource.number}
                  </div>
                  <p className="text-muted-foreground text-sm mb-2">
                    {resource.description}
                  </p>
                  <p className="text-xs text-accent font-medium">
                    {resource.availability}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20 text-center"
        >
          <p className="text-muted-foreground mb-4">
            <strong>Important:</strong> Beyond Balance provides wellness support and is not a substitute for 
            professional mental health care or crisis intervention. If you're experiencing a mental health 
            emergency, please contact emergency services or visit your nearest emergency room.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link to="/crisis-resources" className="inline-flex items-center gap-2">
              View Comprehensive Crisis Resources
              <ExternalLink className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CrisisResources;
