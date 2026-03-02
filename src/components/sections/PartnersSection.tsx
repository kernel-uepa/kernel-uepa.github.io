import { community } from "@/config/community";
import { useI18n } from "@/i18n/I18nContext";
import { translations } from "@/i18n/translations";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const PartnersSection = () => {
  const { t, locale } = useI18n();
  const partners = translations[locale].partners.items as readonly { name: string; description: string }[];
  const configPartners = community.partners;

  return (
    <section id="partners" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center text-sm font-semibold uppercase tracking-widest text-foreground"
        >
          {t("partners.title")}
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {configPartners.map((partner, i) => {
            const translated = partners[i];
            return (
              <motion.a
                key={partner.link}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex gap-5 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-foreground/20"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-secondary">
                  <img
                    src={partner.image}
                    alt={translated?.name ?? ""}
                    className="h-full w-full object-contain p-2 grayscale transition-all duration-300 group-hover:grayscale-0"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-semibold text-foreground">{translated?.name}</h3>
                    <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {translated?.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
