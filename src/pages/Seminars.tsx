
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Calendar, MapPin} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Seminars = () => {
  const upcomingSeminars = [
    {
      title: "Mental Wellness in Modern Life",
      date: "March 18, 2024",
      location: "Downtown Conference Center",
      description: "Explore strategies for maintaining mental wellness in our fast-paced, digitally connected world.",
      details: "This 2-hour seminar covers digital wellness, work-life balance, and building sustainable mental health practices in modern society.",
      space: "Limited to 50 participants",
      fee: "₹899"
    },
    {
      title: "The Art of Self-Compassion",
      date: "March 25, 2024",
      location: "Online",
      description: "Learn to treat yourself with the same kindness you'd show a good friend through evidence-based self-compassion practices.",
      details: "An interactive seminar featuring guided exercises, group discussions, and practical tools for developing self-compassion in daily life.",
      space: "Limited to 40 participants",
      fee: "₹699"
    },
    {
      title: "Navigating Life Transitions",
      date: "April 8, 2024",
      location: "Community Wellness Center",
      description: "Develop resilience and adaptability skills to thrive during major life changes and transitions.",
      details: "This seminar provides frameworks for understanding change, managing uncertainty, and finding opportunities in transitions.",
      space: "Limited to 35 participants",
      fee: "₹999"
    },
    {
      title: "Building Authentic Connections",
      date: "April 15, 2024",
      location: "Online",
      description: "Discover how to create deeper, more meaningful relationships through authentic communication and vulnerability.",
      details: "Interactive seminar focusing on communication skills, emotional intelligence, and creating safe spaces for connection.",
      space: "Limited to 30 participants",
      fee: "₹799"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
            <BookOpen className="w-10 h-10 md:w-12 md:h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            <span className="font-bold text-primary">Seminars</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Our seminars are designed to be powerful, insightful, and refreshingly real. They are carefully curated spaces 
            where important conversations happen around mental wellness, personal growth, and self-awareness. Unlike traditional 
            talks, our seminars are interactive, engaging, and rooted in authenticity. We blend expert knowledge with real-life 
            relatability, making each session not just informative but genuinely inspiring. Whether you're attending to learn, 
            reflect, or connect, our seminars leave you feeling energized, empowered, and seen.
          </p>
        </motion.div>
      </section>

      {/* Upcoming Seminars */}
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
              Upcoming <span className="font-bold text-primary italic">Seminars</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto rounded-full" />
          </motion.div>

          <div className="space-y-6">
            {upcomingSeminars.map((seminar, index) => (
              <motion.div
                key={seminar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-border/30 hover:border-primary/40 transition-all duration-300">
                  <Accordion type="single" collapsible>
                    <AccordionItem value={`seminar-${index}`} className="border-none">
                      <AccordionTrigger className="hover:no-underline p-4 md:p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between w-full text-left">
                          <div className="mb-4 md:mb-0">
                            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 break-words">{seminar.title}</h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-muted-foreground text-sm md:text-base">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 flex-shrink-0" />
                                <span>{seminar.date}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 flex-shrink-0" />
                                <span>{seminar.location}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                
                                <span className="font-semibold">{seminar.fee}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="px-4 md:px-6 pb-4 space-y-6">
                          <p className="text-muted-foreground leading-relaxed">{seminar.description}</p>
                          <div className="grid lg:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">Seminar Details</h4>
                              <p className="text-muted-foreground mb-4">{seminar.details}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">Space & Availability</h4>
                              <p className="text-muted-foreground mb-4">{seminar.space}</p>
                              <Button className="w-full md:w-auto bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground rounded-full">
                                Pay Now - {seminar.fee}
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

export default Seminars;
