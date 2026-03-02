import { community } from "@/config/community";
import { useI18n } from "@/i18n/I18nContext";
import { translations } from "@/i18n/translations";
import { useTypewriter } from "@/hooks/useTypewriter";
import { Instagram, Linkedin, Twitter, MessageCircle, Youtube, Github, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const socialIcons = [
  { key: "instagram", icon: Instagram, href: community.socials.instagram },
  { key: "linkedin", icon: Linkedin, href: community.socials.linkedin },
  { key: "x", icon: Twitter, href: community.socials.x },
  { key: "discord", icon: MessageCircle, href: community.socials.discord },
  { key: "youtube", icon: Youtube, href: community.socials.youtube },
  { key: "github", icon: Github, href: community.socials.github },
];

const HeroSection = () => {
  const { locale } = useI18n();
  const taglines = translations[locale].hero.taglines;
  const typed = useTypewriter(taglines, 50, 25, 2500);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/[0.02] blur-[150px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8"
      >
        {community.logoIsImage ? (
          <img src={community.logo} alt={`${community.name} logo`} className="mx-auto h-36 w-36 object-contain md:h-48 md:w-48" />
        ) : (
          <span className="text-7xl md:text-8xl">{community.logo}</span>
        )}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mb-4 text-5xl font-bold tracking-[0.15em] text-foreground md:text-7xl lg:text-8xl"
      >
        {community.name}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mb-12 h-8 max-w-xl md:h-10"
      >
        <p className="text-lg text-muted-foreground md:text-xl">
          {typed}
          <span className="ml-0.5 inline-block w-[2px] h-5 md:h-6 bg-foreground/60 animate-pulse align-middle" />
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="flex items-center gap-4"
      >
        {socialIcons.map(({ key, icon: Icon, href }) => (
          <a key={key} href={href} target="_blank" rel="noopener noreferrer"
            className="group rounded-full border border-border p-3 transition-all duration-300 hover:border-foreground/40 hover:bg-foreground/5">
            <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
          </a>
        ))}
      </motion.div>

      <a href="#about" className="absolute bottom-10 animate-bounce text-muted-foreground transition-colors hover:text-foreground">
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  );
};

export default HeroSection;
