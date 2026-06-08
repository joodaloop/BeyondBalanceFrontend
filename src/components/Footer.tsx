import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Linkedin, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      return;
    }

    setSubscribeStatus("loading");

    try {
      const response = await fetch("https://web-production-6d157.up.railway.app/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();

      if (response.ok && data.status === "success") {
        setSubscribeStatus("success");
        setTimeout(() => {
          setEmail("");
          setSubscribeStatus("idle");
        }, 3000);
      } else {
        console.error("Subscription failed:", data);
        setSubscribeStatus("error");
        setTimeout(() => {
          setSubscribeStatus("idle");
        }, 3000);
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setSubscribeStatus("error");
      setTimeout(() => {
        setSubscribeStatus("idle");
      }, 3000);
    }
  };

  const navigationLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Resources", href: "/resources" },
    { title: "Contact", href: "/contact" },
  ];

  const supportLinks = [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Crisis Resources", href: "/crisis-resources" },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/beyondbalanceofficial?igsh=MXFoY3kwMjI3dDB5bg%3D%3D&utm_source=qr",
      label: "Instagram",
    },
    { icon: Linkedin, href: "https://www.linkedin.com/company/beyond-balance-llp/", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* The Bottom Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <p className="text-4xl md:text-5xl lg:text-6xl font-light font-italic text-background leading-tight mb-3">
              The Bottom Line
            </p>
            <p className="text-lg md:text-xl text-background/80 font-light italic">It's time to reach out.</p>
            <motion.div
              className="w-32 h-0.5 bg-gradient-to-r from-primary/40 via-primary to-primary/40 mx-auto rounded-full mt-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            {/* Company Name */}
            <div className="mb-6">
              <h3 className="text-xl font-bold">Beyond Balance</h3>
            </div>

            <p className="text-background/80 mb-6 leading-relaxed">
              Empowering your journey to mental wellness through psychology-informed support and personalized guidance.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-background/80">inquiries@beyondbalance.org.in</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-background/80">support@beyondbalance.org.in</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-background/80">+91 7021025183</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-background/80">+91 7977615383</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-background/80">India</span>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith("/") ? (
                    <Link
                      to={link.href}
                      className="text-background/80 hover:text-primary transition-colors duration-200"
                    >
                      {link.title}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-background/80 hover:text-primary transition-colors duration-200"
                    >
                      {link.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith("/") ? (
                    <Link
                      to={link.href}
                      className="text-background/80 hover:text-primary transition-colors duration-200"
                    >
                      {link.title}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-background/80 hover:text-primary transition-colors duration-200"
                    >
                      {link.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Logo & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1 flex flex-col items-center"
          >
            <div className="mb-6 flex flex-col items-center">
              <img src="bbwhite.png" alt="Beyond Balance Logo" className="w-32 h-32 object-contain mb-2" />
              {/* <p className="text-background/60 italic text-center mb-4">
                Where healing meets growth
              </p> */}

              {/* Newsletter Subscription */}
              <div className="w-full max-w-sm mb-6">
                <p className="text-background/80 text-sm mb-3 text-center font-medium">Subscribe for Updates</p>
                <div className="bg-background/10 rounded-lg p-1 border border-background/20">
                  <form onSubmit={handleSubscribe} className="flex gap-1">
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 bg-transparent border-0 text-background placeholder:text-background/50 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm h-9"
                      disabled={subscribeStatus === "loading"}
                    />
                    <Button
                      type="submit"
                      size="sm"
                      disabled={subscribeStatus === "loading" || !email.trim()}
                      className={`px-4 h-9 rounded-md transition-all duration-300 text-xs font-medium ${
                        subscribeStatus === "success"
                          ? "bg-green-500 hover:bg-green-600 text-white"
                          : subscribeStatus === "error"
                            ? "bg-red-500 hover:bg-red-600 text-white"
                            : "bg-primary hover:bg-primary/90 text-primary-foreground"
                      }`}
                    >
                      {subscribeStatus === "loading" && (
                        <>
                          <svg
                            className="animate-spin h-3 w-3 mr-1"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          ...
                        </>
                      )}
                      {subscribeStatus === "success" && (
                        <>
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Done!
                        </>
                      )}
                      {subscribeStatus === "error" && (
                        <>
                          <svg className="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Retry
                        </>
                      )}
                      {subscribeStatus === "idle" && "Subscribe"}
                    </Button>
                  </form>
                </div>
                {subscribeStatus === "success" && (
                  <p className="text-green-400 text-xs text-center mt-2">Successfully subscribed!</p>
                )}
                {subscribeStatus === "error" && (
                  <p className="text-red-400 text-xs text-center mt-2">Please try again</p>
                )}
              </div>
            </div>

            <div className="flex gap-4 justify-center w-full">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-foreground transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-background/60 text-sm">© 2025 Beyond Balance. All rights reserved.</p>
          <p className="text-background/60 text-sm">Made for your wellness journey</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
