import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const Privacy = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your privacy and confidentiality are our top priorities, especially in the sensitive domain of mental health and wellness.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="prose prose-lg max-w-none"
          >
            {/* Effective Date */}
            <motion.section variants={fadeInUp} className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Effective Date: August 7, 2025</h2>
            </motion.section>

            {/* Introduction */}
            <motion.div variants={fadeInUp} className="mb-8">
              <p className="text-foreground leading-relaxed">
                Beyond Balance ("we", "us", or "our") respects the privacy and confidentiality of all individuals engaging with our services, particularly in the sensitive domain of mental health and emotional wellness. This Privacy Policy sets out the manner in which we collect, use, disclose, store, and protect your personal information through our website and associated services (collectively referred to as the "Platform").
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                This Privacy Policy applies to all users of our services, including workshop participants, therapy clients, website visitors, and others interacting with us.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                By accessing our website, registering for services, or otherwise providing information to us, you acknowledge and agree to the terms of this Privacy Policy.
              </p>
            </motion.div>

            <Separator className="my-8" />

            {/* Section 1: Definitions */}
            <motion.section variants={fadeInUp} className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Definitions</h2>
              <p className="text-foreground leading-relaxed mb-4">
                For the purposes of this Privacy Policy:
              </p>
              <div className="space-y-4 ml-4">
                <p className="text-foreground leading-relaxed">
                  <strong>"Personal Information"</strong> shall mean any information that can be used to identify an individual directly or indirectly, including but not limited to name, contact details, demographic data, payment information, and mental health disclosures.
                </p>
                <p className="text-foreground leading-relaxed">
                  <strong>"Sensitive Personal Data or Information" (SPDI)</strong> refers to information including but not limited to mental or emotional health conditions, medical history, and any other personal content shared in forms, during therapy sessions, or via our questionnaires.
                </p>
                <p className="text-foreground leading-relaxed">
                  <strong>"User" or "You"</strong> refers to any individual accessing, using, or registering for services on our Platform.
                </p>
              </div>
              <p className="text-foreground leading-relaxed mt-4">
                This Policy is in alignment with applicable Indian laws, including the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and ethical obligations relevant to mental health practice in India.
              </p>
            </motion.section>

            <Separator className="my-8" />

            {/* Section 2: Information We Collect */}
            <motion.section variants={fadeInUp} className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <p className="text-foreground leading-relaxed mb-4">
                We may collect the following categories of personal information:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="text-foreground leading-relaxed">
                  <strong>Identity and Contact Information:</strong> Full name, phone number, email address, and location details.
                </li>
                <li className="text-foreground leading-relaxed">
                  <strong>Demographic Information:</strong> Age, gender, city, occupation, and other self-reported data.
                </li>
                <li className="text-foreground leading-relaxed">
                  <strong>Mental Health-Related Disclosures:</strong> Information voluntarily shared through our self-assessment forms, therapy intake forms, or direct communication about your psychological state or concerns.
                </li>
                <li className="text-foreground leading-relaxed">
                  <strong>Payment Details:</strong> Transaction-related information including UPI IDs, bank account or card data (as applicable), only when payments are facilitated.
                </li>
                <li className="text-foreground leading-relaxed">
                  <strong>Device and Technical Information:</strong> IP address, browser type, date/time of access, and limited cookies (only internal; no third-party trackers used).
                </li>
                <li className="text-foreground leading-relaxed">
                  <strong>Content of Communication:</strong> Any content voluntarily submitted via contact forms, emails, or surveys.
                </li>
              </ul>
            </motion.section>

            <Separator className="my-8" />

            {/* Section 3: Means of Collection */}
            <motion.section variants={fadeInUp} className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Means of Collection</h2>
              <p className="text-foreground leading-relaxed mb-4">
                We collect personal and sensitive data through the following means:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="text-foreground leading-relaxed">
                  Voluntary submission via our website forms, therapy questionnaires, or resource downloads
                </li>
                <li className="text-foreground leading-relaxed">
                  Information shared during phone consultations or therapy intake discussions
                </li>
                <li className="text-foreground leading-relaxed">
                  Email correspondence initiated by you
                </li>
                <li className="text-foreground leading-relaxed">
                  Internal platform records (manual or digital) related to service registrations
                </li>
              </ul>
              <p className="text-foreground leading-relaxed mt-4">
                We do not use external advertising cookies, trackers, or data aggregators. All data collection is direct and deliberate.
              </p>
            </motion.section>

            <Separator className="my-8" />

            {/* Section 4: Purpose of Collection */}
            <motion.section variants={fadeInUp} className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Purpose of Collection and Use of Information</h2>
              <p className="text-foreground leading-relaxed mb-4">
                We collect and use your data for the following lawful purposes:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="text-foreground leading-relaxed">
                  To respond to your queries and connect you with appropriate services or professionals
                </li>
                <li className="text-foreground leading-relaxed">
                  To provide therapy, workshops, wellness retreats, or other mental health education offerings
                </li>
                <li className="text-foreground leading-relaxed">
                  To assess user needs and customize service offerings
                </li>
                <li className="text-foreground leading-relaxed">
                  To maintain service records, improve service quality, and deliver personalized mental wellness support
                </li>
                <li className="text-foreground leading-relaxed">
                  To facilitate payment processing and track service confirmations
                </li>
                <li className="text-foreground leading-relaxed">
                  To send relevant communications, including booking updates or service-related information
                </li>
                <li className="text-foreground leading-relaxed">
                  To ensure compliance with professional, ethical, and legal obligations related to mental health services
                </li>
                <li className="text-foreground leading-relaxed">
                  To comply with applicable laws, regulations, or legal processes, or where disclosure is mandated by law
                </li>
              </ul>
            </motion.section>

            <Separator className="my-8" />

            {/* Section 5: Storage and Security */}
            <motion.section variants={fadeInUp} className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Storage and Security of Data</h2>
              <p className="text-foreground leading-relaxed mb-4">
                All user data is stored in secure internal databases or cloud environments with restricted access.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                We have implemented reasonable technical and organizational security practices to protect your data against unauthorized access, modification, disclosure, or destruction, including:
              </p>
              <ul className="space-y-2 ml-4 mb-4">
                <li className="text-foreground leading-relaxed">Role-based access restrictions</li>
                <li className="text-foreground leading-relaxed">Password-protected records</li>
                <li className="text-foreground leading-relaxed">Encryption of sensitive information wherever applicable</li>
                <li className="text-foreground leading-relaxed">Confidentiality agreements with employees and professionals handling data</li>
              </ul>
              <p className="text-foreground leading-relaxed">
                Despite our best efforts, no data transmission over the internet is entirely secure. Users are advised to be cautious when sharing sensitive information online.
              </p>
            </motion.section>

            <Separator className="my-8" />

            {/* Section 6: Disclosure of Information */}
            <motion.section variants={fadeInUp} className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Disclosure of Information</h2>
              <p className="text-foreground leading-relaxed mb-4">
                We do not sell, rent, or trade your personal information.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                However, we may disclose your information under the following limited circumstances:
              </p>
              <ul className="space-y-2 ml-4 mb-4">
                <li className="text-foreground leading-relaxed">
                  To licensed mental health professionals engaged by Beyond Balance, solely for the purpose of providing services requested by you.
                </li>
                <li className="text-foreground leading-relaxed">
                  To parents or legal guardians of minors, in line with ethical requirements and to ensure appropriate care.
                </li>
                <li className="text-foreground leading-relaxed">
                  To internal administrative teams for scheduling, documentation, or client communication purposes.
                </li>
                <li className="text-foreground leading-relaxed">
                  To law enforcement or statutory bodies, if legally required, or if disclosure is necessary to protect life, property, or personal safety.
                </li>
              </ul>
              <p className="text-foreground leading-relaxed">
                All such disclosures are done under confidentiality and within the scope of relevant legal and ethical frameworks.
              </p>
            </motion.section>

            <Separator className="my-8" />

            {/* Section 7: Third-Party Tools */}
            <motion.section variants={fadeInUp} className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Third-Party Tools and Cookies</h2>
              <p className="text-foreground leading-relaxed mb-4">
                We do not use third-party advertising trackers such as Google Ads, Meta Pixel, or third-party CRM integrations.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                We may use limited internal cookies or session tools only for:
              </p>
              <ul className="space-y-2 ml-4 mb-4">
                <li className="text-foreground leading-relaxed">Remembering user preferences temporarily</li>
                <li className="text-foreground leading-relaxed">Simplifying form submissions</li>
                <li className="text-foreground leading-relaxed">Improving basic user experience</li>
              </ul>
              <p className="text-foreground leading-relaxed">
                These cookies do not track users across other platforms or websites. You may disable cookies in your browser settings.
              </p>
            </motion.section>

            <Separator className="my-8" />

            {/* Section 8: Minors and Parental Consent */}
            <motion.section variants={fadeInUp} className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Minors and Parental Consent</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Our services are open to individuals of all age groups. However:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="text-foreground leading-relaxed">
                  For minors (under 18 years of age), parental or legal guardian involvement is mandatory.
                </li>
                <li className="text-foreground leading-relaxed">
                  We do not knowingly collect sensitive data from minors without consent from their lawful guardian.
                </li>
                <li className="text-foreground leading-relaxed">
                  Any services availed by a minor will involve guardian oversight and involvement at every step.
                </li>
              </ul>
            </motion.section>

            <Separator className="my-8" />

            {/* Section 9: Data Retention */}
            <motion.section variants={fadeInUp} className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Data Retention</h2>
              <p className="text-foreground leading-relaxed mb-4">
                We retain user data only for as long as necessary to fulfill the purposes stated in this Privacy Policy or as required by applicable laws.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Criteria for determining retention periods include:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="text-foreground leading-relaxed">The duration of our relationship with you</li>
                <li className="text-foreground leading-relaxed">Legal obligations regarding therapy records and transactions</li>
                <li className="text-foreground leading-relaxed">Requirements for audit, legal defense, or professional obligations</li>
              </ul>
            </motion.section>

            <Separator className="my-8" />

            {/* Section 10: User Rights */}
            <motion.section variants={fadeInUp} className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. User Rights</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Currently, we do not provide users with an automated option to access, modify, or delete their personal data. However:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="text-foreground leading-relaxed">
                  If you have concerns about how your data is stored or used, you may write to us directly at <a href="mailto:support@beyondbalance.org.in" className="text-primary hover:underline">support@beyondbalance.org.in</a>.
                </li>
                <li className="text-foreground leading-relaxed">
                  All queries regarding correction or deletion of information will be reviewed on a case-by-case basis, subject to ethical and legal considerations.
                </li>
              </ul>
            </motion.section>

            <Separator className="my-8" />

            {/* Section 11: Consent to Communication */}
            <motion.section variants={fadeInUp} className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Consent to Communication</h2>
              <p className="text-foreground leading-relaxed mb-4">
                By engaging with us and sharing your contact information, you consent to receive:
              </p>
              <ul className="space-y-2 ml-4 mb-4">
                <li className="text-foreground leading-relaxed">
                  Emails or phone calls regarding your service requests
                </li>
                <li className="text-foreground leading-relaxed">
                  Communication for booking confirmations, reminders, or follow-ups
                </li>
                <li className="text-foreground leading-relaxed">
                  Occasional wellness-related updates (opt-out available via unsubscribe links)
                </li>
              </ul>
              <p className="text-foreground leading-relaxed">
                We do not spam. You may request to stop receiving communications at any time.
              </p>
            </motion.section>

            <Separator className="my-8" />

            {/* Section 12: Cross-Border Data Transfers */}
            <motion.section variants={fadeInUp} className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Cross-Border Data Transfers</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Our services and storage mechanisms are primarily based in India. If users engage with us from outside India, your data will be processed and stored in accordance with Indian data protection laws.
              </p>
              <p className="text-foreground leading-relaxed">
                By using our services, you consent to such transfer and storage.
              </p>
            </motion.section>

            <Separator className="my-8" />

            {/* Section 13: Amendments */}
            <motion.section variants={fadeInUp} className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Amendments to This Policy</h2>
              <p className="text-foreground leading-relaxed">
                This Privacy Policy may be updated or amended periodically to reflect changes in law, technology, or our practices. We will revise the "Effective Date" at the top when updates are made. We recommend reviewing this policy regularly to stay informed.
              </p>
            </motion.section>

            <Separator className="my-8" />

            {/* Section 14: Contact Us */}
            <motion.section variants={fadeInUp} className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">14. Contact Us</h2>
              <p className="text-foreground leading-relaxed mb-4">
                For questions, concerns, or complaints regarding this Privacy Policy or your data, please contact:
              </p>
              <div className="bg-muted/30 p-4 rounded-lg">
                <p className="text-foreground font-medium">Beyond Balance</p>
                <p className="text-foreground">
                  Email: <a href="mailto:support@beyondbalance.org.in" className="text-primary hover:underline">support@beyondbalance.org.in</a>
                </p>
              </div>
            </motion.section>

            <Separator className="my-8" />

            {/* Footer Statement */}
            <motion.div variants={fadeInUp} className="bg-primary/10 p-6 rounded-lg text-center">
              <p className="text-foreground leading-relaxed">
                "By using this website or engaging with our services, you agree to our{" "}
                <a href="/terms" className="text-primary hover:underline font-medium">Terms of Service</a> and <span className="text-pink-600 dark:text-pink-400 font-medium">Privacy Policy</span>."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
