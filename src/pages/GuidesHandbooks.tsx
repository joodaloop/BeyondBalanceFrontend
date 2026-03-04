
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FileText, Book, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const GuidesHandbooks = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    location_city: "",
    location_state: "",
    type_of_book: "",
    preference: "",
    contact_number: "",
    whatsapp_number: "",
    email: ""
  });

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", 
    "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", 
    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", 
    "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
    "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi", "Jammu and Kashmir", 
    "Ladakh", "Puducherry", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", 
    "Lakshadweep", "Andaman and Nicobar Islands"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://web-production-6d157.up.railway.app/services/handbook-guide', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.status === 'success') {
        toast({
          title: "Request Submitted Successfully!",
          description: "Our team will get back to you within 24 hours.",
        });
        // Reset form
        setFormData({
          name: "",
          location_city: "",
          location_state: "",
          type_of_book: "",
          preference: "",
          contact_number: "",
          whatsapp_number: "",
          email: ""
        });
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-primary/5"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
            <FileText className="w-10 h-10 md:w-12 md:h-12 text-secondary" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            Guides & <span className="font-bold text-secondary">Handbooks</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8 px-4">
            We create guides and handbooks that go beyond just information—they're thoughtfully designed to be relatable, 
            practical, and easy to apply in real life. Each page is crafted with intention, blending expert insights with 
            a fresh, engaging tone that feels like a conversation, not a lecture.
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Whether you're navigating personal growth or mental wellness, our resources are made to support, inspire, 
            and empower you every step of the way.
          </p>
        </motion.div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 px-4 md:px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8">
              What We <span className="font-bold text-primary">Offer</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Book className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary">Comprehensive Guides</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Our in-depth guides are like your personal wellness companions—around 100 pages of thoughtful content, 
                    exercises, and journal prompts. Designed to feel like a conversation with yourself, these guides help you 
                    dive deep, reflect, and grow at your own pace.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full border-secondary/20 hover:border-secondary/40 transition-colors">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-secondary">Quick Handbooks</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Our handbooks are short, powerful, and to the point—usually around 12 pages. Think of them 
                    as quick boosts of clarity and motivation. Perfect for when you need practical, actionable 
                    insights that fit into your busy life without overwhelming you.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Request Form Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
              Request Your <span className="font-bold text-primary">Guide or Handbook</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below and our team will get back to you within 24 hours with personalized recommendations 
              and pricing information.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="border-primary/20">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Mail className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
                    </div>
                    
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        placeholder="Enter your full name"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        placeholder="Enter your email address"
                        className="mt-1"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="contact">Contact Number *</Label>
                        <Input
                          id="contact"
                          type="tel"
                          value={formData.contact_number}
                          onChange={(e) => handleInputChange('contact_number', e.target.value)}
                          required
                          placeholder="+91-9876543210"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="whatsapp">WhatsApp Number</Label>
                        <Input
                          id="whatsapp"
                          type="tel"
                          value={formData.whatsapp_number}
                          onChange={(e) => handleInputChange('whatsapp_number', e.target.value)}
                          placeholder="+91-9876543210"
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Location Information */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-secondary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">Location Details</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          type="text"
                          value={formData.location_city}
                          onChange={(e) => handleInputChange('location_city', e.target.value)}
                          required
                          placeholder="Enter your city"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State *</Label>
                        <Select value={formData.location_state} onValueChange={(value) => handleInputChange('location_state', value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select your state" />
                          </SelectTrigger>
                          <SelectContent>
                            {indianStates.map((state) => (
                              <SelectItem key={state} value={state}>
                                {state}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Book Preferences */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Book className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">Book Preferences</h3>
                    </div>

                    <div>
                      <Label>Type of Book *</Label>
                      <RadioGroup
                        value={formData.type_of_book}
                        onValueChange={(value) => handleInputChange('type_of_book', value)}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="handbook" id="handbook" />
                          <Label htmlFor="handbook" className="cursor-pointer">
                            Handbook (Short, practical, ~12 pages)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="guide" id="guide" />
                          <Label htmlFor="guide" className="cursor-pointer">
                            Comprehensive Guide (In-depth, ~100 pages)
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label>Format Preference *</Label>
                      <RadioGroup
                        value={formData.preference}
                        onValueChange={(value) => handleInputChange('preference', value)}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="hardcopy" id="hardcopy" />
                          <Label htmlFor="hardcopy" className="cursor-pointer">
                            Physical Hardcopy
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="softcopy" id="softcopy" />
                          <Label htmlFor="softcopy" className="cursor-pointer">
                            Digital Copy (PDF)
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground rounded-full py-3 text-lg font-medium"
                  >
                    {isLoading ? "Submitting..." : "Submit Request"}
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

export default GuidesHandbooks;
