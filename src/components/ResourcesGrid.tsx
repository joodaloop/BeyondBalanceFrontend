
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Users, 
  Baby, 
  Crown, 
  UserCheck, 
  Rainbow, 
  Brain,
  Sparkles
} from "lucide-react";

const ResourcesGrid = () => {
  const resources = [
    {
      icon: Sparkles,
      title: "Self-Help Resources",
      description: "Comprehensive tools for screening, self-assessment, and personal wellness practices.",
      color: "primary",
      resources: [
        {
          name: "Mental Health America – Self‑Help Tools",
          description: "Screener tools for anxiety, depression, PTSD, eating disorders, substance use, and more",
          url: "https://mhanational.org/resources/self-help-tools/"
        },
        {
          name: "TheraHive – Interactive Quizzes",
          description: "Engaging quizzes that help build emotional awareness and suggest therapeutic directions",
          url: "https://www.therahive.com/blog/introducing-therahives-new-interactive-mental-health-quizzes-empowering-insight-through-self-assessment"
        },
        {
          name: "Positive Expressive Writing Guide",
          description: "A mood-boosting alternative focusing on gratitude and self-reflection",
          url: "https://nypost.com/2025/05/21/health/free-and-easy-hack-can-help-you-be-happier-if-you-do-it-right"
        },
        {
          name: "Gratitude Journaling Benefits",
          description: "Personal journey and expert insights on daily gratitude practice",
          url: "https://www.vogue.com/article/gratitude-journal"
        }
      ]
    },
    {
      icon: Users,
      title: "Men's Wellness",
      description: "Resources addressing men's unique mental health challenges with real stories and practical strategies.",
      color: "secondary",
      resources: [
        {
          name: "Men's Health – Mental Wellness Stories",
          description: "Personal narratives and practical insights on high-functioning anxiety and mental blocks",
          url: "https://www.menshealth.com/mental-health/"
        },
        {
          name: "Calm Blog – Men's Mental Health Tips",
          description: "10 simple, realistic habits men can adopt for emotional well-being",
          url: "https://blog.calm.com/blog/men-and-mental-health"
        },
        {
          name: "Journaling Trend Among Men",
          description: "How journaling is helping men embrace vulnerability and personal growth",
          url: "https://www.businessinsider.com/journaling-journal-popular-bros-tech-podcast-huberman-wellness-2024-11"
        },
        {
          name: "Men's Mental Health Facts & Risks",
          description: "Barriers men face in seeking help and self-care strategies for treatment",
          url: "https://www.verywellhealth.com/mens-mental-health-11683194"
        }
      ]
    },
    {
      icon: Heart,
      title: "Women's Wellness",
      description: "Specialized resources for women's mental health through every stage of life.",
      color: "accent",
      resources: [
        {
          name: "MGH Center for Women's Mental Health",
          description: "Cutting‑edge psychiatric insights including postpartum depression treatments",
          url: "https://womensmentalhealth.org/blog/"
        },
        {
          name: "Women's Mental Health Through Life Stages",
          description: "Practical, life‑stage‑based advice covering sleep, coping skills, and resilience",
          url: "https://www.tanner.org/the-scope/navigating-womens-mental-health-through-every-stage-of-life"
        },
        {
          name: "Divorce as Wellness Journey",
          description: "Personal essay on choosing peace and authenticity over societal expectations",
          url: "https://www.thedailybeast.com/divorce-is-my-wellness-secret-that-i-wont-gatekeep/"
        },
        {
          name: "Top Mental Health Apps for Women",
          description: "Roundup of apps like Shine, Moodfit, Sanvello combining mindfulness and self-care",
          url: "https://www.huffington-news.com/empowering-women-the-top-mental-health-apps-for-self-care/"
        }
      ]
    },
    {
      icon: Baby,
      title: "Children & Teens",
      description: "Age-appropriate resources for young minds navigating social media, self-care, and mental wellness.",
      color: "sage",
      resources: [
        {
          name: "Social Media & Mental Health Guide",
          description: "Balancing social connection with healthy habits for families",
          url: "https://www.healthychildren.org/English/family-life/Media/Pages/social-media-and-your-childs-mental-health-what-research-says.aspx"
        },
        {
          name: "Self-Care for Young Minds",
          description: "Easy activities like music, drawing, and aromatherapy for emotional resilience",
          url: "https://www.annafreud.org/resources/children-and-young-peoples-wellbeing/self-care/"
        },
        {
          name: "Digital Mental Health Tools",
          description: "Apps and platforms designed to reduce anxiety and support teens",
          url: "https://kids.frontiersin.org/articles/10.3389/frym.2023.1169684"
        },
        {
          name: "Mental Health Conversations for Parents",
          description: "How parents can ease into mental health talks with teens",
          url: "https://www.verywellmind.com/parents-need-support-in-talking-mental-health-with-kids-survey-finds-5271092"
        }
      ]
    },
    {
      icon: Crown,
      title: "Elder Care",
      description: "Specialized support for seniors focusing on connection, daily wellness, and mental health maintenance.",
      color: "mint",
      resources: [
        {
          name: "Combating Senior Loneliness",
          description: "Understanding loneliness as a driver of dementia and health decline",
          url: "https://mentalwellnesscenter.org/blog/resources/senior-mental-health/"
        },
        {
          name: "7 Ways Seniors Can Thrive Daily",
          description: "Everyday actions for mood, memory, and well-being enhancement",
          url: "https://timesofindia.indiatimes.com/life-style/senior-living/wellness-and-lifestyle/mental-wellness/7-simple-ways-seniors-can-boost-mental-wellness-every-day/articleshow/121408931.cms"
        },
        {
          name: "Senior Mental Health Prioritization",
          description: "Making mental health as routine as physical check-ups for vibrant later life",
          url: "https://www.ncoa.org/article/7-ways-older-adults-can-manage-their-mental-health/"
        },
        {
          name: "Friendship Bench Initiative",
          description: "Community talk therapy with elder volunteers offering compassionate support",
          url: "https://en.wikipedia.org/wiki/Friendship_bench"
        }
      ]
    },
    {
      icon: UserCheck,
      title: "Parents & Caregivers",
      description: "Support for those caring for others while managing burnout and personal wellness.",
      color: "teal",
      resources: [
        {
          name: "AI Tools for Parenting Support",
          description: "How parents use ChatGPT for bedtime routines and mental wellness guidance",
          url: "https://www.parents.com/parents-using-ai-11750945"
        },
        {
          name: "Addressing Parental Burnout",
          description: "Understanding emotional stretch and meaningful support strategies",
          url: "https://www.self.com/story/parental-burnout"
        },
        {
          name: "Mental Health Resources for Parents",
          description: "Comprehensive guide through youth mental health and family stages",
          url: "https://mhanational.org/resources/mental-health-resources-for-parents/"
        },
        {
          name: "10 Self-Care Ways for Parents",
          description: "Quick, practical tips from Cleveland Clinic for reducing burnout",
          url: "https://health.clevelandclinic.org/realistic-ways-to-practice-self-care-as-a-parent"
        }
      ]
    },
    {
      icon: Rainbow,
      title: "LGBTQ+ Support",
      description: "Inclusive, affirming resources and communities for LGBTQ+ individuals and families.",
      color: "soft-green",
      resources: [
        {
          name: "Q Chat Space & Digital Tools",
          description: "Moderated support groups and Rainbow SPARX therapeutic game for LGBTQ+ teens",
          url: "https://idontmind.com/journal/18-resources-for-lgbtq-mental-health"
        },
        {
          name: "LGBTQIA+ Mental Health Guide",
          description: "Comprehensive resource addressing identity conflict, minority stress, and family support",
          url: "https://www.mainlinehealth.org/blog/lgbtq-community-mental-health"
        },
        {
          name: "Rainbow Voices Community Center",
          description: "Chennai-based nonprofit offering queer-affirmative counseling and legal aid",
          url: "https://en.wikipedia.org/wiki/Rainbow_Voices_Community_Center"
        }
      ]
    },
    {
      icon: Brain,
      title: "Mental Health Relief",
      description: "Immediate crisis support and community-based mental health initiatives from India and beyond.",
      color: "primary",
      resources: [
        {
          name: "Atmiyata Community Support",
          description: "Local volunteers providing counseling and referrals in rural Indian communities",
          url: "https://cmhlp.org/projects/atmiyata/"
        },
        {
          name: "Tele‑MANAS Helpline",
          description: "24/7 free mental health support addressing over 65,000 calls across Karnataka",
          url: "https://timesofindia.indiatimes.com/city/hubballi/tele-manas-receives-over-65k-calls-in-three-years/articleshow/123048389.cms"
        },
        {
          name: "MHFA India Programs",
          description: "Free, anonymous counseling via phone and email for immediate interventions",
          url: "https://www.mhfaindia.com/mental-health-programs-india-expanding-support"
        }
      ]
    }
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Artistic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/20 to-background"></div>
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-32 right-20 w-48 h-48 rounded-full bg-gradient-to-br from-primary/8 to-secondary/8 blur-2xl"
      />
      <motion.div
        animate={{ 
          rotate: -360,
          scale: [1, 0.9, 1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-40 left-16 w-64 h-64 rounded-full bg-gradient-to-br from-accent/6 to-primary/6 blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-light text-foreground">
            TAILORED 
            <span className="block font-bold text-primary italic transform -rotate-1">
              RESOURCES
            </span>
            <span className="block font-light text-secondary transform rotate-1">
              FOR EVERYONE
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Discover curated resources designed for your unique needs, circumstances, and journey toward wellness
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full backdrop-blur-sm bg-gradient-to-br from-primary/10 via-card/60 to-primary/5 border-primary/30 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:shadow-primary/20">
                <CardHeader className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                    <resource.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground text-sm">Featured Resources:</h4>
                    <div className="space-y-2">
                      {resource.resources.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="group/item">
                          <a 
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-2 rounded-lg hover:bg-primary/10 transition-colors duration-200"
                          >
                            <div className="text-xs font-medium text-primary group-hover/item:text-primary/80 mb-1">
                              {item.name}
                            </div>
                            <div className="text-xs text-muted-foreground line-clamp-2">
                              {item.description}
                            </div>
                          </a>
                        </div>
                      ))}
                      {resource.resources.length > 2 && (
                        <div className="text-xs text-primary font-medium pt-1">
                          +{resource.resources.length - 2} more resources
                        </div>
                      )}
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-primary/40 text-primary hover:bg-primary hover:text-white transition-all duration-300 bg-primary/5 hover:shadow-md"
                    onClick={() => {
                      // Scroll to detailed view or expand resources
                      const element = document.getElementById(`${resource.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}-details`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    View All Resources
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesGrid;
