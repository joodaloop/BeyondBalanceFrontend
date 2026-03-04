
import { 
  Users, 
  BookOpen, 
  Monitor, 
  FileText, 
  Heart, 
  Shield,
  Mountain
} from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: typeof Users;
  available: boolean;
  features: string[];
}

export interface ComingSoonService {
  title: string;
  description: string;
  icon: typeof Users;
  features: string[];
}

export const services: Service[] = [
  {
    title: "Workshops",
    description: "Interactive group sessions focusing on practical mental health skills and strategies",
    icon: Users,
    available: true,
    features: ["Small group settings", "Hands-on activities", "Take-home resources"]
  },
  {
    title: "Seminars & Webinars",
    description: "Educational sessions on mental health topics - both in-person seminars and convenient online webinars",
    icon: BookOpen,
    available: true,
    features: ["Expert speakers", "Interactive Q&A", "Live & recorded access"]
  },
  {
    title: "Handbooks & Guides",
    description: "Comprehensive guides and resources for self-directed learning and reference",
    icon: FileText,
    available: true,
    features: ["Digital & print options", "Step-by-step guides", "Regular updates"]
  },
  {
    title: "Ecosystem of Care",
    description: "Personalized therapy sessions with qualified mental health professionals",
    icon: Heart,
    available: true,
    features: ["One-on-one sessions", "Tailored approaches", "Confidential support"]
  },
  {
    title: "MHFA",
    description: "Mental Health First Aid training to recognize and respond to mental health crises",
    icon: Shield,
    available: true,
    features: ["Certification program", "Crisis intervention", "Support strategies"]
  },
  {
    title: "Retreats",
    description: "Immersive wellness experiences in peaceful settings for deep healing and renewal",
    icon: Mountain,
    available: true,
    features: ["Weekend getaways", "Guided activities", "Peaceful environments"]
  }
];

export const comingSoonServices: ComingSoonService[] = [
  {
    title: "Group Therapy Sessions",
    description: "Supportive group environments for shared healing and growth",
    icon: Users,
    features: ["Peer support", "Guided discussions", "Therapeutic activities"]
  },
  {
    title: "Mobile App",
    description: "Digital tools for daily mental health tracking and support",
    icon: Monitor,
    features: ["Mood tracking", "Meditation guides", "Progress monitoring"]
  }
];
