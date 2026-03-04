
import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

const VisionMissionStorySection = () => {
  const sections = [
    {
      icon: Eye,
      title: "Our Vision",
      content: "At Beyond Balance, we envision a world where mental wellness is embraced as an everyday essential not just a response to struggle. We aim to normalize healing, growth, and self-awareness by offering meaningful support in many forms from therapy to workshops, from guides to conversations that matter. Our vision is to build a culture where emotional well-being is seen as strength, support is accessible, and balance is a lifestyle not a destination.",
      alignment: "left",
      gradient: "from-primary/20 to-accent/10"
    },
    {
      icon: Target,
      title: "Our Mission",
      content: "Our mission is to make emotional support feel real, approachable, and empowering With a foundation in psychology and a passion for people, we're here to help individuals reconnect with themselves through one-on-one therapy, educational tools, interactive workshops, webinars, and community experiences. We're not just here to listen we're here to guide, teach, and hold space for sustainable, intentional growth.",
      alignment: "right",
      gradient: "from-accent/20 to-primary/10"
    }
  ];

  const storySection = {
    title: "Our Story",
    content: "Beyond Balance was born from a simple yet powerful truth: that taking care of your mind shouldn't feel clinical, complicated, or reserved for moments of crisis. It should feel like something you get to do—not something you're forced to face alone. With our background in psychology and a deep understanding of what it means to navigate inner chaos, we knew people needed more than advice—they needed guidance they could actually connect with. We created a space centered on everyday mental wellness, offering tools, workshops, resources, and real conversations that meet you where you are. This didn't begin in a boardroom—it began with big dreams and honest hearts. And while we started small, our mission has always been big: To make mental well-being less of a taboo and more of a toolkit. To help people feel seen, safe, and supported without ever feeling like a 'problem to be solved.' This is more than a platform. It's a movement. And we're so glad you're here to grow with us.",
    gradient: "from-primary/15 to-accent/15"
  };

  return (
    <section className="py-32 bg-gradient-to-b from-background via-muted/10 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 space-y-6"
        >
          <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight">
            Our <span className="text-primary italic">Foundation</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Built on principles of accessibility, innovation, and genuine care
          </p>
        </motion.div>

        {/* Vision and Mission Sections */}
        <div className="space-y-32 mb-32">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row items-center gap-16 ${
                section.alignment === "right" ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Icon and Title */}
              <div className={`flex-1 text-center space-y-8 ${
                section.alignment === "right" ? "lg:text-right" : "lg:text-left"
              }`}>
                <div className="relative inline-block">
                  <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} rounded-full blur-xl scale-150`}></div>
                  <div className="relative inline-flex items-center justify-center w-24 h-24 bg-background/80 backdrop-blur-sm rounded-full border border-primary/20 shadow-xl">
                    <section.icon className="w-12 h-12 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-light text-foreground leading-tight">
                  {section.title}
                </h3>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className={`bg-gradient-to-br ${section.gradient} backdrop-blur-sm p-12 rounded-3xl shadow-xl border border-primary/10 hover:shadow-2xl transition-all duration-500`}
                >
                  <p className="text-lg text-foreground/90 leading-relaxed font-light">
                    {section.content}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Our Story Section - Centered with Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center space-y-12"
        >
          <h3 className="text-4xl md:text-5xl font-light text-foreground leading-tight">
            {storySection.title}
          </h3>
          
          {/* Image Box */}
          <div className="flex justify-center">
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative w-full max-w-2xl aspect-[16/10] rounded-3xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://cyzofnicsspmbsqdrkla.supabase.co/storage/v1/object/public/landing-assets/c897adfa5956ab3da0694237924a041b.jpg"
                alt="Our story and foundation"
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${storySection.gradient} opacity-20`}></div>
            </motion.div>
          </div>
          
          {/* Story Content */}
          <div className="max-w-4xl mx-auto">
            <motion.div 
              whileHover={{ y: -5 }}
              className={`bg-gradient-to-br ${storySection.gradient} backdrop-blur-sm p-12 rounded-3xl shadow-xl border border-primary/10 hover:shadow-2xl transition-all duration-500`}
            >
              <p className="text-lg text-foreground/90 leading-relaxed font-light">
                {storySection.content}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMissionStorySection;
