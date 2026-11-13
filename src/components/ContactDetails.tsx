import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, Phone, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactRow {
  icon: LucideIcon;
  label: string;
  value: string;
  /** Link on the value itself */
  href: string;
  action: { label: string; href: string; external?: boolean };
}

const rows: ContactRow[] = [
  {
    icon: Phone,
    label: "Call or WhatsApp",
    value: "+91 70210 25183",
    href: "tel:+917021025183",
    action: { label: "WhatsApp", href: "https://wa.me/917021025183", external: true },
  },
  {
    icon: Phone,
    label: "Call or WhatsApp",
    value: "+91 79776 15383",
    href: "tel:+917977615383",
    action: { label: "WhatsApp", href: "https://wa.me/917977615383", external: true },
  },
  {
    icon: Mail,
    label: "Email",
    value: "support@beyondbalance.org.in",
    href: "mailto:support@beyondbalance.org.in",
    action: { label: "Email us", href: "mailto:support@beyondbalance.org.in" },
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@beyondbalanceofficial",
    href: "https://www.instagram.com/beyondbalanceofficial",
    action: { label: "Follow", href: "https://www.instagram.com/beyondbalanceofficial", external: true },
  },
  {
    icon: Instagram,
    label: "Instagram (Childcare)",
    value: "@beyondbalancechildcare",
    href: "https://www.instagram.com/beyondbalancechildcare",
    action: { label: "Follow", href: "https://www.instagram.com/beyondbalancechildcare", external: true },
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Beyond Balance",
    href: "https://www.linkedin.com/company/beyond-balance-llp",
    action: { label: "Connect", href: "https://www.linkedin.com/company/beyond-balance-llp", external: true },
  },
];

const ContactDetails = () => {
  return (
    <section className="relative px-6 pb-24">
      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 space-y-6 text-center"
        >
          <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
            Reach out whichever way feels easiest. We'd love to hear from you.
          </p>
        </motion.div>

        {/* Details box, same style as the Founders box on the About page */}
        <div className="relative">
          <div className="rounded-[2rem] border border-primary/10 bg-gradient-to-br from-background to-card/50 p-6 shadow-2xl backdrop-blur-sm md:rounded-[3rem] md:p-10">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent/10 to-primary/10 md:rounded-[3.5rem]" />

            <ul className="divide-y divide-primary/10">
              {rows.map((row, index) => (
                <motion.li
                  key={row.value}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group flex items-center justify-between gap-4 py-5 first:pt-0 last:pb-0"
                >
                  <div className="flex items-center gap-5">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10 transition-transform duration-300 group-hover:scale-110">
                      <row.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-light text-muted-foreground">{row.label}</p>
                      <a
                        href={row.href}
                        {...(row.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="break-words text-lg font-light text-primary transition-colors duration-300 sm:text-foreground sm:hover:text-primary md:text-xl"
                      >
                        {row.value}
                      </a>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="hidden rounded-full bg-primary px-8 font-light text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl sm:inline-flex"
                  >
                    <a
                      href={row.action.href}
                      {...(row.action.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {row.action.label}
                    </a>
                  </Button>
                </motion.li>
              ))}
            </ul>

            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-accent/20 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
