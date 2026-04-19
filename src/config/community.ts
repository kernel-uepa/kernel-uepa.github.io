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
    whatsapp: "https://chat.whatsapp.com/HVECWIERsiM1ki1NamlYpo",
    youtube: "https://youtube.com/@kernel-uepa",
    github: "https://github.com/kernel-uepa",
  },

  members: {
    stats: [
      { value: "54" },
      { value: "1" },
      { value: "1" },
      { value: "2" },
    ],
    leadership: [
      { name: "Jorge Hermes", role: "President", photo: "https://avatars.githubusercontent.com/u/91022739?v=4", socials: { linkedin: "https://www.linkedin.com/in/jhermesn/", github: "https://github.com/jhermesn" } },
      { name: "João Vitor", role: "Design and Branding Lead", photo: "https://avatars.githubusercontent.com/u/141349338?v=4", socials: { linkedin: "https://www.linkedin.com/in/joaovitor-reis/", github: "https://github.com/jotavedreis" } },
      { name: "Thaylan Fonseca", role: "Events and Workshops Lead", photo: "https://avatars.githubusercontent.com/u/196565378?v=4", socials: { linkedin: "https://www.linkedin.com/in/thaylanbf1/", github: "https://github.com/thaylanbf1" } },
      { name: "Ryan Ricardo", role: "Partnership Lead", photo: "https://avatars.githubusercontent.com/u/140509330?v=4", socials: { linkedin: "https://www.linkedin.com/in/theunrealryan/", github: "https://github.com/theunrealryan" } },
      { name: "Ryan Santana", role: "Community Manager", photo: "https://avatars.githubusercontent.com/u/166767290?v=4", socials: { linkedin: "https://www.linkedin.com/in/ryan-souza-santana-785a09293/", github: "https://github.com/Ryan-S-S" } },
      { name: "Luis Felipe", role: "Tech Lead", photo: "https://avatars.githubusercontent.com/u/255732559?v=4", socials: { linkedin: "https://www.linkedin.com/in/luis-mendes-66b245380/", github: "https://github.com/MendesFl" } },
      { name: "Lucas", role: "Lorem Ipsum", photo: "https://i.pravatar.cc/300?img=15", socials: { linkedin: "#", github: "#" } },
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
    { image: "https://devsnorte.com/icons/logo.svg", link: "https://devsnorte.com/pt" },
    { image: "https://awscc-uepa.github.io/cc-logo.png", link: "https://awscc-uepa.github.io/" },
    { image: "/caesoft.png", link: "https://www.instagram.com/caesoft.uepa/" }, //Mudar para logo online, por enquanto coloquei o logo baixado no /src/test
    { image: "/caecomp.png", link: "https://linktr.ee/caecomp.ufpa" },
  ],

  location: {
    venue: "UEPA — Campus XXII Ananindeua",
    address: "MH4R+7Q, Avenida Independência, S/N",
    city: "Ananindeua, Pará — Brasil",
  },

} as const;
