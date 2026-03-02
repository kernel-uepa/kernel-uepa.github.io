import { useI18n } from "@/i18n/I18nContext";
import { useEffect } from "react";
import { community } from "@/config/community";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { translations } from "@/i18n/translations";

const TermsPage = () => {
  const { locale } = useI18n();
  const page = translations[locale].termsPage;
  const back = translations[locale].backToHome;

  useEffect(() => {
    document.title = `${page.title} — ${community.name}`;
  }, [page.title]);

  return (
    <div className="grain-overlay min-h-screen bg-background">
      <main className="mx-auto max-w-3xl px-6 py-20">
        <Link
          to="/"
          className="mb-12 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {back}
        </Link>
        <article>
          <h1 className="mb-2 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {page.title}
          </h1>
          <p className="mb-12 text-sm text-muted-foreground">
            {page.lastUpdated}: {page.date}
          </p>
          <div className="space-y-8">
            {page.sections.map((section, i) => (
              <section key={i}>
                <h2 className="mb-3 text-lg font-semibold text-foreground">{section.title}</h2>
                <p className="leading-relaxed text-muted-foreground">{section.content}</p>
              </section>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
};

export default TermsPage;
