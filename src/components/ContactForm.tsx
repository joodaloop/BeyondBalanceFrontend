
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Check } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    dateOfBirth: "",
    phone: ""
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isFormComplete = () => {
    return Object.values(formData).every(field => field.trim() !== "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if all fields are filled
    if (!isFormComplete()) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    
    setSubmitStatus('loading');
    
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        dateofbirth: formData.dateOfBirth,
        phone: formData.phone
      };

      const response = await fetch("https://web-production-6d157.up.railway.app/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setShowSuccessDialog(true);
        // Reset form after showing success
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
            dateOfBirth: "",
            phone: ""
          });
          setSubmitStatus('idle');
        }, 3000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Artistic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage/5 via-background to-mint/10"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent/10 rounded-full blur-2xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-light text-foreground">
            GET IN
            <span className="block font-bold text-primary italic transform -rotate-1">
              TOUCH
            </span>
            <span className="block font-light text-secondary transform rotate-1">
              WITH US
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Ready to start your wellness journey? Fill out the form below and we'll get back to you within 24 hours
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="backdrop-blur-sm bg-card/60 border-primary/20 shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-light text-foreground">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
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
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-primary/30 focus:border-primary bg-background/50"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground font-medium">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="border-primary/30 focus:border-primary bg-background/50"
                    placeholder="What would you like to discuss?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border-primary/30 focus:border-primary bg-background/50"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth" className="text-foreground font-medium">
                    Date of Birth *
                  </Label>
                  <Input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="border-primary/30 focus:border-primary bg-background/50"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-primary/30 focus:border-primary bg-background/50 min-h-[120px]"
                    placeholder="Tell us about your wellness goals or any specific questions you have..."
                    required
                  />
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
                      Sending...
                    </>
                  )}
                  {submitStatus === 'success' && (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Message Sent Successfully!
                    </>
                  )}
                  {submitStatus === 'error' && (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      Failed to Send - Try Again
                    </>
                  )}
                  {submitStatus === 'idle' && 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="max-w-md mx-4 rounded-2xl">
          <DialogHeader className="text-center pb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <DialogTitle className="text-xl md:text-2xl font-semibold text-foreground">
              Message Sent Successfully!
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground leading-relaxed mt-4">
              Thank you for contacting us. Our team will get back to you within 24 hours to address your inquiry and discuss your wellness journey.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button 
              onClick={() => setShowSuccessDialog(false)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-2 rounded-full"
            >
              Got it!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactForm;
