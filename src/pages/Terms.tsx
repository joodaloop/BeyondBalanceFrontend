import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Terms = () => {
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
              Terms of Service
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Please read these terms carefully before using our mental wellness services and platform.
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
                These Terms of Service ("Terms") constitute a binding agreement between you ("you", "your", or "User") and Beyond Balance, a mental wellness company ("we", "us", or "our"). By accessing, registering, or using our website and/or services, you acknowledge that you have read, understood, and agree to be bound by these Terms, along with our{" "}
                <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                If you do not agree with these Terms, you must not access or use our services.
              </p>
            </motion.div>

            <Separator className="my-8" />

            {/* Section 1: Scope of Services */}
            <motion.section variants={fadeInUp} className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Scope of Services</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Beyond Balance offers educational and therapeutic services in the field of mental wellness. Our services include, but are not limited to:
              </p>
              <ul className="space-y-2 ml-4 mb-4">
                <li className="text-foreground leading-relaxed">Mental health workshops and psychoeducational group sessions</li>
                <li className="text-foreground leading-relaxed">Webinars, seminars, and educational events</li>
                <li className="text-foreground leading-relaxed">Therapy services facilitated by licensed mental health professionals</li>
                <li className="text-foreground leading-relaxed">Retreats focused on emotional and psychological well-being</li>
                <li className="text-foreground leading-relaxed">Handbooks, guides, and downloadable self-help resources</li>
                <li className="text-foreground leading-relaxed">Mental Health First Aid (MHFA) awareness programs</li>
                <li className="text-foreground leading-relaxed">Free blog-style resources and general content for awareness</li>
              </ul>
              <p className="text-foreground leading-relaxed">
                All services are educational, preventative, or therapeutic in nature and are intended for individual well-being and personal development. We do not provide crisis intervention or emergency psychiatric services.
              </p>
            </motion.section>

            <Separator className="my-8" />

            {/* Section 2: Eligibility */}
            <motion.section variants={fadeInUp} className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Eligibility and User Responsibility</h2>
              <p className="text-foreground leading-relaxed mb-4">
                By using our services, you confirm that:
              </p>
              <ul className="space-y-2 ml-4 mb-4">
                <li className="text-foreground leading-relaxed">You are 18 years of age or older, or</li>
                <li className="text-foreground leading-relaxed">
                  If you are under 18, you are using the services with the knowledge, supervision, and explicit consent of your parent or legal guardian.
                </li>
              </ul>
              <p className="text-foreground leading-relaxed mb-4">
                You further agree that:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="text-foreground leading-relaxed">
                  You will provide true, complete, and accurate information when registering or engaging with our services.
                </li>
                <li className="text-foreground leading-relaxed">
                  You are solely responsible for any information submitted through our platform, including its legality and accuracy.
                </li>
                <li className="text-foreground leading-relaxed">
                  You will not use our services for any unlawful, harmful, or unauthorized purpose.
                </li>
              </ul>
            </motion.section>

            <Separator className="my-8" />

            {/* Section 3: Therapy Disclaimer */}
            <motion.section variants={fadeInUp} className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Therapy and MHFA Disclaimer</h2>
              <p className="text-foreground leading-relaxed mb-4">
                While some of our offerings include access to therapy through licensed professionals, Beyond Balance as an organization does not practice therapy directly. Therapy services are provided by independently licensed professionals affiliated with or contracted by us.
              </p>
              <p className="text-foreground leading-relaxed">
                Additionally, we do not provide emergency services. In the event of a psychiatric or medical emergency, you are advised to immediately contact local emergency services or helplines.
              </p>
            </motion.section>

            <Separator className="my-8" />

            {/* Section 4: Booking & Payments */}
            <motion.section variants={fadeInUp} className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Booking, Payments & Cancellations</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Most of our offerings are paid services, unless explicitly marked as free. The process currently works as follows:
              </p>
              <ul className="space-y-2 ml-4 mb-4">
                <li className="text-foreground leading-relaxed">Users register interest via website forms.</li>
                <li className="text-foreground leading-relaxed">Our team contacts you to confirm your request.</li>
                <li className="text-foreground leading-relaxed">
                  Upon confirmation, payment is collected through offline methods (bank transfer, UPI, etc.) unless and until an integrated payment gateway is introduced.
                </li>
              </ul>
              <p className="text-foreground leading-relaxed mb-4">Currently:</p>
              <ul className="space-y-2 ml-4 mb-4">
                <li className="text-foreground leading-relaxed">
                  Cancellations or rescheduling of any session, event, or retreat must be done manually by contacting our team.
                </li>
                <li className="text-foreground leading-relaxed">
                  No refunds are provided under any circumstances. We encourage you to carefully consider your availability before confirming any service.
                </li>
                <li className="text-foreground leading-relaxed">
                  Any future changes in this policy will be updated on this page and communicated via registered contact details.
                </li>
              </ul>
            </motion.section>

            <Separator className="my-8" />

            {/* Section 5: Intellectual Property */}
            <motion.section variants={fadeInUp} className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Intellectual Property Rights</h2>
              <p className="text-foreground leading-relaxed mb-4">
                All materials, content, and services on our website or shared during workshops (whether live, digital, or downloadable), including but not limited to:
              </p>
              <ul className="space-y-2 ml-4 mb-4">
                <li className="text-foreground leading-relaxed">Handbooks and guides</li>
                <li className="text-foreground leading-relaxed">Program names and module structures</li>
                <li className="text-foreground leading-relaxed">Videos, presentations, and event content</li>
                <li className="text-foreground leading-relaxed">Logos, icons, branding materials</li>
                <li className="text-foreground leading-relaxed">Blog posts and educational resources</li>
              </ul>
              <p className="text-foreground leading-relaxed mb-4">
                — are the intellectual property of Beyond Balance, unless otherwise credited.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                You are prohibited from copying, reproducing, redistributing, publishing, or modifying any such content, except where express written permission is provided.
              </p>
              <p className="text-foreground leading-relaxed">
                Limited, non-commercial personal use is allowed where explicitly stated.
              </p>
            </motion.section>

            <Separator className="my-8" />

            {/* Section 6: Confidentiality */}
            <motion.section variants={fadeInUp} className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Confidentiality and Data Use</h2>
              <p className="text-foreground leading-relaxed mb-4">
                All personal information shared with us — including mental health disclosures, contact information, and service preferences — are handled with utmost confidentiality in accordance with applicable privacy laws and ethical guidelines.
              </p>
              <p className="text-foreground leading-relaxed">
                Please refer to our{" "}
                <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                {" "}for full details on data collection, use, and protection.
              </p>
            </motion.section>

            <Separator className="my-8" />

            {/* Section 7: User Conduct */}
            <motion.section variants={fadeInUp} className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. User Conduct and Prohibited Uses</h2>
              <p className="text-foreground leading-relaxed mb-4">
                By using our services, you agree not to:
              </p>
              <ul className="space-y-2 ml-4 mb-4">
                <li className="text-foreground leading-relaxed">
                  Engage in any behavior that is abusive, threatening, harassing, or disrespectful toward our team, therapists, or other users
                </li>
                <li className="text-foreground leading-relaxed">
                  Use the platform to upload or share inappropriate, illegal, or infringing content
                </li>
                <li className="text-foreground leading-relaxed">
                  Impersonate another person or misrepresent your identity
                </li>
                <li className="text-foreground leading-relaxed">
                  Attempt to interfere with the platform's security, data systems, or other users' access
                </li>
                <li className="text-foreground leading-relaxed">
                  Use the services in any way that violates applicable law
                </li>
              </ul>
              <p className="text-foreground leading-relaxed">
                Violation of these terms may result in suspension or permanent termination of access to our services, without notice or refund.
              </p>
            </motion.section>

            <Separator className="my-8" />

            {/* Section 8: Limitation of Liability */}
            <motion.section variants={fadeInUp} className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Limitation of Liability</h2>
              <p className="text-foreground leading-relaxed mb-4">
                To the fullest extent permissible under applicable law:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="text-foreground leading-relaxed">
                  Beyond Balance and its associated professionals shall not be held liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of our services.
                </li>
                <li className="text-foreground leading-relaxed">
                  We do not guarantee any specific mental health outcome, as progress is dependent on individual circumstances.
                </li>
                <li className="text-foreground leading-relaxed">
                  Services are provided "as is" without warranties of any kind, express or implied.
                </li>
              </ul>
            </motion.section>

            <Separator className="my-8" />

            {/* Section 9: Indemnity */}
            <motion.section variants={fadeInUp} className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Indemnity</h2>
              <p className="text-foreground leading-relaxed">
                You agree to indemnify, defend, and hold harmless Beyond Balance, its founders, affiliates, team members, licensed professionals, and partners from any claims, liabilities, damages, or expenses (including legal fees) arising from your use of the services, violation of these Terms, or misuse of any content shared.
              </p>
            </motion.section>

            <Separator className="my-8" />

            {/* Section 10: Governing Law */}
            <motion.section variants={fadeInUp} className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Governing Law and Jurisdiction</h2>
              <p className="text-foreground leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of India, specifically the Indian Contract Act, 1872, the Information Technology Act, 2000, and relevant ethical guidelines by psychological and psychiatric governing bodies (e.g., RCI, MCI, APA-equivalent standards in India).
              </p>
              <p className="text-foreground leading-relaxed">
                Any disputes arising out of or in connection with these Terms shall fall under the jurisdiction of the courts located in India.
              </p>
            </motion.section>

            <Separator className="my-8" />

            {/* Section 11: Amendments */}
            <motion.section variants={fadeInUp} className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Amendments to Terms</h2>
              <p className="text-foreground leading-relaxed mb-4">
                We reserve the right to modify these Terms at any time, in our sole discretion. The most recent version will always be published on our website with an updated "Effective Date".
              </p>
              <p className="text-foreground leading-relaxed">
                Continued use of the platform after any change constitutes your agreement to the new terms.
              </p>
            </motion.section>

            <Separator className="my-8" />

            {/* Section 12: Contact */}
            <motion.section variants={fadeInUp} className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Contact Us</h2>
              <p className="text-foreground leading-relaxed mb-4">
                For questions, clarifications, or feedback about these Terms of Service, please reach out to us at:
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
                "By using this website or engaging with our services, you agree to our <span className="text-blue-600 dark:text-blue-400 font-medium">Terms of Service</span> and{" "}
                <Link to="/privacy" className="text-primary hover:underline font-medium">Privacy Policy</Link>."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
