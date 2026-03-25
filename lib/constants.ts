// ===== Type Definitions =====

export type Feature = {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  image?: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

export type PricingPlan = {
  id: string;
  name: string;
  price: number;
  billing: "monthly" | "yearly";
  description: string;
  features: string[];
  cta: { text: string; href: string };
  popular?: boolean;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
};

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
};

export type Stat = {
  id: string;
  value: string;
  label: string;
  icon?: string;
  trend?: "up" | "down" | "neutral";
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
  category?: string;
};

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

// ===== Section Types for Navigation =====

export type SectionType = {
  id: string;
  name: string;
  description: string;
  icon: string;
  variants: number;
  href: string;
};

export const SECTION_TYPES: SectionType[] = [
  {
    id: "hero",
    name: "Hero",
    description: "Opening sections with value proposition",
    icon: "Layout",
    variants: 10,
    href: "/sections/hero",
  },
  {
    id: "features",
    name: "Features",
    description: "Core features with icons and descriptions",
    icon: "Layers",
    variants: 10,
    href: "/sections/features",
  },
  {
    id: "testimonials",
    name: "Testimonials",
    description: "Customer reviews and social proof",
    icon: "MessageSquareQuote",
    variants: 10,
    href: "/sections/testimonials",
  },
  {
    id: "pricing",
    name: "Pricing",
    description: "Pricing tiers and comparison",
    icon: "CreditCard",
    variants: 5,
    href: "/sections/pricing",
  },
  {
    id: "cta",
    name: "CTA",
    description: "Call-to-action sections",
    icon: "MousePointerClick",
    variants: 5,
    href: "/sections/cta",
  },
  {
    id: "faq",
    name: "FAQ",
    description: "Frequently asked questions",
    icon: "HelpCircle",
    variants: 5,
    href: "/sections/faq",
  },
  {
    id: "newsletter",
    name: "Newsletter",
    description: "Email signup forms",
    icon: "Mail",
    variants: 5,
    href: "/sections/newsletter",
  },
  {
    id: "team",
    name: "Team",
    description: "Team members and about section",
    icon: "Users",
    variants: 5,
    href: "/sections/team",
  },
  {
    id: "blog",
    name: "Blog",
    description: "Blog and content feed sections",
    icon: "FileText",
    variants: 5,
    href: "/sections/blog",
  },
  {
    id: "stats",
    name: "Statistics",
    description: "Key metrics and achievements",
    icon: "BarChart3",
    variants: 5,
    href: "/sections/stats",
  },
  {
    id: "footer",
    name: "Footer",
    description: "Page footer with links and info",
    icon: "PanelBottom",
    variants: 5,
    href: "/sections/footer",
  },
];

// ===== Sample Data =====

export const sampleFeatures: Feature[] = [
  {
    id: "f1",
    title: "Lightning Fast",
    description:
      "Deploy in seconds with zero configuration. Built for speed from the ground up.",
    icon: "Zap",
  },
  {
    id: "f2",
    title: "Built for Scale",
    description:
      "Handle millions of requests without breaking a sweat. Auto-scaling included.",
    icon: "TrendingUp",
  },
  {
    id: "f3",
    title: "Real-time Analytics",
    description:
      "Understand your users with live dashboards and actionable insights.",
    icon: "BarChart3",
  },
  {
    id: "f4",
    title: "Secure by Default",
    description:
      "Enterprise-grade security with end-to-end encryption and compliance built in.",
    icon: "Shield",
  },
];

export const sampleTestimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "This platform completely transformed how we approach product development. The speed and reliability are unmatched.",
    author: "Sarah Johnson",
    role: "CEO",
    company: "TechCorp",
    avatar: "/avatars/avatar-1.jpg",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "We reduced our deployment time by 80% after switching. The developer experience is simply outstanding.",
    author: "Marcus Chen",
    role: "CTO",
    company: "ScaleUp Inc",
    avatar: "/avatars/avatar-2.jpg",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "The analytics features alone have saved us countless hours. We can now make data-driven decisions in real time.",
    author: "Elena Rodriguez",
    role: "VP of Engineering",
    company: "DataFlow",
    avatar: "/avatars/avatar-3.jpg",
    rating: 5,
  },
];

