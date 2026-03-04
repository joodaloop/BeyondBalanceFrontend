import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Clock, Globe, Heart, Shield, AlertTriangle } from "lucide-react";

const CrisisResources = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const resources = [
    {
      name: "KIRAN (Government of India)",
      number: "1800-59-90-019",
      availability: "24×7",
      description: "Psychological first aid, mental health screening, crisis management, and referrals by professionals in 13 languages",
      type: "Government",
      isNational: true,
      languages: "13 languages"
    },
    {
      name: "AASRA",
      number: "+91-22-27546669",
      availability: "24×7",
      description: "Confidential counseling by trained volunteers for those feeling suicidal or in emotional distress",
      type: "NGO",
      isNational: true
    },
    {
      name: "Vandrevala Foundation",
      number: "+91-99996-66555",
      availability: "24×7",
      description: "Voice and WhatsApp-based free psychological counseling across India in multiple regional languages",
      type: "Foundation",
      isNational: true,
      hasWhatsApp: true,
      languages: "Multiple regional languages"
    },
    {
      name: "Samaritans Mumbai",
      numbers: ["+91-84229-84528", "+91-84229-84529", "+91-84229-84530"],
      availability: "3 PM – 9 PM (approximately)",
      description: "Offers emotional support, face-to-face appointments, and professional counselling",
      type: "Regional",
      location: "Mumbai",
      hasFaceToFace: true
    },
    {
      name: "Sumaitri (Delhi)",
      numbers: ["011-46018404", "+91-93157-67849"],
      availability: "2 PM – 10 PM (weekdays), Extended weekend hours",
      description: "Emotional support and crisis intervention services",
      type: "Regional",
      location: "Delhi"
    },
    {
      name: "Sneha (Chennai)",
      numbers: ["+91-44-24640050", "+91-44-24640060"],
      availability: "24×7",
      description: "Suicide prevention and emotional support helpline",
      type: "Regional",
      location: "Chennai"
    },
    {
      name: "Lifeline Foundation (Kolkata)",
      numbers: ["+91-91639-40404", "+91-90880-30303"],
      availability: "10 AM – 10 PM daily",
      description: "Confidential emotional support and counseling",
      type: "Regional",
      location: "Kolkata"
    },
    {
      name: "TeleMANAS (Karnataka)",
      numbers: ["14416", "1800-89-14416"],
      availability: "24×7",
      description: "Government helpline launched in 2022; handled over 65,000 calls in 3 years, offering counselling and referral to psychiatrists when needed",
      type: "Government",
      location: "Karnataka",
      isGovernment: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Crisis Resources
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
              Immediate help is available. You are not alone. These resources provide 24/7 support for mental health crises and emotional distress.
            </p>
          </motion.div>

          {/* Emergency Notice */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-8"
          >
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                  If you're in immediate danger or having thoughts of self-harm:
                </h3>
                <ul className="text-red-700 dark:text-red-300 space-y-1 text-sm">
                  <li>• Call emergency services: <strong>100 (Police)</strong> or <strong>102 (Ambulance)</strong></li>
                  <li>• Go to your nearest hospital emergency room</li>
                  <li>• Call any of the crisis helplines below immediately</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* National Suicide Prevention */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="mb-12"
          >
            <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Shield className="w-6 h-6 text-primary" />
                  <Badge variant="default" className="bg-primary">National Priority</Badge>
                </div>
                <CardTitle className="text-2xl">National Suicide Prevention Helpline</CardTitle>
                <CardDescription className="text-lg font-semibold text-primary">
                  1800-121-3667
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  India's primary suicide prevention helpline - Free and confidential support
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Crisis Resources Grid */}
          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {resources.map((resource, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2 flex items-center gap-2">
                          <Heart className="w-5 h-5 text-primary flex-shrink-0" />
                          {resource.name}
                        </CardTitle>
                        <div className="space-y-2">
                          {resource.number && (
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-muted-foreground" />
                              <a 
                                href={`tel:${resource.number.replace(/[^0-9+]/g, '')}`}
                                className="text-primary hover:underline font-mono text-sm"
                              >
                                {resource.number}
                              </a>
                            </div>
                          )}
                          {resource.numbers && (
                            <div className="space-y-1">
                              {resource.numbers.map((num, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                  <Phone className="w-4 h-4 text-muted-foreground" />
                                  <a 
                                    href={`tel:${num.replace(/[^0-9+]/g, '')}`}
                                    className="text-primary hover:underline font-mono text-sm"
                                  >
                                    {num}
                                  </a>
                                </div>
                              ))}
                            </div>
                          )}
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{resource.availability}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Badge 
                          variant={resource.type === 'Government' ? 'default' : 'secondary'}
                          className={resource.type === 'Government' ? 'bg-green-500' : ''}
                        >
                          {resource.type}
                        </Badge>
                        {resource.location && (
                          <Badge variant="outline" className="text-xs">
                            {resource.location}
                          </Badge>
                        )}
                        {resource.isNational && (
                          <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                            <Globe className="w-3 h-3 mr-1" />
                            National
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      {resource.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {resource.languages && (
                        <Badge variant="outline" className="text-xs">
                          {resource.languages}
                        </Badge>
                      )}
                      {resource.hasWhatsApp && (
                        <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                          WhatsApp Available
                        </Badge>
                      )}
                      {resource.hasFaceToFace && (
                        <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700 border-purple-200">
                          In-Person Support
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <Separator className="my-12" />

          {/* Additional Support Information */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="prose prose-lg max-w-none"
          >
            <div className="bg-muted/30 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-4">Important Information</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-medium text-foreground mb-2">When to Call:</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Thoughts of suicide or self-harm</li>
                    <li>• Overwhelming emotional distress</li>
                    <li>• Feeling hopeless or alone</li>
                    <li>• Mental health crisis</li>
                    <li>• Need someone to talk to urgently</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">What to Expect:</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Trained counselors and volunteers</li>
                    <li>• Confidential and non-judgmental support</li>
                    <li>• Crisis intervention and safety planning</li>
                    <li>• Referrals to local mental health services</li>
                    <li>• Multiple language support available</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-background/50 rounded border-l-4 border-primary">
                <p className="text-foreground font-medium mb-2">Remember:</p>
                <p className="text-muted-foreground text-sm">
                  Seeking help is a sign of strength, not weakness. These services are free, confidential, and staffed by people who care about your wellbeing. You matter, and your life has value.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Beyond Balance */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="mt-12"
          >
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Need Non-Emergency Mental Health Support?</CardTitle>
                <CardDescription>
                  Beyond Balance offers ongoing mental wellness services and support
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  For therapy, workshops, and mental health education services
                </p>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <a 
                    href="mailto:support@beyondbalance.org.in"
                    className="text-primary hover:underline"
                  >
                    support@beyondbalance.org.in
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CrisisResources;
