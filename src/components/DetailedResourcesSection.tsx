import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Sparkles, Users, Heart, Baby, Crown, UserCheck, Rainbow, Brain } from "lucide-react";

const DetailedResourcesSection = () => {
  const resourceCategories = [
    {
      id: "self-help-resources-details",
      icon: Sparkles,
      title: "Self-Help Resources",
      description:
        "Comprehensive tools for screening, self-assessment, and personal wellness practices.",
      resources: [
        {
          name: "Mental Health America – Self‑Help Tools",
          description:
            "Screener tools for anxiety, depression, PTSD, eating disorders, substance use, and more. Quick, private, and beginner‑friendly.",
          url: "https://mhanational.org/resources/self-help-tools/",
          tags: ["Screening", "Assessment", "Multiple Conditions"],
        },
        {
          name: "TheraHive – Interactive Quizzes",
          description:
            "Fresh (June 2025), engaging quizzes that help build emotional awareness and suggest therapeutic directions (non‑diagnostic).",
          url: "https://www.therahive.com/blog/introducing-therahives-new-interactive-mental-health-quizzes-empowering-insight-through-self-assessment",
          tags: ["Interactive", "Emotional Awareness", "New"],
        },
        {
          name: "Positive Expressive Writing Guide",
          description:
            "A recent article highlighting the practice of positive expressive writing—a mood-boosting alternative focusing on gratitude and self-reflection. Even 15 minutes daily can reduce anxiety and stress.",
          url: "https://nypost.com/2025/05/21/health/free-and-easy-hack-can-help-you-be-happier-if-you-do-it-right",
          tags: ["Writing", "Gratitude", "Mood Boosting"],
        },
        {
          name: "Gratitude Journaling Benefits",
          description:
            "Personal journey of turning gratitude journaling into a daily ritual. Experts highlight improved sleep, reduced anxiety, boosted immunity, and increased long-term satisfaction.",
          url: "https://www.vogue.com/article/gratitude-journal",
          tags: ["Journaling", "Sleep", "Anxiety Relief"],
        },
      ],
    },
    {
      id: "mens-wellness-details",
      icon: Users,
      title: "Men's Wellness",
      description:
        "Resources addressing men's unique mental health challenges with real stories and practical strategies.",
      resources: [
        {
          name: "Men's Health – Mental Wellness Stories",
          description:
            "Compelling collection of personal narratives including stories like 'What I Wish I'd Known Before My Suicide Attempt' and features on high-functioning anxiety.",
          url: "https://www.menshealth.com/mental-health/",
          tags: ["Personal Stories", "High-Functioning Anxiety", "Inspiration"],
        },
        {
          name: "Calm Blog – Men's Mental Health Tips",
          description:
            "10 simple, realistic habits men can adopt—like opening up, maintaining sleep routines, setting small goals, and practicing mindfulness.",
          url: "https://blog.calm.com/blog/men-and-mental-health",
          tags: ["Practical Tips", "Mindfulness", "Sleep"],
        },
        {
          name: "Rising Trend of Journaling Among Men",
          description:
            "Article exploring how journaling (popularized by influencers and experts) is helping men embrace vulnerability and personal growth.",
          url: "https://www.businessinsider.com/journaling-journal-popular-bros-tech-podcast-huberman-wellness-2024-11",
          tags: ["Journaling", "Vulnerability", "Personal Growth"],
        },
        {
          name: "Men's Mental Health Facts & Risks",
          description:
            "Up-to-date article exploring barriers men face in seeking help—from stigma to externalized symptoms—while offering self-care strategies and treatment options.",
          url: "https://www.verywellhealth.com/mens-mental-health-11683194",
          tags: ["Barriers", "Stigma", "Treatment Options"],
        },
      ],
    },
    {
      id: "womens-wellness-details",
      icon: Heart,
      title: "Women's Wellness",
      description: "Specialized resources for women's mental health through every stage of life.",
      resources: [
        {
          name: "MGH Center for Women's Mental Health",
          description:
            "Cutting‑edge psychiatric insights—recent post (July 2025) covers potential treatment for postpartum depression and women's mental health research.",
          url: "https://womensmentalhealth.org/blog/",
          tags: ["Postpartum", "Research", "Expert Insights"],
        },
        {
          name: "Women's Mental Health Through Life Stages",
          description:
            "Practical, life‑stage‑based advice for women—covering sleep, coping skills, resilience from 20s to 70s with actionable strategies.",
          url: "https://www.tanner.org/the-scope/navigating-womens-mental-health-through-every-stage-of-life",
          tags: ["Life Stages", "Coping Skills", "Resilience"],
        },
        {
          name: "Divorce as Wellness Journey",
          description:
            "Heartfelt personal essay where the author recounts how leaving an emotionally draining marriage became her pathway to mental clarity and self-renewal.",
          url: "https://www.thedailybeast.com/divorce-is-my-wellness-secret-that-i-wont-gatekeep/",
          tags: ["Personal Story", "Life Transitions", "Self-Renewal"],
        },
        {
          name: "Top Mental Health Apps for Women",
          description:
            "Helpful roundup of apps designed specifically for women's mental health—like Shine, Moodfit, Sanvello, Calm, and Happify combining mindfulness and self-care.",
          url: "https://www.huffington-news.com/empowering-women-the-top-mental-health-apps-for-self-care/",
          tags: ["Apps", "Technology", "Self-Care"],
        },
      ],
    },
    {
      id: "children-teens-details",
      icon: Baby,
      title: "Children & Teens",
      description:
        "Age-appropriate resources for young minds navigating social media, self-care, and mental wellness.",
      resources: [
        {
          name: "Social Media & Mental Health Guide",
          description:
            "Reader-friendly exploration of how social media affects young minds—balancing social connection and learning with potential risks, plus practical family tips.",
          url: "https://www.healthychildren.org/English/family-life/Media/Pages/social-media-and-your-childs-mental-health-what-research-says.aspx",
          tags: ["Social Media", "Family Tips", "Balance"],
        },
        {
          name: "Self-Care for Young Minds",
          description:
            "Inviting guide offering easy-to-understand activities like music, drawing, warm baths, and aromatherapy to help kids and teens build emotional resilience.",
          url: "https://www.annafreud.org/resources/children-and-young-peoples-wellbeing/self-care/",
          tags: ["Activities", "Emotional Resilience", "Creative"],
        },
        {
          name: "Digital Mental Health Tools",
          description:
            "Clear, optimistic overview of digital mental health tools—like apps or therapy-extending platforms—that have shown promise in reducing anxiety and supporting teens.",
          url: "https://kids.frontiersin.org/articles/10.3389/frym.2023.1169684",
          tags: ["Digital Tools", "Anxiety Reduction", "Teen Support"],
        },
        {
          name: "Mental Health Conversations for Parents",
          description:
            "Conversational piece emphasizing how parents can ease into mental health talks—through walks, journaling, or pet therapy—to make teens feel heard and supported.",
          url: "https://www.verywellmind.com/parents-need-support-in-talking-mental-health-with-kids-survey-finds-5271092",
          tags: ["Parent Support", "Communication", "Family Bonding"],
        },
      ],
    },
    {
      id: "elder-care-details",
      icon: Crown,
      title: "Elder Care",
      description:
        "Specialized support for seniors focusing on connection, daily wellness, and mental health maintenance.",
      resources: [
        {
          name: "Combating Loneliness Through Connection",
          description:
            "Heartfelt piece explaining why loneliness in seniors is more than just sadness—it's a key driver of dementia, anxiety, and health decline—with connection-based solutions.",
          url: "https://mentalwellnesscenter.org/blog/resources/senior-mental-health/",
          tags: ["Loneliness", "Connection", "Dementia Prevention"],
        },
        {
          name: "7 Ways Seniors Can Thrive Daily",
          description:
            "Quick, encouraging checklist offering everyday actions—like gentle movement, socializing, mental challenge, and mindful breaks—that uplift mood and sharpen memory.",
          url: "https://timesofindia.indiatimes.com/life-style/senior-living/wellness-and-lifestyle/mental-wellness/7-simple-ways-seniors-can-boost-mental-wellness-every-day/articleshow/121408931.cms",
          tags: ["Daily Actions", "Memory", "Mood Enhancement"],
        },
        {
          name: "Prioritizing Senior Mental Health",
          description:
            "Helpful guide focusing on senior-specific strategies—seeking treatment, limiting distressing media, and making mental health as routine as physical check-ups.",
          url: "https://www.ncoa.org/article/7-ways-older-adults-can-manage-their-mental-health/",
          tags: ["Treatment", "Routine Care", "Media Management"],
        },
        {
          name: "Friendship Bench Initiative",
          description:
            "Heartwarming community mental health initiative where elder volunteers offer problem-solving therapy on park benches, fostering connection and reducing stigma.",
          url: "https://en.wikipedia.org/wiki/Friendship_bench",
          tags: ["Community Support", "Volunteer", "Zimbabwe Model"],
        },
      ],
    },
    {
      id: "parents-caregivers-details",
      icon: UserCheck,
      title: "Parents & Caregivers",
      description:
        "Support for those caring for others while managing burnout and personal wellness.",
      resources: [
        {
          name: "AI Tools for Parenting Support",
          description:
            "Candid account of how parents are turning to tools like ChatGPT for bedtime routines and mental wellness guidance, while balancing tech assistance with human intuition.",
          url: "https://www.parents.com/parents-using-ai-11750945",
          tags: ["AI Support", "Technology", "Parenting Tools"],
        },
        {
          name: "Understanding Parental Burnout",
          description:
            "Compassionate breakdown of how parents are emotionally stretched—highlighting burnout toll and offering support through brief journaling, mindfulness, and peer connection.",
          url: "https://www.self.com/story/parental-burnout",
          tags: ["Burnout", "Emotional Health", "Support Strategies"],
        },
        {
          name: "Mental Health Resources for Parents",
          description:
            "Neatly organized collection addressing youth mental health, childhood bullying, parental mental health, postpartum wellness, and school stress guidance.",
          url: "https://mhanational.org/resources/mental-health-resources-for-parents/",
          tags: ["Youth Mental Health", "Bullying", "Postpartum"],
        },
        {
          name: "10 Self-Care Ways for Parents",
          description:
            "Quick, practical tips like deep breathing, guilt-free alone time, hobbies, movement, asking for help, and staying socially connected from Cleveland Clinic.",
          url: "https://health.clevelandclinic.org/realistic-ways-to-practice-self-care-as-a-parent",
          tags: ["Self-Care", "Practical Tips", "Cleveland Clinic"],
        },
      ],
    },
    {
      id: "lgbtq-support-details",
      icon: Rainbow,
      title: "LGBTQ+ Support",
      description:
        "Inclusive, affirming resources and communities for LGBTQ+ individuals and families.",
      resources: [
        {
          name: "Q Chat Space & Digital Tools",
          description:
            "Q Chat Space: Moderated support groups for LGBTQ+ teens (13–19). Rainbow SPARX: Therapeutic mental health game adapted for sexual and gender minority youth.",
          url: "https://idontmind.com/journal/18-resources-for-lgbtq-mental-health",
          tags: ["Teen Support", "Gaming Therapy", "Moderated Groups"],
        },
        {
          name: "LGBTQIA+ Mental Health Guide",
          description:
            "Thorough guide combining empathy with expert-backed resources for queer individuals. Explores challenges like identity conflict, minority stress, and family rejection.",
          url: "https://www.mainlinehealth.org/blog/lgbtq-community-mental-health",
          tags: ["Identity Support", "Minority Stress", "Family Relations"],
        },
        {
          name: "Rainbow Voices Community Center",
          description:
            "Chennai-based nonprofit offering queer-affirmative counseling, peer support groups, legal aid, and educational outreach—creating safe, empowering spaces.",
          url: "https://en.wikipedia.org/wiki/Rainbow_Voices_Community_Center",
          tags: ["India", "Legal Aid", "Community Center"],
        },
      ],
    },
    {
      id: "mental-health-relief-details",
      icon: Brain,
      title: "Mental Health Relief",
      description: "Immediate crisis support and community-based mental health initiatives.",
      resources: [
        {
          name: "Atmiyata Community Support",
          description:
            "Local volunteers ('Champions' and 'Mitras') trained to recognize emotional distress in rural Indian communities, delivering counseling and referrals with dramatic symptom improvement.",
          url: "https://cmhlp.org/projects/atmiyata/",
          tags: ["Rural India", "Community Volunteers", "Counseling"],
        },
        {
          name: "Tele‑MANAS Helpline",
          description:
            "24/7 free helpline launched across Karnataka providing anonymous mental health support. Over 65,000 calls addressed everything from educational stress to suicidal ideation.",
          url: "https://timesofindia.indiatimes.com/city/hubballi/tele-manas-receives-over-65k-calls-in-three-years/articleshow/123048389.cms",
          tags: ["24/7 Helpline", "Karnataka", "Crisis Support"],
        },
        {
          name: "MHFA India Programs",
          description:
            "Managed by Tata Institute of Social Sciences, iCALL offers free, anonymous and confidential mental health counseling via phone and email—available nationally.",
          url: "https://www.mhfaindia.com/mental-health-programs-india-expanding-support",
          tags: ["National Program", "TISS", "Phone Counseling"],
        },
      ],
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-7xl mx-auto">
        {/*<motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
            COMPLETE
            <span className="block font-bold text-primary italic">
              RESOURCE DIRECTORY
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive collection of mental health resources, carefully curated for different communities and needs.
          </p>
        </motion.div>*/}

        <div className="space-y-16">
          {resourceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              id={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-secondary/20 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {category.resources.map((resource, resourceIndex) => (
                  <motion.div
                    key={resource.name}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: resourceIndex * 0.1 }}
                  >
                    <Card className="h-full group hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40 bg-gradient-to-br from-card/50 to-background/50">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between gap-3">
                          <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 flex-1">
                            {resource.name}
                          </CardTitle>
                          <div className="flex-shrink-0">
                            <a
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors p-2 rounded-full hover:bg-primary/10"
                              title="Open resource"
                            >
                              <ArrowUpRight className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {resource.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {resource.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium group/link"
                        >
                          Visit Resource
                          <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedResourcesSection;
