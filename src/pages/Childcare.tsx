import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/**
 * Image slots. Replace `src` with the real image paths (e.g. "/childcare-1.jpg")
 * and the placeholder boxes will turn into photos with the same tilt/border.
 */
const IMAGES = {
  leftTop: { src: "/childcare/blocks.jpg", alt: "Child building with wooden blocks" },
  leftBottom: { src: "/childcare/painting.jpg", alt: "Girl painting at an easel" },
  rightTop: {
    src: "/childcare/sensory-swing.jpg",
    alt: "Therapist playing with a child in a sensory swing",
  },
  rightBottom: { src: "/childcare/flashcards.jpg", alt: "Therapist using flashcards with a child" },
};

interface SlotProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageSlot = ({ src, alt, className = "" }: SlotProps) => (
  <div
    className={`absolute overflow-hidden rounded-3xl bg-white shadow-2xl ${className}`}
  >
    {src && <img src={src} alt={alt} className="h-full w-full object-cover" />}
  </div>
);

/** My Happy Space collaboration. */
const COLLAB = {
  logo: { src: "/childcare/my-happy-space-logo.png", alt: "My Happy Space logo" },
  gallery: [
    {
      src: "/childcare/my-happy-space-wall.webp",
      alt: "Framed artwork and a handprint tree on the My Happy Space wall",
    },
    {
      src: "/childcare/my-happy-space-classroom.webp",
      alt: "My Happy Space classroom with wooden tables and an elephant mural",
    },
    {
      src: "/childcare/my-happy-space-playroom.webp",
      alt: "My Happy Space play area with toys and storage bins",
    },
  ],
};

const collabParagraphs = [
  "At My Happy Space Preschool & Daycare, we believe that the early years are the foundation of a child’s lifelong learning and development. Our boutique preschool offers a safe, nurturing, and stimulating environment where every child is valued as an individual. Through a play-based, child-centred approach, we foster curiosity, creativity, confidence, independence, and holistic growth across cognitive, language, social-emotional, physical, and creative domains.",
  "Our collaboration with Beyond Balance Childcare brings together high-quality early childhood education and specialised developmental support under one roof. This partnership enables timely developmental screening, expert guidance for parents and educators, and access to multidisciplinary therapeutic services whenever needed. Together, we are committed to creating an inclusive environment where every child receives the support, opportunities, and encouragement to reach their fullest potential.",
];

const childcareItems = [
  "Assessments",
  "Therapy for children:",
  "Behavioural therapy",
  "Speech therapy",
  "Remedial therapy",
];

const parentCareItems = [
  "Parent group sessions",
  "Parent guidance workshops",
  "Parent therapy",
  "Parent consultation",
];

const paragraphs = [
  "Beyond Balance is a mental wellness organization dedicated to promoting emotional well-being and supporting healthy development for children, families, and communities. With specialized expertise in childcare, the organization focuses on understanding and addressing the emotional, behavioral, and developmental needs of children through compassionate, evidence-based approaches.",
  "The organization believes that strong emotional foundations are essential for a child’s growth and future success. Beyond Balance takes a holistic and child-centered approach, recognizing that every child’s experiences, abilities, and developmental journey are unique. Supported by a team of experienced professionals and experts, the organization is committed to helping children with diverse needs while ensuring that every child receives care that respects their individual strengths and challenges.",
  "Beyond Balance works closely with parents, caregivers, educators, and communities to create nurturing environments where children feel safe, supported, and empowered. Through tailored support and guidance designed around each child’s unique needs and circumstances, Beyond Balance strives to foster healthier relationships and brighter futures for children and families.",
];

