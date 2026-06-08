import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  status: string;
  created_at: string;
  image_url: string;
  description: string;
  luma_link: string;
}

interface APIResponse {
  status: string;
  message: string;
  data: Event[];
  pagination: {
    total: number;
    limit: number;
    offset: number;
    has_more: boolean;
  };
}

const UpcomingEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("https://web-production-6d157.up.railway.app/events");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: APIResponse = await response.json();

        if (data.status === "success") {
          setEvents(data.data);
        } else {
          throw new Error(data.message || "Failed to fetch events");
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(":");
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  if (loading) {
    return (
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-pulse space-y-4">
              <div className="h-16 bg-primary/10 rounded-lg mx-auto w-96"></div>
              <div className="h-4 bg-primary/5 rounded mx-auto w-64"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Unable to load events</h2>
            <p className="text-muted-foreground">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  if (events.length === 0) {
    return (
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight mb-8">
              UPCOMING
              <span className="block text-primary font-normal italic transform rotate-1 mt-2">EVENTS</span>
            </h2>
            <p className="text-xl text-muted-foreground">No upcoming events at the moment. Check back soon!</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Organic flowing background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10"></div>
      <div className="absolute top-20 left-16 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/8 rounded-full blur-2xl opacity-60"></div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 space-y-8"
        >
          <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight">
            UPCOMING
            <span className="block text-primary font-normal italic transform rotate-1 mt-2">EVENTS</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full mx-auto opacity-60"></div>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            Join our community events designed to support your mental wellness journey
          </p>
        </motion.div>

        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {events.map((event, index) => (
                <CarouselItem key={event.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="h-full group"
                  >
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card/40 to-card/60 backdrop-blur-sm border border-primary/10 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                      {/* Floating accent elements */}
                      <div className="absolute -top-3 -right-3 w-12 h-12 bg-primary/10 rounded-full blur-lg group-hover:scale-110 transition-transform duration-500"></div>
                      {/* Event status badge
                      {event.status === 'pending' && (
                        <div className="absolute top-4 left-4 px-3 py-1 bg-yellow-500/10 text-yellow-600 text-xs font-medium rounded-full border border-yellow-500/20">
                          Pending
                        </div>
                      )} */}

                      <div className="aspect-video w-full overflow-hidden">
                        <img
                          src={event.image_url}
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/img13.jpg";
                          }}
                        />
                      </div>

                      <div className="p-8 space-y-6">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {event.title}
                        </h3>

                        <div className="space-y-4">
                          <div className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            <Calendar className="w-4 h-4 mr-3 text-primary" />
                            <span className="text-sm font-light">{formatDate(event.date)}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            <Clock className="w-4 h-4 mr-3 text-primary" />
                            <span className="text-sm font-light">{formatTime(event.time)}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            <MapPin className="w-4 h-4 mr-3 text-primary" />
                            <span className="text-sm font-light">{event.location}</span>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed font-light">{event.description}</p>

                        <Button
                          className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                          onClick={() => {
                            if (event.luma_link) {
                              window.open(event.luma_link, "_blank");
                            }
                          }}
                        >
                          Register Now
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex bg-primary/10 hover:bg-primary/20 border-primary/20 backdrop-blur-sm" />
            <CarouselNext className="hidden md:flex bg-primary/10 hover:bg-primary/20 border-primary/20 backdrop-blur-sm" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
