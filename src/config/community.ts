// ============================================================
// COMMUNITY CONFIG — Language-neutral data only
// All titles, descriptions, and labels are in src/i18n/*.ts
// ============================================================

export const community = {
  name: "KERNEL",
  logo: "/kernel-logo.png",
  logoIsImage: true,
  accentColor: "0 0% 100%",
  accentColorHex: "#ffffff",

  socials: {
    instagram: "https://instagram.com/kernel.uepa",
    linkedin: "https://linkedin.com/company/kernel-uepa",
    x: "https://x.com/kernel",
    discord: "https://discord.gg/kernel",
    youtube: "https://youtube.com/@kernel-uepa",
    github: "https://github.com/kernel-uepa",
  },

  members: {
    stats: [
      { value: "60" },
      { value: "1" },
      { value: "1" },
      { value: "2" },
    ],
    leadership: [
      { name: "Jorge Hermes", role: "President", photo: "https://i.pravatar.cc/300?img=11", socials: { linkedin: "#", github: "#" } },
      { name: "João Victor", role: "Design and Branding Lead", photo: "https://i.pravatar.cc/300?img=12", socials: { linkedin: "#", github: "#" } },
      { name: "Thaylan Fonseca", role: "Events and Workshops Lead", photo: "https://i.pravatar.cc/300?img=5", socials: { linkedin: "#", github: "#" } },
      { name: "Ryan Ricardo", role: "Partnership Lead", photo: "https://i.pravatar.cc/300?img=32", socials: { linkedin: "#", github: "#" } },
      { name: "Ryan Santana", role: "Community Manager", photo: "https://i.pravatar.cc/300?img=13", socials: { linkedin: "#", github: "#" } },
      { name: "Luis Felipe", role: "Tech Lead", photo: "https://i.pravatar.cc/300?img=14", socials: { linkedin: "#", github: "#" } },
    ],
  },

  projects: [
    { title: "CampusConnect", description: "A platform connecting students with campus events and clubs in real-time.", tags: ["React", "Node.js", "PostgreSQL"], link: "#" },
    { title: "StudyBuddy AI", description: "An AI-powered study companion that generates quizzes from your notes.", tags: ["Python", "OpenAI", "FastAPI"], link: "#" },
    { title: "OpenLab", description: "Open-source toolkit for university lab equipment management.", tags: ["TypeScript", "Supabase", "IoT"], link: "#" },
    { title: "DevPortfolio", description: "A one-click portfolio generator for student developers.", tags: ["Next.js", "Tailwind", "Vercel"], link: "#" },
  ],

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

  location: {
    venue: "UEPA — Campus XXII Ananindeua",
    address: "MH4R+7Q, Avenida Independência, S/N",
    city: "Ananindeua, Pará — Brasil",
  },

  trello: {
    boardId: "JaLUjzT1",
  },
} as const;