/** Card styling matches the cards on the Services page (see components/ServiceCard.tsx). */
const InfoCard = ({
  title,
  items,
  index,
  color,
}: {
  title: string;
  items: string[];
  index: number;
  color: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.15 }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="group flex-1"
  >
    <Card style={{ backgroundColor: color }} className="relative h-full overflow-hidden rounded-3xl border-border/30 backdrop-blur-lg transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <CardHeader className="relative z-10 pb-6 text-center">
        <CardTitle className="text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="relative z-10">
        <ul className="space-y-3">
          {items.map((item, idx) => (
            <motion.li
              key={item}
              className="flex items-center text-lg font-light text-foreground"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r from-primary to-secondary" />
              {item}
            </motion.li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </motion.div>
);

const Childcare = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      <main>
        {/* Hero + intro copy on a pink fade */}
        <section className="relative overflow-hidden bg-gradient-to-b from-bubblegum-pink/50 via-bubblegum-pink/20 to-white pt-40 pb-16">
          {/* Side photos: only on wide screens, large and bleeding off the page edges */}
          <div className="pointer-events-none absolute inset-0 hidden xl:block">
            <ImageSlot
              {...IMAGES.leftTop}
              className="-left-10 top-[18rem] h-64 w-72 -rotate-[7deg]"
            />
            <ImageSlot
              {...IMAGES.leftBottom}
              className="-left-4 top-[36rem] h-64 w-72 rotate-[3deg]"
            />
            <ImageSlot
              {...IMAGES.rightTop}
              className="-right-8 top-[17rem] h-64 w-72 rotate-[5deg]"
            />
            <ImageSlot
              {...IMAGES.rightBottom}
              className="-right-3 top-[35rem] h-64 w-72 -rotate-[3deg]"
            />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl px-6">
            <h1 className="mb-14 text-center text-5xl font-light uppercase md:text-6xl">
              Childcare
              <span className="block font-bold text-primary">Services</span>
            </h1>

            {/* Same box as the Founders section on the About page */}
            <div className="relative">
              <div className="rounded-[2rem] border border-primary/10 bg-gradient-to-br from-background to-card/50 p-8 shadow-2xl backdrop-blur-sm md:rounded-[3rem] md:p-12">
                <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent/10 to-primary/10 md:rounded-[3.5rem]" />

                <div className="space-y-6 text-base font-light leading-relaxed text-muted-foreground md:text-lg">
                  {paragraphs.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>

                {/* Below xl the side photos are hidden, so show them here as a grid */}
                <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 xl:hidden">
                  {Object.values(IMAGES).map((img) => (
                    <div
                      key={img.alt}
                      className="aspect-[4/3] overflow-hidden rounded-3xl bg-white shadow-2xl"
                    >
                      <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>

                <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-accent/20 blur-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Service cards */}
        <section className="mx-auto max-w-3xl px-6 pb-12 pt-0">
          <div className="flex flex-col gap-6 md:flex-row md:gap-8">
            <InfoCard index={0} color="#C1C1E2" title="Childcare" items={childcareItems} />
            <InfoCard index={1} color="#D1BDDB" title="Parent Care" items={parentCareItems} />
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-32 pt-6 text-center">
          <Link to="/contact" className="inline-block">
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button
                size="lg"
                className="rounded-full bg-primary px-12 py-6 text-xl font-light text-primary-foreground shadow-xl transition-all duration-300 ease-out hover:bg-primary/90 hover:shadow-2xl"
              >
                Book Your Consultation Today
              </Button>
            </motion.div>
          </Link>
        </section>

        {/* Collaborations */}
        <section className="pb-36">
          <div className="relative z-10 mx-auto max-w-6xl px-6">
            <div className="mb-16 space-y-6 text-center">
              <h2 className="text-3xl font-light leading-tight text-black sm:text-4xl md:text-6xl">
                Collaborations
              </h2>
              <div className="mx-auto h-1 w-32 rounded-full bg-gradient-to-r from-primary to-accent" />
            </div>

            <div className="relative mx-auto max-w-3xl">
              <div className="rounded-[2rem] border border-primary/10 bg-gradient-to-br from-background to-card/50 p-8 shadow-2xl backdrop-blur-sm md:rounded-[3rem] md:p-12">
                <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent/10 to-primary/10 md:rounded-[3.5rem]" />

                <div className="mb-8 flex flex-col items-center gap-6 text-center md:flex-row md:gap-8 md:text-left">
                  {COLLAB.logo.src && (
                    <img
                      src={COLLAB.logo.src}
                      alt={COLLAB.logo.alt}
                      className="h-auto w-52 flex-shrink-0 object-contain md:w-64"
                    />
                  )}
                  <h3 className="text-4xl font-light leading-tight text-primary md:text-5xl">
                    My Happy Space Preschool &amp; Daycare
                  </h3>
                </div>

                <div className="space-y-6 text-base font-light leading-relaxed text-muted-foreground md:text-lg">
                  {collabParagraphs.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>

                <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-accent/20 blur-xl" />
              </div>
            </div>
          </div>

          {/* Gallery: three photos across the page, scrolls sideways on small screens */}
          <div className="overflow-x-auto px-6 pb-24 pt-16">
            <div className="mx-auto flex max-w-7xl gap-6">
              {COLLAB.gallery.map((img, i) => (
                <div
                  key={i}
                  className="aspect-[3/2] min-w-[16rem] flex-1 overflow-hidden rounded-3xl bg-white shadow-2xl"
                >
                  <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Childcare;
