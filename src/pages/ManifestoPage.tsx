import { useI18n } from "@/i18n/I18nContext";
import { useEffect } from "react";
import { community } from "@/config/community";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { translations } from "@/i18n/translations";

const ManifestoPage = () => {
  const { locale } = useI18n();
  const page = translations[locale].manifestoPage;
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
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {page.title}
          </h1>
          <p className="mb-16 text-xl text-muted-foreground">{page.subtitle}</p>
          <div className="space-y-6">
            {page.paragraphs.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
};

export default ManifestoPage;
