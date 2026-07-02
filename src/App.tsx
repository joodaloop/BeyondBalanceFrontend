import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";
import Workshops from "./pages/Workshops";
import GuidesHandbooks from "./pages/GuidesHandbooks";
import WebinarsSeminars from "./pages/WebinarsSeminars";
import TherapistSupport from "./pages/TherapistSupport";
import MHFA from "./pages/MHFA";
import Newsletter from "./pages/Newsletter";
import Retreats from "./pages/Retreats";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import CrisisResources from "./pages/CrisisResources";
import Childcare from "./pages/Childcare";

const queryClient = new QueryClient();

// Component to handle scrolling on route changes
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Reset body overflow to ensure scrolling works
    document.body.style.overflow = "";
  }, [location.pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/workshops" element={<Workshops />} />
          <Route path="/services/handbooks" element={<GuidesHandbooks />} />
          <Route path="/services/seminars-webinars" element={<WebinarsSeminars />} />
          <Route path="/services/ecosystem-of-care" element={<TherapistSupport />} />
          <Route path="/services/mhfa" element={<MHFA />} />
          <Route path="/services/newsletter" element={<Newsletter />} />
          <Route path="/services/retreats" element={<Retreats />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/childcare" element={<Childcare />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/crisis-resources" element={<CrisisResources />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
