
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Monitor, Calendar, Globe} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Webinars = () => {
  const upcomingWebinars = [
    {
      title: "Digital Detox: Reclaiming Your Time",
      date: "March 20, 2024",
      time: "7:00 PM IST",
      description: "Learn practical strategies to reduce screen time and create healthy boundaries with technology.",
      details: "This 90-minute interactive webinar includes live Q&A, breakout discussions, and a downloadable action plan.",
      participants: "Unlimited",
      fee: "₹499"
    },
    {
      title: "Mindful Parenting in the Digital Age",
      date: "March 27, 2024",
      time: "8:00 PM IST",
      description: "Navigate the challenges of raising children in our connected world while maintaining family wellness.",
      details: "Interactive session with expert guidance, parent discussions, and practical tools for digital family wellness.",
      participants: "Unlimited",
      fee: "₹599"
    },
    {
      title: "Building Emotional Intelligence",
      date: "April 3, 2024",
      time: "7:30 PM IST",
      description: "Develop your EQ skills to improve relationships, communication, and personal effectiveness.",
      details: "Comprehensive webinar with assessments, interactive exercises, and personalized development tips.",
      participants: "Unlimited",
      fee: "₹699"
    },
    {
      title: "Stress Management for Professionals",
      date: "April 10, 2024",
      time: "6:00 PM IST",
      description: "Evidence-based techniques for managing workplace stress and preventing burnout.",
      details: "Practical webinar designed for busy professionals with immediate applicable strategies and tools.",
      participants: "Unlimited",
      fee: "₹559"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-primary/5"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
            <Monitor className="w-10 h-10 md:w-12 md:h-12 text-secondary" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            <span className="font-bold text-secondary">Webinars</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Our webinars are thoughtfully designed to bring impactful learning straight to your screen no matter where you are. 
            They're interactive, engaging, and packed with value, offering a perfect blend of expert insights, real-life relevance, 
            and practical takeaways. Each session feels like a meaningful conversation dynamic, relatable, and empowering. Whether 
            you're tuning in for personal growth, mental wellness, or self-discovery, our webinars are crafted to leave you feeling 
            inspired, understood, and ready to take action.
          </p>
        </motion.div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
              Upcoming <span className="font-bold text-secondary italic">Webinars</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary/50 via-secondary to-secondary/50 mx-auto rounded-full" />
          </motion.div>

          <div className="space-y-6">
            {upcomingWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-border/30 hover:border-secondary/40 transition-all duration-300">
                  <Accordion type="single" collapsible>
                    <AccordionItem value={`webinar-${index}`} className="border-none">
                      <AccordionTrigger className="hover:no-underline p-4 md:p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between w-full text-left">
                          <div className="mb-4 md:mb-0">
                            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 break-words">{webinar.title}</h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-muted-foreground text-sm md:text-base">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 flex-shrink-0" />
                                <span>{webinar.date}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Globe className="w-4 h-4 flex-shrink-0" />
                                <span>{webinar.time}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                
                                <span className="font-semibold">{webinar.fee}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="px-4 md:px-6 pb-4 space-y-6">
                          <p className="text-muted-foreground leading-relaxed">{webinar.description}</p>
                          <div className="grid lg:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">Webinar Details</h4>
                              <p className="text-muted-foreground mb-4">{webinar.details}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">Access & Availability</h4>
                              <p className="text-muted-foreground mb-4">Participants: {webinar.participants}</p>
                              <Button className="w-full md:w-auto bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-secondary-foreground rounded-full">
                                Pay Now - {webinar.fee}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Webinars;
