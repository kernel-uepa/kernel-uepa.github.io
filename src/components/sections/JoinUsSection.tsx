import { community } from "@/config/community";
import { useI18n } from "@/i18n/I18nContext";
import { translations } from "@/i18n/translations";
import { Instagram, Linkedin, Twitter, MessageCircle, Youtube, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const socialPlatforms = [
  { key: "instagram", icon: Instagram, href: community.socials.instagram },
  { key: "linkedin", icon: Linkedin, href: community.socials.linkedin },
  { key: "x", icon: Twitter, href: community.socials.x },
  { key: "discord", icon: MessageCircle, href: community.socials.discord },
  { key: "youtube", icon: Youtube, href: community.socials.youtube },
  { key: "github", icon: Github, href: community.socials.github },
] as const;

const JoinUsSection = () => {
  const { t, locale } = useI18n();
  const socials = translations[locale].joinUs.socials as readonly { name: string; description: string }[];

  return (
    <section id="join" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-foreground"
        >
          {t("joinUs.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16 text-center text-muted-foreground max-w-2xl mx-auto"
        >
          {t("joinUs.subtitle")}
        </motion.p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socialPlatforms.map((platform, i) => {
            const social = socials[i];
            if (!social) return null;
            const Icon = platform.icon;
            return (
              <motion.a
                key={platform.key}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-foreground/20 hover:bg-card/80"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary transition-colors group-hover:border-foreground/20">
                  <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-semibold text-foreground">{social.name}</h3>
                    <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{social.description}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
