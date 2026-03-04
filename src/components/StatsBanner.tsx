
import { motion } from "framer-motion";

const StatsBanner = () => {
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative py-24 overflow-hidden"
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
              {/* Floating decorative elements */}
              {/* <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary/20 rounded-full blur-sm group-hover:scale-150 transition-transform duration-500"></div> */}
              {/* <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-secondary/20 rounded-full blur-sm"></div> */}
              
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
  );
};

export default StatsBanner;
