
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";

interface Workshop {
  id: string;
  title: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}

const Workshops = () => {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://web-production-6d157.up.railway.app/workshops');
        
        if (!response.ok) {
          throw new Error('Failed to fetch workshops');
        }
        
        const result = await response.json();
        
        if (result.status === 'success') {
          setWorkshops(result.data || []);
        } else {
          throw new Error(result.message || 'Failed to load workshops');
        }
      } catch (err) {
        console.error('Error fetching workshops:', err);
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchWorkshops();
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
            <Users className="w-10 h-10 md:w-12 md:h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            <span className="font-bold text-primary">Workshops</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            We specialize in conducting workshops that break away from the ordinary. Our approach is rooted in creativity, 
            authenticity, and energy making each session not just informative, but truly transformative. Whether it's through 
            interactive activities, thoughtful conversations or immersive experiences, we bring a fresh and dynamic touch to 
            every workshop. Our goal is to make learning engaging, personal, and unforgettable.
          </p>
        </motion.div>
      </section>

      {/* Past Workshops Gallery */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
              Workshop <span className="font-bold text-secondary italic">Gallery</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary/50 via-secondary to-secondary/50 mx-auto rounded-full" />
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
                <p className="text-muted-foreground text-lg mb-4">Failed to load workshops</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="text-primary hover:text-primary/80 underline"
                >
                  Try again
                </button>
              </div>
            ) : workshops.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground text-lg">No workshops available at the moment</p>
              </div>
            ) : (
              workshops.map((workshop, index) => (
                <motion.div
                  key={workshop.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  <img 
                    src={workshop.image_url} 
                    alt={workshop.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full flex items-center justify-center text-muted-foreground bg-gradient-to-br from-muted to-muted/50">
                    Workshop Image
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-lg mb-1">{workshop.title}</h3>
                    <p className="text-sm text-white/80">
                      {new Date(workshop.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Workshops;
