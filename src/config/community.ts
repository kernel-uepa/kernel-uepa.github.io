// ============================================================
// COMMUNITY CONFIG — Swap this file to rebrand for any community
// ============================================================

export const community = {
  name: "KERNEL",
  tagline: "A gente aprende, ensina e cria.",
  logo: "/kernel-logo.png",
  logoIsImage: true,
  accentColor: "0 0% 100%",
  accentColorHex: "#ffffff",

  socials: {
    instagram: "https://instagram.com/kernel",
    linkedin: "https://linkedin.com/company/kernel",
    x: "https://x.com/kernel",
    discord: "https://discord.gg/kernel",
    youtube: "https://youtube.com/@kernel",
    github: "https://github.com/kernel",
  },

  whoWeAre: {
    title: "Who We Are",
    description:
      "We are a student-led tech community passionate about open source, web development, AI, and everything in between. We believe in learning by doing — shipping real projects, mentoring each other, and pushing boundaries together.",
    highlights: ["open source", "web development", "AI", "learning by doing"],
  },

  mission: {
    title: "Our Mission",
    statement:
      "To empower every student with the tools, knowledge, and community to turn ideas into impactful technology — regardless of background or experience level.",
  },

  members: {
    title: "Our Members",
    stats: [
      { label: "Active Members", value: "120+" },
      { label: "Projects Shipped", value: "35" },
      { label: "Events Held", value: "50+" },
      { label: "Workshops", value: "80+" },
    ],
    leadership: [
      { name: "Alex Chen", role: "President", photo: "https://i.pravatar.cc/300?img=11", socials: { linkedin: "#", github: "#" } },
      { name: "Priya Sharma", role: "VP of Engineering", photo: "https://i.pravatar.cc/300?img=5", socials: { linkedin: "#", github: "#" } },
      { name: "Jordan Lee", role: "Design Lead", photo: "https://i.pravatar.cc/300?img=12", socials: { linkedin: "#", github: "#" } },
      { name: "Sam Rivera", role: "Community Manager", photo: "https://i.pravatar.cc/300?img=32", socials: { linkedin: "#", github: "#" } },
    ],
  },

  projects: {
    title: "Our Projects",
    items: [
      { title: "CampusConnect", description: "A platform connecting students with campus events and clubs in real-time.", tags: ["React", "Node.js", "PostgreSQL"], link: "#" },
      { title: "StudyBuddy AI", description: "An AI-powered study companion that generates quizzes from your notes.", tags: ["Python", "OpenAI", "FastAPI"], link: "#" },
      { title: "OpenLab", description: "Open-source toolkit for university lab equipment management.", tags: ["TypeScript", "Supabase", "IoT"], link: "#" },
      { title: "DevPortfolio", description: "A one-click portfolio generator for student developers.", tags: ["Next.js", "Tailwind", "Vercel"], link: "#" },
    ],
  },

  events: [
    { image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80" },
    { image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80" },
    { image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80" },
    { image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80" },
  ],

  partners: [
    { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png", link: "https://google.com" },
    { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/320px-Microsoft_logo_%282012%29.svg.png", link: "https://microsoft.com" },
    { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/320px-Amazon_logo.svg.png", link: "https://aws.amazon.com" },
    { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/GitLab_logo.svg/320px-GitLab_logo.svg.png", link: "https://gitlab.com" },
  ],

  joinUs: {
    title: "How to Join Us",
    ctaText: "Join Our Discord",
    ctaLink: "https://discord.gg/kernel",
  },

  location: {
    title: "Our Location",
    venue: "UEPA — Campus XXII Ananindeua",
    address: "MH4R+7Q, Avenida Independência, S/N",
    city: "Ananindeua, Pará — Brasil",
  },

  trello: {
    boardId: "JaLUjzT1", // Set your public Trello board short ID here, e.g. "aBcDeFgH"
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} KERNEL. All rights reserved.`,
  },
} as const;
