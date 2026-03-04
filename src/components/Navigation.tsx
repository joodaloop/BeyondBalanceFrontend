
import { Button } from "@/components/ui/button";
import { motion, useScroll } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollY } = useScroll();
  const location = useLocation();
  const navigate = useNavigate();

  // Handle smooth scrolling to sections
  const handleSectionClick = (to: string, hash?: string) => {
    if (hash) {
      if (location.pathname === to) {
        // Already on the page, just scroll to section
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        // Navigate to page first, then scroll after a brief delay
        navigate(to + hash);
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    } else {
      // Regular navigation
      navigate(to);
    }
  };

  useEffect(() => {
    const handleScroll = (latest) => {
      const direction = latest > lastScrollY ? 'down' : 'up';
      const scrollSpeed = Math.abs(latest - lastScrollY);
      
      setIsScrolled(latest > 50);
      
      if (latest < 10 || direction === 'up') {
        setIsVisible(true);
      } 
      else if (direction === 'down' && latest > 100 && scrollSpeed < 30) {
        setIsVisible(false);
      }
      
      setLastScrollY(latest);
    };

    let frameId;
    let lastCallTime = 0;
    const throttleTime = 10;

    const unsubscribe = scrollY.on("change", (latest) => {
      const now = Date.now();
      
      if (now - lastCallTime < throttleTime) {
        if (frameId) {
          cancelAnimationFrame(frameId);
        }
      }
      
      lastCallTime = now;
      
      frameId = requestAnimationFrame(() => {
        handleScroll(latest);
      });
    });
    
    return () => {
      unsubscribe();
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [scrollY, lastScrollY]);

  // Handle hash navigation when location changes
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  const navLinks = [
    { 
      to: "/", 
      label: "Home",
      sections: [
        { name: "Hero Section", hash: "#hero" },
        { name: "Upcoming Events", hash: "#events" },
        { name: "Statistics", hash: "#stats" },
        { name: "Journey Stages", hash: "#stages" },
        { name: "Comparison", hash: "#comparison" },
        
      ]
    },
    { 
      to: "/about", 
      label: "About Us",
      sections: [
        { name: "Book Appointment", hash: "#appointment" },
        { name: "Accessibility", hash: "#accessibility" },
        { name: "Founders", hash: "#founders" },
        { name: "Vision & Mission", hash: "#vision" }
      ]
    },
    { 
      to: "/services", 
      label: "Services",
      sections: [
        { name: "Workshops", to: "/services/workshops" },
        { name: "Handbooks & Guides", to: "/services/handbooks" },
        { name: "Seminars & Webinars", to: "/services/seminars-webinars" },
        { name: "Ecosystem of Care", to: "/services/ecosystem-of-care" },
        { name: "MHFA", to: "/services/mhfa" },
        { name: "Retreats", to: "/services/retreats" }
      ]
    },
    { 
      to: "/resources", 
      label: "Resources",
      sections: [
        { name: "Tailored Resources", hash: "#tailored-resources" },
        { name: "Crisis Resources", hash: "#crisis-resources" }
      ]
    },
    { 
      to: "/contact", 
      label: "Contact Us",
      sections: [
        { name: "Contact Form", hash: "#contact-form" },
        { name: "FAQ", hash: "#faq" },
        
      ]
    },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ 
        opacity: isVisible ? 1 : 0.6, 
        y: isVisible ? 0 : -100,
        translateY: isVisible ? 0 : '-100%'
      }}
      transition={{ 
        duration: isVisible ? 0.15 : 0.45,
        ease: isVisible ? [0, 0, 0.2, 1] : [0.42, 0, 1, 1],
        opacity: { duration: isVisible ? 0.1 : 0.25 },
        translateY: { duration: isVisible ? 0.15 : 0.4 }
      }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-card/95 backdrop-blur-md border-b border-border/50 ${
        isScrolled ? 'px-4 py-2' : 'px-6 py-4'
      }`}
    >
      <div className="flex items-center space-x-2">
        <Link to="/">
          <img 
            src="https://cyzofnicsspmbsqdrkla.supabase.co/storage/v1/object/public/landing-assets//bbvector.png" 
            alt="Beyond Balance Logo" 
            className={`object-contain mr-2 transition-all duration-300 ${
              isScrolled ? 'w-8 h-8' : 'w-10 h-10'
            }`}
          />
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <HoverCard key={link.to} openDelay={200} closeDelay={100}>
            <HoverCardTrigger asChild>
              <Link 
                to={link.to} 
                className="text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="w-60 p-4">
              <h4 className="font-semibold text-sm mb-3 text-primary">{link.label} {link.label === 'Services' ? 'Pages' : 'Sections'}</h4>
              <div className="space-y-2">
                {link.sections.map((section) => (
                  <button
                    key={section.to || section.hash}
                    onClick={() => handleSectionClick(section.to || link.to, section.hash)}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded hover:bg-muted/50 w-full text-left"
                  >
                    {section.name}
                  </button>
                ))}
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
      
      {/* Desktop Get Started Button */}
      <div className="hidden md:block">
        <Link to="/get-started">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            Get Started
          </Button>
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="focus:outline-none">
              <Menu className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className="w-[calc(100vw-32px)] p-4 mr-4 bg-card/95 backdrop-blur-md shadow-xl border-border/50"
            align="end"
            sideOffset={16}
          >
            <DropdownMenuLabel className="text-xl font-semibold border-b border-border/30 pb-3 mb-2">
              Navigation
            </DropdownMenuLabel>
            {navLinks.map((link) => (
              <Link 
                key={link.to}
                to={link.to}
                className="w-full block"
              >
                <DropdownMenuItem className="text-lg py-3 px-4 cursor-pointer hover:bg-muted/30 focus:bg-muted/30 hover:text-primary focus:text-primary rounded-lg font-medium mb-1">
                  {link.label}
                </DropdownMenuItem>
              </Link>
            ))}
            <DropdownMenuSeparator className="my-3" />
            <Link to="/get-started" className="w-full block mt-2">
              <Button 
                variant="outline" 
                className="w-full border-primary text-primary hover:bg-primary hover:text-white py-4 text-lg font-medium rounded-xl"
              >
                Get Started
              </Button>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </motion.nav>
  );
};

export default Navigation;
