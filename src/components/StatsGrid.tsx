
import { motion } from "framer-motion";
import { CircularGradient } from "./CircularGradients";
import AnimatedCounter from "./AnimatedCounter";

const StatsGrid = () => {
  const gridStats = [
    {
      title: "Global Mental Health Crisis",
      description: "The global cost of untreated mental health conditions will reach $6 trillion by 2030. That's more than the combined GDP of India and the UK.",
      metric: "$6T",
      label: "by 2030",
      bgColor: "bubblegum-card"
    },
    {
      title: "Depression Leading Cause",
      description: "Depression is the leading cause of disability worldwide. That's more than cancer, war, or traffic accidents.",
      metric: "#1",
      label: "disability cause",
      bgColor: "bubblegum-card-blue"
    },
    {
      title: "Youth Suicide Crisis",
      description: "Globally, suicide ranks among the top causes of death for young people. Mental health support is crucial for our youth.",
      metric: "Top 4",
      label: "youth deaths",
      bgColor: "bubblegum-card-purple"
    },
    {
      title: "Children in Conflict Zones",
      description: "In conflict zones, nearly 7 in 10 children show signs of PTSD requiring immediate mental health intervention.",
      metric: "70%",
      label: "children affected",
      bgColor: "bubblegum-card"
    },
    {
      title: "Healthcare Access Gap",
      description: "India has fewer than 1 psychiatrist for every 100,000 people. WHO recommends 3 per 100,000 for adequate care.",
      metric: "1:100k",
      label: "psychiatrist ratio",
      bgColor: "bubblegum-card-blue"
    },
    {
      title: "Child Trauma Impact",
      description: "Globally, child neglect and trauma are linked to over 800,000 premature deaths yearly according to UNICEF studies.",
      metric: "800k+",
      label: "deaths yearly",
      bgColor: "bubblegum-card-purple"
    }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Bubblegum flowing background */}
      <div className="absolute inset-0 bubblegum-bg-alt"></div>
      
      {/* Circular gradients for pop of color */}
      <CircularGradient 
        size="350px" 
        opacity={0.03}
        duration={25} 
        className="top-10 right-10" 
      />
      <CircularGradient 
        size="280px" 
        opacity={0.04}
        duration={18} 
        delay={5} 
        className="bottom-20 left-10" 
      />
      <CircularGradient 
        size="200px" 
        opacity={0.05}
        duration={20} 
        delay={10} 
        className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
      />
      <CircularGradient 
        size="320px" 
        opacity={0.03}
        duration={22} 
        delay={15} 
        className="top-1/3 right-1/4" 
      />
      
      <div className="absolute top-20 right-20 w-80 h-80 bg-bubblegum-pink/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 left-16 w-96 h-96 bg-bubblegum-blue/15 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-bubblegum-purple/25 rounded-full blur-2xl opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 space-y-8"
        >
          <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight">
            Mental Health by the
            <span className="block text-primary font-normal italic transform rotate-1 mt-2">
              Numbers
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full mx-auto opacity-60"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Understanding the global mental health crisis through data and statistics
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {gridStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer relative"
            >
              <div className={`relative overflow-hidden rounded-3xl ${stat.bgColor} backdrop-blur-sm p-8 h-80 flex flex-col transition-all duration-500 hover:shadow-2xl border border-primary/10`}>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-center w-full">
                    <AnimatedCounter 
                      metric={stat.metric} 
                      duration={2.5}
                      showFullNumber={stat.metric === "$6T"}
                    />
                    <div className="text-xs text-muted-foreground font-light mt-2">
                      {stat.label}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-4">
                  {stat.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed font-light text-sm flex-1">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsGrid;
