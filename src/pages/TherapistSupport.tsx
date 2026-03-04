
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, User, Phone, Mail, MapPin, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Therapist {
  id: string;
  name: string;
  specialization: string;
  contact: string;
  phone: string;
  location: string;
  experience: string;
  rating: number;
  patients: number;
  status: string;
  avatar: string;
  credentials: string[];
  created_at: string;
}

interface TherapistsResponse {
  status: string;
  message: string;
  data: Therapist[];
  pagination: {
    total: number;
    limit: number;
    offset: number;
    has_more: boolean;
  };
}

const TherapistSupport = () => {
  const [therapists, setTherapists] = useState<Therapist[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    choice_of_care: 'therapist',
    location_city: '',
    location_state: '',
    preferred_mode_of_care: 'online',
    preferred_care_giver_1: '',
    preferred_care_giver_2: '',
    preferred_care_giver_3: '',
    contact_number: '',
    whatsapp_number: '',
    preferred_timings: '',
    email: ''
  });

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
      const response = await fetch('https://web-production-6d157.up.railway.app/services/ecosystem-of-care', {
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
            choice_of_care: 'therapist',
            location_city: '',
            location_state: '',
            preferred_mode_of_care: 'online',
            preferred_care_giver_1: '',
            preferred_care_giver_2: '',
            preferred_care_giver_3: '',
            contact_number: '',
            whatsapp_number: '',
            preferred_timings: '',
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

  useEffect(() => {
    const fetchTherapists = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://web-production-6d157.up.railway.app/therapists");
        
        if (!response.ok) {
          throw new Error("Failed to fetch therapists");
        }
        
        const data: TherapistsResponse = await response.json();
        
        if (data.status === "success") {
          setTherapists(data.data);
        } else {
          throw new Error(data.message || "Failed to fetch therapists");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Error fetching therapists:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTherapists();
  }, []);

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
          <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
            <Heart className="w-10 h-10 md:w-12 md:h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            Ecosystem of <span className="font-bold text-primary">Care</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Our Care Support Section is designed to make reaching out for help simple, transparent, and empowering. 
            We provide a curated list of trusted wellness professionals, along with their areas of expertise so you can find someone 
            who truly understands what you're going through and is best suited to support your needs. At the end of the list, 
            you'll find a registration form where you can easily fill in your name, contact details, and select the care provider 
            you'd like to connect with. This small step opens the door to meaningful, personalized care because we believe 
            finding the right support should feel safe, easy, and made just for you.
          </p>
        </motion.div>
      </section>

      {/* Therapists List */}
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
              Our <span className="font-bold text-primary italic">Ecosystem of Care</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto rounded-full" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {loading ? (
              // Loading skeleton
              Array.from({ length: 6 }).map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="h-full border-border/30 animate-pulse">
                    <CardHeader className="text-center pb-4">
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
                      <div className="h-6 bg-gray-200 rounded mx-auto w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded mx-auto w-1/2 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded mx-auto w-1/3"></div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-200 rounded"></div>
                        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                        <div className="h-3 bg-gray-200 rounded w-4/6"></div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : error ? (
              <div className="col-span-full text-center py-12">
                <div className="text-red-500 mb-4">
                  <Heart className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p className="text-lg">Unable to load therapists</p>
                  <p className="text-sm text-muted-foreground">{error}</p>
                </div>
                <Button 
                  onClick={() => window.location.reload()} 
                  variant="outline"
                  className="mt-4"
                >
                  Try Again
                </Button>
              </div>
            ) : therapists.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <Heart className="w-12 h-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                <p className="text-lg text-muted-foreground">No therapists available at the moment</p>
              </div>
            ) : (
              therapists.map((therapist, index) => (
                <motion.div
                  key={therapist.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="h-full border-border/30 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                    <CardHeader className="text-center pb-4">
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        {therapist.avatar ? (
                          <img 
                            src={therapist.avatar} 
                            alt={therapist.name}
                            className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover"
                          />
                        ) : (
                          <User className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                        )}
                      </div>
                      <CardTitle className="text-lg md:text-xl font-semibold text-foreground break-words">{therapist.name}</CardTitle>
                      <div className="text-primary font-medium text-sm md:text-base">{therapist.specialization}</div>
                      <div className="text-xs md:text-sm text-muted-foreground flex items-center justify-center gap-1">
                        <span>{therapist.experience} experience</span>
                      </div>
                      {therapist.location && (
                        <div className="text-xs text-muted-foreground flex items-center justify-center gap-1 mt-1">
                          <MapPin className="w-3 h-3" />
                          <span>{therapist.location}</span>
                        </div>
                      )}
                      {therapist.rating && (
                        <div className="flex items-center justify-center gap-2 mt-2">
                          <div className="flex text-yellow-500">
                            {"★".repeat(Math.floor(therapist.rating))}
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {therapist.rating} ({therapist.patients} patients)
                          </span>
                        </div>
                      )}
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-4 h-4 text-primary" />
                        <a href={`mailto:${therapist.contact}`} className="text-primary hover:underline">
                          {therapist.contact}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="w-4 h-4" />
                        <span>{therapist.phone}</span>
                      </div>
                      {therapist.credentials && therapist.credentials.length > 0 && (
                        <div className="pt-2 border-t border-border/30">
                          <p className="text-xs text-muted-foreground">
                            <span className="font-medium">Credentials:</span>
                          </p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {therapist.credentials.map((credential, idx) => (
                              <span 
                                key={idx}
                                className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                              >
                                {credential}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Registration Form */}
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
              Connect with a <span className="font-bold text-secondary italic">Care Provider</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary/50 via-secondary to-secondary/50 mx-auto rounded-full mb-6" />
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
              Ready to take the next step? Fill out the form below to connect with one of our trusted care providers.
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
                <CardTitle className="text-xl md:text-2xl font-light text-center">Registration Form</CardTitle>
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
                        placeholder="+1-555-0123" 
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
                        placeholder="+1-555-0123" 
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="location_city" className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        City
                      </Label>
                      <Input 
                        id="location_city" 
                        value={formData.location_city}
                        onChange={(e) => handleInputChange('location_city', e.target.value)}
                        placeholder="Enter your city" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location_state" className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        State
                      </Label>
                      <Input 
                        id="location_state" 
                        value={formData.location_state}
                        onChange={(e) => handleInputChange('location_state', e.target.value)}
                        placeholder="Enter your state" 
                      />
                    </div>
                  </div>

                  {/* Choice of Care */}
                  <div className="space-y-2">
                    <Label htmlFor="choice_of_care" className="flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      Choice of Care
                    </Label>
                    <Select value={formData.choice_of_care} onValueChange={(value) => handleInputChange('choice_of_care', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select care type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="therapist">Therapist</SelectItem>
                        <SelectItem value="lifecoach">Life Coach</SelectItem>
                        <SelectItem value="nutritionist">Nutritionist</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Mode of Care */}
                  <div className="space-y-2">
                    <Label htmlFor="preferred_mode_of_care" className="flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      Preferred Mode of Care
                    </Label>
                    <Select value={formData.preferred_mode_of_care} onValueChange={(value) => handleInputChange('preferred_mode_of_care', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select mode of care" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="online">Online</SelectItem>
                        <SelectItem value="offline">In Person</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Preferred Timings */}
                  <div className="space-y-2">
                    <Label htmlFor="preferred_timings" className="flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      Preferred Timings
                    </Label>
                    <Select value={formData.preferred_timings} onValueChange={(value) => handleInputChange('preferred_timings', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select preferred timings" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning</SelectItem>
                        <SelectItem value="afternoon">Afternoon</SelectItem>
                        <SelectItem value="evening">Evening</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Preferred Care Givers */}
                  <div className="space-y-4">
                    <Label className="text-sm font-medium">Preferred Care Providers (Select up to 3)</Label>
                    
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <Label htmlFor="preferred_care_giver_1" className="text-sm">
                          First Choice
                        </Label>
                        <Select value={formData.preferred_care_giver_1} onValueChange={(value) => handleInputChange('preferred_care_giver_1', value === 'no_preference' ? '' : value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select first choice" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="no_preference">No preference</SelectItem>
                            {therapists.map((therapist) => (
                              <SelectItem key={therapist.id} value={therapist.name}>
                                {therapist.name} - {therapist.specialization}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="preferred_care_giver_2" className="text-sm">
                          Second Choice
                        </Label>
                        <Select value={formData.preferred_care_giver_2 || 'no_preference'} onValueChange={(value) => handleInputChange('preferred_care_giver_2', value === 'no_preference' ? '' : value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select second choice" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="no_preference">No preference</SelectItem>
                            {therapists.map((therapist) => (
                              <SelectItem key={therapist.id} value={therapist.name}>
                                {therapist.name} - {therapist.specialization}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="preferred_care_giver_3" className="text-sm">
                          Third Choice
                        </Label>
                        <Select value={formData.preferred_care_giver_3 || 'no_preference'} onValueChange={(value) => handleInputChange('preferred_care_giver_3', value === 'no_preference' ? '' : value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select third choice" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="no_preference">No preference</SelectItem>
                            {therapists.map((therapist) => (
                              <SelectItem key={therapist.id} value={therapist.name}>
                                {therapist.name} - {therapist.specialization}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    disabled={submitting}
                    className={`w-full rounded-full py-6 text-base md:text-lg font-light transition-all duration-300 ${
                      submitStatus === 'success' 
                        ? 'bg-green-500 hover:bg-green-600 text-white' 
                        : submitStatus === 'error'
                        ? 'bg-red-500 hover:bg-red-600 text-white'
                        : 'bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground'
                    }`}
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting Registration...
                      </>
                    ) : submitStatus === 'success' ? (
                      'Registration Submitted Successfully!'
                    ) : submitStatus === 'error' ? (
                      'Failed to Submit - Try Again'
                    ) : (
                      'Submit Registration'
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
              Registration Submitted Successfully!
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground leading-relaxed mt-4">
              Thank you for reaching out to connect with our care providers. Our team will get back to you within 24 hours to help match you with the right support for your wellness journey.
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

export default TherapistSupport;
