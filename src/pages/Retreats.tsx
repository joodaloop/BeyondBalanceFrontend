import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { 
  Mountain, 
  Users, 
  MapPin, 
  Heart,
  Star,
  Phone
} from "lucide-react";

interface RetreatEvent {
  id: string;
  title: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}

const Retreats = () => {
  const [retreatEvents, setRetreatEvents] = useState<RetreatEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [inquiryData, setInquiryData] = useState({
    name: "",
    location_city: "",
    location_state: "",
    contact_number: "",
    whatsapp_number: "",
    email: ""
  });
  
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  useEffect(() => {
    const fetchRetreatEvents = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://web-production-6d157.up.railway.app/retreat-events');
        
        if (!response.ok) {
          throw new Error('Failed to fetch retreat events');
        }
        
        const result = await response.json();
        
        if (result.status === 'success') {
          setRetreatEvents(result.data || []);
        } else {
          throw new Error(result.message || 'Failed to load retreat events');
        }
      } catch (err) {
        console.error('Error fetching retreat events:', err);
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchRetreatEvents();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInquiryData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isFormComplete = () => {
    return inquiryData.name && inquiryData.email && inquiryData.location_city && inquiryData.location_state && inquiryData.contact_number;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormComplete()) {
      alert("Please fill in all required fields.");
      return;
    }
    
    setSubmitStatus('loading');
    
    try {
      const response = await fetch('https://web-production-6d157.up.railway.app/services/retreats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inquiryData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setSubmitStatus('success');
      setShowSuccessDialog(true);
      
      // Reset form after success
      setInquiryData({
        name: "",
        location_city: "",
        location_state: "",
        contact_number: "",
        whatsapp_number: "",
        email: ""
      });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }
  };

  const retreatFeatures = [
    {
      icon: Heart,
      title: "Expert Guidance",
      description: "Led by certified therapists and wellness professionals"
    },
    {
      icon: Users,
      title: "Small Groups",
      description: "Intimate settings for personalized attention and meaningful connections"
    },
    {
      icon: Star,
      title: "Holistic Approach",
      description: "Mind, body, and spirit wellness through various therapeutic modalities"
    },
    {
      icon: MapPin,
      title: "Beautiful Locations",
      description: "Carefully selected peaceful environments that enhance healing"
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
            <Mountain className="w-10 h-10 md:w-12 md:h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            Wellness <span className="font-bold text-primary">Retreats</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Escape to peaceful environments designed for deep healing, personal growth, and renewal. 
            Our carefully curated retreats combine professional guidance with the restorative power of nature.
          </p>
        </motion.div>
      </section>

      {/* Retreat Features */}
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
              Why Choose Our <span className="font-bold text-primary italic">Retreats</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto rounded-full" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {retreatFeatures.map((feature, index) => (
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

      {/* About Our Retreats */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
              Our Retreat <span className="font-bold text-secondary italic">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary/50 via-secondary to-secondary/50 mx-auto rounded-full mb-8" />
            
            <div className="space-y-6 text-left">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                Our wellness retreats offer transformative experiences in India's most serene locations. From the 
                mountains of Himachal Pradesh to the tranquil backwaters of Kerala, we create sacred spaces for 
                deep healing and personal growth.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                Each retreat is carefully designed to combine professional therapeutic guidance with immersive 
                nature experiences. Whether you're seeking stress relief, emotional healing, or spiritual renewal, 
                our programs integrate mindfulness practices, group therapy sessions, and holistic wellness activities.
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                Our experienced team of certified therapists and wellness professionals ensures that every participant 
                receives personalized attention in a supportive, nurturing environment. We believe in the power of 
                community healing while honoring individual journeys.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Retreat Gallery */}
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
              Retreat <span className="font-bold text-primary italic">Gallery</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {loading ? (
              // Loading skeleton
              Array.from({ length: 6 }).map((_, index) => (
                <motion.div
                  key={`loading-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-2xl overflow-hidden"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  </div>
                </motion.div>
              ))
            ) : error ? (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground text-lg mb-4">Failed to load retreat events</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="text-primary hover:text-primary/80 underline"
                >
                  Try again
                </button>
              </div>
            ) : retreatEvents.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground text-lg">No retreat events available at the moment</p>
              </div>
            ) : (
              retreatEvents.map((retreat, index) => (
                <motion.div
                  key={retreat.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  <img 
                    src={retreat.image_url} 
                    alt={retreat.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full flex items-center justify-center text-muted-foreground bg-gradient-to-br from-muted to-muted/50">
                    Retreat Image
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-lg mb-1">{retreat.title}</h3>
                    <p className="text-sm text-white/80">
                      {new Date(retreat.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
              Join Our <span className="font-bold text-secondary italic">Retreats</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary/50 via-secondary to-secondary/50 mx-auto rounded-full mb-6" />
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Ready to embark on your healing journey? Fill out the form below and we'll contact you with retreat details and availability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="border-border/30">
              <CardHeader>
                <CardTitle className="text-xl font-light text-center">Retreat Interest Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={inquiryData.name}
                        onChange={handleInputChange}
                        className="border-primary/30 focus:border-primary bg-background/50"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={inquiryData.email}
                        onChange={handleInputChange}
                        className="border-primary/30 focus:border-primary bg-background/50"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="location_city" className="text-foreground font-medium">
                        City *
                      </Label>
                      <Input
                        id="location_city"
                        name="location_city"
                        value={inquiryData.location_city}
                        onChange={handleInputChange}
                        className="border-primary/30 focus:border-primary bg-background/50"
                        placeholder="Enter your city"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location_state" className="text-foreground font-medium">
                        State *
                      </Label>
                      <Input
                        id="location_state"
                        name="location_state"
                        value={inquiryData.location_state}
                        onChange={handleInputChange}
                        className="border-primary/30 focus:border-primary bg-background/50"
                        placeholder="Enter your state"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contact_number" className="text-foreground font-medium">
                        Phone Number *
                      </Label>
                      <Input
                        id="contact_number"
                        name="contact_number"
                        type="tel"
                        value={inquiryData.contact_number}
                        onChange={handleInputChange}
                        className="border-primary/30 focus:border-primary bg-background/50"
                        placeholder="+91-9876543210"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp_number" className="text-foreground font-medium">
                        WhatsApp Number
                      </Label>
                      <Input
                        id="whatsapp_number"
                        name="whatsapp_number"
                        type="tel"
                        value={inquiryData.whatsapp_number}
                        onChange={handleInputChange}
                        className="border-primary/30 focus:border-primary bg-background/50"
                        placeholder="+91-9876543210"
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    disabled={!isFormComplete() || submitStatus === 'loading'}
                    className={`w-full font-light py-3 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 ${
                      submitStatus === 'success' 
                        ? 'bg-green-500 hover:bg-green-600 text-white' 
                        : submitStatus === 'error'
                        ? 'bg-red-500 hover:bg-red-600 text-white'
                        : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                    }`}
                  >
                    {submitStatus === 'loading' && (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting Request...
                      </>
                    )}
                    {submitStatus === 'success' && (
                      <>
                        <Heart className="w-5 h-5 mr-2" />
                        Request Submitted Successfully!
                      </>
                    )}
                    {submitStatus === 'error' && (
                      <>
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        Failed to Submit - Try Again
                      </>
                    )}
                    {submitStatus === 'idle' && 'Submit Retreat Request'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Success Dialog */}
      <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <AlertDialogContent className="max-w-md mx-auto">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center text-2xl font-light">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-green-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-500" />
              </div>
              Request Submitted Successfully!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-base leading-relaxed">
              Thank you for your interest in our wellness retreats. Our team will get back to you within 24 hours with retreat details, availability, and next steps for your healing journey.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex justify-center mt-6">
            <AlertDialogAction 
              onClick={() => setShowSuccessDialog(false)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            >
              Got it, Thanks!
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>

      <Footer />
    </div>
  );
};

export default Retreats;
