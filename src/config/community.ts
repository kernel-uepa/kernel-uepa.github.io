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
    linkedin: "https://www.linkedin.com/in/kernel-uepa-01a830404/",
    whatsapp: "https://chat.whatsapp.com/HVECWIERsiM1ki1NamlYpo",
    youtube: "https://www.youtube.com/@kernel-uepa",
    github: "https://github.com/kernel-uepa",
  },

  members: {
    stats: [
      { value: "54" },
      { value: "1" },
      { value: "1" },
      { value: "1" },
    ],
    leadership: [
      { name: "Jorge Hermes", role: "President", photo: "https://avatars.githubusercontent.com/u/91022739?v=4", socials: { linkedin: "https://www.linkedin.com/in/jhermesn/", github: "https://github.com/jhermesn" } },
      { name: "João Vitor", role: "Design and Branding Lead", photo: "https://avatars.githubusercontent.com/u/141349338?v=4", socials: { linkedin: "https://www.linkedin.com/in/joaovitor-reis/", github: "https://github.com/jotavedreis" } },
      { name: "Thaylan Fonseca", role: "Events and Workshops Lead", photo: "https://avatars.githubusercontent.com/u/196565378?v=4", socials: { linkedin: "https://www.linkedin.com/in/thaylanbf1/", github: "https://github.com/thaylanbf1" } },
      { name: "Ryan Ricardo", role: "Partnership Lead", photo: "https://avatars.githubusercontent.com/u/140509330?v=4", socials: { linkedin: "https://www.linkedin.com/in/theunrealryan/", github: "https://github.com/theunrealryan" } },
      { name: "Ryan Santana", role: "Community Manager", photo: "/public/photos/foto-ryansantana.jpg", socials: { linkedin: "https://www.linkedin.com/in/ryan-souza-santana-785a09293/", github: "https://github.com/Ryan-S-S" } },
      { name: "Luis Felipe", role: "Tech Lead", photo: "/public/photos/foto-luisfelipe.jpg", socials: { linkedin: "https://www.linkedin.com/in/luis-mendes-66b245380/", github: "https://github.com/MendesFl" } },
      { name: "Lucas Rego", role: "Lorem Ipsum", photo: "/public/photos/foto-lucasrego.jpg", socials: { linkedin: "https://www.linkedin.com/in/lucas-rego-conduru-649a5a364/", } },
    ],
  },

  projects: [
    { title: "CampusConnect", description: "A platform connecting students with campus events and clubs in real-time.", tags: ["React", "Node.js", "PostgreSQL"], link: "#" },
    { title: "StudyBuddy AI", description: "An AI-powered study companion that generates quizzes from your notes.", tags: ["Python", "OpenAI", "FastAPI"], link: "#" },
    { title: "OpenLab", description: "Open-source toolkit for university lab equipment management.", tags: ["TypeScript", "Supabase", "IoT"], link: "#" },
    { title: "DevPortfolio", description: "A one-click portfolio generator for student developers.", tags: ["Next.js", "Tailwind", "Vercel"], link: "#" },
  ],

  events: [
    { image: "/public/photos/first-meetup-aws-cloud-club.jpg", link: "https://www.linkedin.com/posts/awscc-uepa_nosso-primeiro-encontro-da-aws-cloud-club-activity-7439630918862020608-w1eJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADxdpsABhdAEhrf1CtXAT6ZnC2jAKh-ruN4" },
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
