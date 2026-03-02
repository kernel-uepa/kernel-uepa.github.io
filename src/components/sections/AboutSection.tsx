import { useI18n } from "@/i18n/I18nContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useI18n();

  const renderHighlighted = (text: string) => {
    return text.replace(/<hl>(.*?)<\/hl>/g, '<span class="text-foreground font-semibold">$1</span>');
  };

  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        {/* Who We Are */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-foreground">
            {t("whoWeAre.title")}
          </h2>
          <p
            className="text-lg leading-relaxed text-muted-foreground md:text-xl"
            dangerouslySetInnerHTML={{ __html: renderHighlighted(t("whoWeAre.description")) }}
          />
        </motion.div>

        {/* Mission */}
        <div
          ref={ref}
          className={`mt-16 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <blockquote className="relative border-l-2 border-foreground/30 pl-8">
            <p className="text-2xl font-light leading-relaxed text-foreground md:text-3xl">
              "{t("mission.statement")}"
            </p>
          </blockquote>
          <div className="mt-8 text-center">
            <Link
              to="/manifesto"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("mission.readMore")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
