import { useI18n } from "@/i18n/I18nContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const MissionSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useI18n();

  return (
    <section id="mission" className="px-6 py-24 md:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <h2 className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-foreground">
          {t("mission.title")}
        </h2>
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
    </section>
  );
};

export default MissionSection;
