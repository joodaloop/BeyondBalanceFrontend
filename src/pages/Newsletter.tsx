import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Mail, Calendar, Users, Sparkles, CheckCircle, ArrowRight } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      alert("Please enter your email address.");
      return;
    }
    
    setSubscribeStatus('loading');
    
    try {
      const response = await fetch('https://web-production-6d157.up.railway.app/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });
      
      const data = await response.json();
      
      if (response.ok && data.status === 'success') {
        setSubscribeStatus('success');
        setTimeout(() => {
          setEmail("");
          setSubscribeStatus('idle');
        }, 3000);
      } else {
        console.error("Subscription failed:", data);
        setSubscribeStatus('error');
        setTimeout(() => {
          setSubscribeStatus('idle');
        }, 3000);
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setSubscribeStatus('error');
      setTimeout(() => {
        setSubscribeStatus('idle');
      }, 3000);
    }
  };

  const newsletterFeatures = [
    {
      icon: Calendar,
      title: "Monthly Insights",
      description: "Get the latest wellness trends and mental health updates delivered monthly"
    },
    {
      icon: Users,
      title: "Community Stories",
      description: "Read inspiring stories from our community members on their wellness journeys"
    },
    {
      icon: Sparkles,
      title: "Expert Tips",
      description: "Practical advice from qualified therapists and wellness professionals"
    },
    {
      icon: CheckCircle,
      title: "Exclusive Content",
      description: "Access subscriber-only resources, guides, and early announcements"
    }
  ];

  const pastEditions = [
    {
      title: "Building Resilience in Uncertain Times",
      date: "December 2024",
      highlights: ["Stress management techniques", "Building emotional strength", "Community support resources"]
    },
    {
      title: "The Science of Mindfulness",
      date: "November 2024",
      highlights: ["Meditation benefits", "Mindful living practices", "Research insights"]
    },
    {
      title: "Healthy Relationships & Boundaries",
      date: "October 2024",
      highlights: ["Setting boundaries", "Communication skills", "Relationship wellness"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-72 h-72 bg-primary/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-20 w-48 h-48 bg-accent/10 rounded-full blur-2xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
            <Mail className="w-10 h-10 md:w-12 md:h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            Wellness <span className="font-bold text-primary">Newsletter</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Stay connected with our monthly newsletter featuring expert insights, community stories, 
            and practical wellness tips to support your mental health journey.
          </p>
        </motion.div>
      </section>

      {/* Newsletter Features */}
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
              What You'll <span className="font-bold text-primary italic">Receive</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto rounded-full" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {newsletterFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full text-center border-border/30 hover:border-primary/40 transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Form */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
              Subscribe <span className="font-bold text-secondary italic">Today</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary/50 via-secondary to-secondary/50 mx-auto rounded-full mb-6" />
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Join thousands of others on their wellness journey. It's free and you can unsubscribe anytime.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="border-border/30">
              <CardContent className="p-8">
                <form onSubmit={handleSubscribe} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-primary/30 focus:border-primary bg-background/50"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={subscribeStatus === 'loading'}
                    className={`w-full font-light py-3 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 ${
                      subscribeStatus === 'success' 
                        ? 'bg-green-500 hover:bg-green-600 text-white' 
                        : subscribeStatus === 'error'
                        ? 'bg-red-500 hover:bg-red-600 text-white'
                        : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                    }`}
                  >
                    {subscribeStatus === 'loading' && (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Subscribing...
                      </>
                    )}
                    {subscribeStatus === 'success' && (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Successfully Subscribed!
                      </>
                    )}
                    {subscribeStatus === 'error' && (
                      <>
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        Failed to Subscribe - Try Again
                      </>
                    )}
                    {subscribeStatus === 'idle' && (
                      <>
                        Subscribe Now
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

     

      <Footer />
    </div>
  );
};

export default Newsletter;
