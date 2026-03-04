
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Service } from "@/data/servicesData";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const getServiceSlug = (title: string) => {
    // Special case for Handbooks & Guides
    if (title === "Handbooks & Guides") {
      return "handbooks";
    }
    return title.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[()&]/g, '')
      .replace(/--+/g, '-')
      .replace(/^-|-$/g, '');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group h-full"
    >
      <Card className="h-full bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-lg border-border/30 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 rounded-3xl overflow-hidden relative">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <CardHeader className="text-center pb-6 relative z-10">
          <motion.div 
            className="mx-auto w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            whileHover={{ rotate: 5 }}
          >
            <service.icon className="w-10 h-10 text-primary" />
          </motion.div>
          <CardTitle className="text-2xl font-light text-foreground group-hover:text-primary transition-colors duration-300">
            {service.title}
          </CardTitle>
          <CardDescription className="text-muted-foreground font-light leading-relaxed">
            {service.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 relative z-10">
          <ul className="space-y-3">
            {service.features.map((feature, idx) => (
              <motion.li 
                key={idx} 
                className="text-sm text-muted-foreground flex items-center font-light"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mr-3 flex-shrink-0" />
                {feature}
              </motion.li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 pt-6">
            <Link to={`/services/${getServiceSlug(service.title)}`}>
              <Button className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground rounded-full font-light tracking-wide shadow-lg hover:shadow-xl transition-all duration-300">
                Learn More
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
