import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, Monitor, Phone, Mail, User, CheckCircle, ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const WebinarsSeminars = () => {
  const [formData, setFormData] = useState({
    name: '',
    type_of_session: 'webinar',
    contact_number: '',
    whatsapp_number: '',
    email: ''
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.contact_number.trim()) {
      alert("Please fill in all required fields.");
      return;
    }
    
    setSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('https://web-production-6d157.up.railway.app/services/webinar-seminar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setShowSuccessDialog(true);
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: '',
            type_of_session: 'webinar',
            contact_number: '',
            whatsapp_number: '',
            email: ''
          });
          setSubmitStatus('idle');
        }, 3000);
      } else {
        const errorData = await response.json();
        console.error("Submission failed:", errorData);
        setSubmitStatus('error');
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="flex justify-center gap-4 mb-6 md:mb-8">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
              <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            </div>
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center">
              <Monitor className="w-8 h-8 md:w-10 md:h-10 text-secondary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            <span className="font-bold text-primary">Seminars</span> & <span className="font-bold text-secondary">Webinars</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Join our thoughtfully designed seminars and webinars for powerful learning experiences. Whether you prefer 
            in-person seminars or convenient online webinars, we offer interactive sessions that blend expert knowledge 
            with real-life relatability. Each session is crafted to be engaging, authentic, and empowering, leaving you 
            feeling inspired and ready to take action on your wellness journey.
          </p>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Seminars */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full border-border/30 hover:border-primary/40 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-semibold text-primary">Seminars</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Interactive in-person sessions designed for meaningful conversations around mental wellness, 
                    personal growth, and self-awareness. Limited capacity ensures personalized attention and 
                    deeper connections.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>In-person interactive sessions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Limited participants for personalized experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Expert-led discussions and activities</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Networking and community building</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Webinars */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full border-border/30 hover:border-secondary/40 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Monitor className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl font-semibold text-secondary">Webinars</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Convenient online sessions that bring impactful learning straight to your screen. Interactive, 
                    engaging, and packed with practical takeaways, designed to fit into your schedule from anywhere.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      <span>Join from anywhere with internet</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      <span>Interactive Q&A and discussions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      <span>Downloadable resources and materials</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      <span>Flexible timing options</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-16 px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
              Request Information
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full mb-6" />
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Interested in joining our seminars or webinars? Fill out the form below and our team will get back to you 
              within 24 hours with detailed information, schedules, and booking options.
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
                <CardTitle className="text-xl md:text-2xl font-light text-center">Request Form</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Full Name *
                    </Label>
                    <Input 
                      id="name" 
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name" 
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email Address *
                    </Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email address" 
                      required
                    />
                  </div>

                  {/* Contact Numbers */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contact_number" className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Contact Number *
                      </Label>
                      <Input 
                        id="contact_number" 
                        type="tel" 
                        value={formData.contact_number}
                        onChange={(e) => handleInputChange('contact_number', e.target.value)}
                        placeholder="+1234567890" 
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp_number" className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        WhatsApp Number
                      </Label>
                      <Input 
                        id="whatsapp_number" 
                        type="tel" 
                        value={formData.whatsapp_number}
                        onChange={(e) => handleInputChange('whatsapp_number', e.target.value)}
                        placeholder="+1234567890" 
                      />
                    </div>
                  </div>

                  {/* Session Type */}
                  <div className="space-y-2">
                    <Label htmlFor="type_of_session" className="flex items-center gap-2">
                      <Monitor className="w-4 h-4" />
                      Type of Session
                    </Label>
                    <Select value={formData.type_of_session} onValueChange={(value) => handleInputChange('type_of_session', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select session type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="webinar">Webinar (Online)</SelectItem>
                        <SelectItem value="seminar">Seminar (In-Person)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    type="submit"
                    disabled={submitting}
                    className={`w-full rounded-full py-6 text-base md:text-lg font-light transition-all duration-300 ${
                      submitStatus === 'success' 
                        ? 'bg-green-500 hover:bg-green-600 text-white' 
                        : submitStatus === 'error'
                        ? 'bg-red-500 hover:bg-red-600 text-white'
                        : 'bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground'
                    }`}
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting Request...
                      </>
                    ) : submitStatus === 'success' ? (
                      'Request Submitted Successfully!'
                    ) : submitStatus === 'error' ? (
                      'Failed to Submit - Try Again'
                    ) : (
                      <>
                        Submit Request
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

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="max-w-md mx-4 rounded-2xl">
          <DialogHeader className="text-center pb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <DialogTitle className="text-xl md:text-2xl font-semibold text-foreground">
              Request Submitted Successfully!
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground leading-relaxed mt-4">
              Thank you for your interest in our seminars and webinars. Our team will get back to you within 24 hours with detailed information, schedules, and booking options.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button 
              onClick={() => setShowSuccessDialog(false)}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground px-8 py-2 rounded-full"
            >
              Got it!
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default WebinarsSeminars;
