
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PersonalityQuiz from "@/components/PersonalityQuiz";
import UserInfoForm from "@/components/UserInfoForm";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Sparkles, Users, Heart, Baby } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GetStarted = () => {
  const navigate = useNavigate();

  const tailoredResources = [
    {
      icon: Sparkles,
      title: "Self-Help Resources",
      description: "Quick tools for screening, self-assessment, and wellness practices.",
      resources: [
        {
          name: "Mental Health America – Self‑Help Tools",
          description: "Screener tools for anxiety, depression, PTSD, and more. Private and beginner‑friendly.",
          url: "https://mhanational.org/resources/self-help-tools/",
          tags: ["Screening", "Assessment"]
        },
        {
          name: "Gratitude Journaling Benefits",
          description: "Experts highlight improved sleep, reduced anxiety, and increased satisfaction.",
          url: "https://www.vogue.com/article/gratitude-journal",
          tags: ["Journaling", "Sleep"]
        }
      ]
    },
    {
      icon: Users,
      title: "Men's Wellness",
      description: "Resources addressing men's unique mental health challenges.",
      resources: [
        {
          name: "Men's Health – Mental Wellness Stories",
          description: "Personal narratives and insights on high-functioning anxiety.",
          url: "https://www.menshealth.com/mental-health/",
          tags: ["Personal Stories", "Anxiety"]
        },
        {
          name: "Calm Blog – Men's Mental Health Tips",
          description: "10 simple, realistic habits men can adopt for emotional well-being.",
          url: "https://blog.calm.com/blog/men-and-mental-health",
          tags: ["Practical Tips", "Mindfulness"]
        }
      ]
    },
    {
      icon: Heart,
      title: "Women's Wellness",
      description: "Specialized resources for women's mental health through life stages.",
      resources: [
        {
          name: "MGH Center for Women's Mental Health",
          description: "Psychiatric insights including postpartum depression treatments.",
          url: "https://womensmentalhealth.org/blog/",
          tags: ["Postpartum", "Life Stages"]
        },
        {
          name: "Top Mental Health Apps for Women",
          description: "Apps like Shine, Moodfit, Sanvello combining mindfulness and self-care.",
          url: "https://www.huffington-news.com/empowering-women-the-top-mental-health-apps-for-self-care/",
          tags: ["Apps", "Self-Care"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PersonalityQuiz />
      <UserInfoForm />
      
      {/* Tailored Resources Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-background via-card/20 to-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-light text-foreground">
              TAILORED
              <span className="block font-bold text-primary italic transform -rotate-1">
                RESOURCES
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Discover curated mental health resources designed for your unique journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {tailoredResources.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <Card className="h-full backdrop-blur-sm bg-card/60 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 w-fit">
                      <category.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground mb-2">
                      {category.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.resources.map((resource, resourceIndex) => (
                      <div
                        key={resourceIndex}
                        className="p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors duration-200 group"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium text-foreground text-sm leading-snug pr-2">
                            {resource.name}
                          </h4>
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 transition-colors flex-shrink-0"
                            aria-label={`Visit ${resource.name}`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                        <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                          {resource.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {resource.tags.map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              variant="secondary"
                              className="text-xs px-2 py-0.5 bg-primary/10 text-primary hover:bg-primary/20"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* See More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Button
              onClick={() => navigate("/resources")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-light px-8 py-3 rounded-full group"
            >
              See All Resources
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetStarted;
