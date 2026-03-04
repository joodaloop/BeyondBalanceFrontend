
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const ContactFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I get started with Beyond Balance?",
      answer: "Getting started is simple! Take our personality quiz above to discover your wellness personality, then explore our tailored resources. You can also book a consultation through our services page or contact us directly for personalized guidance."
    },
    {
      question: "Do you offer online sessions?",
      answer: "Yes! We offer both in-person and online sessions to accommodate different preferences and schedules. Our online platform is secure, user-friendly, and designed to provide the same quality of care as in-person sessions."
    },
    {
      question: "How long does it typically take to see results?",
      answer: "Results vary by individual and approach. Some people notice improvements within a few sessions, while others may take longer. We focus on sustainable, long-term changes rather than quick fixes, and we'll work with you to set realistic expectations and milestones."
    },
    {
      question: "Is my information kept confidential?",
      answer: "Absolutely. We adhere to strict confidentiality standards and HIPAA compliance. Your personal information and session content are kept completely private, with rare exceptions only in cases where there's immediate risk of harm."
    },
    {
      question: "What if I'm in crisis or having thoughts of self-harm?",
      answer: "If you're in immediate danger, please call 911 or go to your nearest emergency room. For crisis support, contact the 988 Suicide & Crisis Lifeline or text HOME to 741741. We also provide crisis resources and can help connect you with immediate support."
    },
    {
      question: "Can family members be involved in my care?",
      answer: "With your consent, we can involve family members or loved ones in your care plan. Family therapy and couples counseling are also available. We believe that support systems play a crucial role in wellness and recovery."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Artistic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage/5 via-background to-mint/10"></div>
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/6 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-accent/8 rounded-full blur-2xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-light text-foreground">
            FREQUENTLY ASKED
            <span className="block font-bold text-primary italic transform -rotate-1">
              QUESTIONS
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Find answers to common questions about our services, approach, and how we can support your wellness journey
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="backdrop-blur-sm bg-card/40 border border-primary/20 rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-primary/5 transition-colors duration-200"
              >
                <h3 className="text-lg font-medium text-foreground pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openFAQ === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-primary" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