export const samplePricing: PricingPlan[] = [
  {
    id: "p1",
    name: "Starter",
    price: 29,
    billing: "monthly",
    description: "Perfect for small teams getting started",
    features: [
      "Up to 10 users",
      "5GB storage",
      "Basic analytics",
      "Email support",
      "API access",
    ],
    cta: { text: "Get Started", href: "#" },
  },
  {
    id: "p2",
    name: "Professional",
    price: 99,
    billing: "monthly",
    description: "For growing teams that need more power",
    features: [
      "Up to 50 users",
      "50GB storage",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Custom integrations",
      "Team management",
    ],
    cta: { text: "Start Free Trial", href: "#" },
    popular: true,
  },
  {
    id: "p3",
    name: "Enterprise",
    price: 299,
    billing: "monthly",
    description: "For large organizations with custom needs",
    features: [
      "Unlimited users",
      "500GB storage",
      "Custom analytics",
      "Dedicated support",
      "API access",
      "Custom integrations",
      "SSO & SAML",
      "SLA guarantee",
    ],
    cta: { text: "Contact Sales", href: "#" },
  },
];

export const sampleTeam: TeamMember[] = [
  {
    id: "tm1",
    name: "Alex Rivera",
    role: "CEO & Founder",
    bio: "Former engineering lead at a Fortune 500 company with 15 years of experience building scalable products.",
    avatar: "/avatars/team-1.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    id: "tm2",
    name: "Priya Sharma",
    role: "CTO",
    bio: "PhD in Computer Science. Passionate about distributed systems and making complex technology accessible.",
    avatar: "/avatars/team-2.jpg",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    id: "tm3",
    name: "Jordan Park",
    role: "Head of Design",
    bio: "Award-winning designer focused on creating intuitive, accessible experiences for millions of users.",
    avatar: "/avatars/team-3.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    id: "tm4",
    name: "Maya Thompson",
    role: "VP of Engineering",
    bio: "Systems architect who loves building reliable infrastructure. Previously led backend teams at top startups.",
    avatar: "/avatars/team-4.jpg",
    social: { linkedin: "#", github: "#" },
  },
];

export const sampleBlogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "How to Build Scalable APIs in 2024",
    excerpt:
      "Learn the latest patterns and best practices for building APIs that handle millions of requests per day.",
    category: "Engineering",
    date: "Mar 15, 2024",
    readTime: "8 min read",
    image: "/blog/blog-1.jpg",
    author: "Priya Sharma",
  },
  {
    id: "b2",
    title: "The Future of Design Systems",
    excerpt:
      "Why every product team needs a design system and how to build one that actually works.",
    category: "Design",
    date: "Mar 10, 2024",
    readTime: "6 min read",
    image: "/blog/blog-2.jpg",
    author: "Jordan Park",
  },
  {
    id: "b3",
    title: "Reducing Cloud Costs by 40%",
    excerpt:
      "Practical strategies for optimizing your cloud infrastructure without sacrificing performance.",
    category: "DevOps",
    date: "Mar 5, 2024",
    readTime: "10 min read",
    image: "/blog/blog-3.jpg",
    author: "Maya Thompson",
  },
];

export const sampleStats: Stat[] = [
  { id: "s1", value: "10M+", label: "Active Users", icon: "Users", trend: "up" },
  { id: "s2", value: "99.9%", label: "Uptime", icon: "Activity", trend: "up" },
  { id: "s3", value: "150+", label: "Countries", icon: "Globe", trend: "up" },
  { id: "s4", value: "50ms", label: "Avg Response", icon: "Zap", trend: "down" },
];

export const sampleFAQs: FAQItem[] = [
  {
    id: "faq1",
    question: "How does the billing work?",
    answer:
      "We charge monthly based on your usage tier. No hidden fees, no setup costs. You can upgrade or downgrade your plan at any time, and changes take effect in the next billing cycle.",
    category: "Billing",
  },
  {
    id: "faq2",
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely. You can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period.",
    category: "Billing",
  },
  {
    id: "faq3",
    question: "Is there a free plan available?",
    answer:
      "Yes! We offer a generous free tier that includes up to 3 users, 1GB of storage, and basic analytics. No credit card required to get started.",
    category: "Product",
  },
  {
    id: "faq4",
    question: "What kind of support do you offer?",
    answer:
      "All plans include email support. Professional plans get priority support with a 4-hour response time. Enterprise customers receive a dedicated account manager and 24/7 phone support.",
    category: "Support",
  },
  {
    id: "faq5",
    question: "Do you offer custom integrations?",
    answer:
      "Yes, starting from the Professional plan. We support REST APIs, webhooks, and pre-built integrations with 50+ popular tools. Enterprise customers can request custom integrations.",
    category: "Product",
  },
  {
    id: "faq6",
    question: "How secure is my data?",
    answer:
      "We take security seriously. All data is encrypted at rest and in transit. We are SOC 2 Type II certified and GDPR compliant. Enterprise plans include additional security features like SSO and audit logs.",
    category: "Support",
  },
];

export const sampleFooterColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Community", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
];
