import { community } from "@/config/community";
import { useI18n } from "@/i18n/I18nContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";
import { Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

const statKeys = ["activeMembers", "projectsShipped", "eventsHeld", "workshops"] as const;

const AnimatedStat = ({ value, label, started }: { value: string; label: string; started: boolean }) => {
  const display = useCountUp(value, 1500, started);
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-foreground md:text-5xl">{display}</div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

const MembersSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: ref2, isVisible: isVisible2 } = useScrollAnimation(0.1);
  const { t } = useI18n();
  const { stats, leadership } = community.members;

  return (
    <section id="members" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center text-sm font-semibold uppercase tracking-widest text-foreground"
        >
          {t("members.title")}
        </motion.h2>

        <div
          ref={ref}
          className={`mb-20 grid grid-cols-2 gap-6 md:grid-cols-4 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {stats.map((stat, i) => (
            <AnimatedStat
              key={statKeys[i]}
              value={stat.value}
              label={t(`members.stats.${statKeys[i]}`)}
              started={isVisible}
            />
          ))}
        </div>

        <div
          ref={ref2}
          className={`grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-700 ${
            isVisible2 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {leadership.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col items-center rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-foreground/20"
            >
              <img src={member.photo} alt={member.name} className="mb-4 h-24 w-24 rounded-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0" />
              <h3 className="font-semibold text-foreground">{member.name}</h3>
              <p className="mb-3 text-sm text-muted-foreground">{member.role}</p>
              <div className="flex gap-2">
                {member.socials.linkedin && (
                  <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                    <Linkedin className="h-4 w-4" />
                  </a>
                )}
                {member.socials.github && (
                  <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                    <Github className="h-4 w-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
