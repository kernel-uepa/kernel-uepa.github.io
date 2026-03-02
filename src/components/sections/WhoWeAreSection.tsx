import { useI18n } from "@/i18n/I18nContext";
import { motion } from "framer-motion";

const WhoWeAreSection = () => {
  const { t } = useI18n();

  const renderHighlighted = (text: string) => {
    return text.replace(/<hl>(.*?)<\/hl>/g, '<span class="text-foreground font-semibold">$1</span>');
  };

  return (
    <section id="who-we-are" className="px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-foreground">
          {t("whoWeAre.title")}
        </h2>
        <p
          className="text-lg leading-relaxed text-muted-foreground md:text-xl"
          dangerouslySetInnerHTML={{ __html: renderHighlighted(t("whoWeAre.description")) }}
        />
      </motion.div>
    </section>
  );
};

export default WhoWeAreSection;
