
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { ComingSoonService } from "@/data/servicesData";

interface ComingSoonCardProps {
  service: ComingSoonService;
  index: number;
}

const ComingSoonCard = ({ service, index }: ComingSoonCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ y: -5, scale: 1.01 }}
      className="group h-full"
    >
      <Card className="h-full bg-gradient-to-br from-card/60 via-card/40 to-card/20 backdrop-blur-lg border-border/20 relative overflow-hidden rounded-3xl">
        {/* Coming soon badge */}
        <div className="absolute top-6 right-6 flex items-center gap-2 text-secondary bg-secondary/10 px-4 py-2 rounded-full backdrop-blur-sm">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-light">Coming Soon</span>
        </div>
        
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent" />
        
        <CardHeader className="text-center pb-6 pt-16 relative z-10">
          <motion.div 
            className="mx-auto w-20 h-20 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center mb-6"
            whileHover={{ rotate: -5 }}
          >
            <service.icon className="w-10 h-10 text-secondary" />
          </motion.div>
          <CardTitle className="text-2xl font-light text-foreground">
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
                className="text-sm text-muted-foreground flex items-center font-light opacity-75"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 0.75, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="w-2 h-2 bg-gradient-to-r from-secondary/60 to-secondary/40 rounded-full mr-3 flex-shrink-0" />
                {feature}
              </motion.li>
            ))}
          </ul>
          
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ComingSoonCard;
