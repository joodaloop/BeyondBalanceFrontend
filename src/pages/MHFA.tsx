
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, CheckCircle, Users, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";

const MHFA = () => {
  const courseFeatures = [
    {
      icon: Award,
      title: "Recognition Skills",
      description: "Learn to identify signs and symptoms of mental health challenges"
    },
    {
      icon: Shield,
      title: "Crisis Response",
      description: "Understand how to respond appropriately to mental health crises"
    },
    {
      icon: Users,
      title: "Support Strategies",
      description: "Develop skills to provide initial support and connect people to resources"
    },
    {
      icon: CheckCircle,
      title: "Evidence-Based",
      description: "Information based on current research and best practices in mental health"
    }
  ];

  const whatYouLearn = [
    "Signs and symptoms of mental health challenges",
    "How to approach someone who may be struggling",
    "Effective listening and communication techniques",
    "Crisis intervention strategies",
    "How to connect people with professional help",
    "Self-care and maintaining boundaries",
    "Cultural considerations in mental health",
    "Legal and ethical considerations"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Shield className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6">
            <span className="font-bold text-primary">MHFA</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-light text-muted-foreground mb-8">
            Mental Health First Aid
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Learn about Mental Health First Aid and access valuable resources to recognize and respond to mental health challenges. 
            Understanding mental health first aid can help you provide initial support to someone experiencing a mental health 
            crisis until professional help arrives or the crisis resolves.
          </p>
        </motion.div>
      </section>

      {/* Course Features */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              MHFA <span className="font-bold text-primary italic">Resources</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courseFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full text-center border-border/30 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* What You Should Know */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full border-border/30">
                <CardHeader>
                  <CardTitle className="text-2xl font-light flex items-center gap-3">
                    <CheckCircle className="w-8 h-8 text-primary" />
                    Key MHFA Principles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {whatYouLearn.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Resources and Guidelines */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <Card className="border-border/30">
                <CardHeader>
                  <CardTitle className="text-2xl font-light flex items-center gap-3">
                    <Shield className="w-8 h-8 text-secondary" />
                    Crisis Response Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="font-semibold mb-2 text-primary">ALGEE Approach</div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• <strong>A</strong>ssess for risk of suicide or harm</li>
                      <li>• <strong>L</strong>isten non-judgmentally</li>
                      <li>• <strong>G</strong>ive reassurance and information</li>
                      <li>• <strong>E</strong>ncourage appropriate professional help</li>
                      <li>• <strong>E</strong>ncourage self-help and other support</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="font-semibold mb-2 text-primary">Warning Signs</div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Changes in eating or sleeping patterns</li>
                      <li>• Withdrawal from friends and activities</li>
                      <li>• Declining academic or work performance</li>
                      <li>• Increased substance use</li>
                      <li>• Expressing hopelessness or worthlessness</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/30">
                <CardHeader>
                  <CardTitle className="text-2xl font-light">Additional Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="font-semibold mb-2 text-primary">Need Crisis Support?</div>
                    <p className="text-sm text-muted-foreground mb-3">
                      If you or someone you know is in crisis, immediate help is available through various crisis resources and helplines.
                    </p>
                    <Link to="/crisis-resources">
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                        View Crisis Resources
                      </Button>
                    </Link>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="font-semibold mb-2 text-primary">More Mental Health Resources</div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Explore comprehensive mental health resources, guides, and support materials tailored to your needs.
                    </p>
                    <Link to="/resources">
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                        Explore All Resources
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

             
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MHFA;
