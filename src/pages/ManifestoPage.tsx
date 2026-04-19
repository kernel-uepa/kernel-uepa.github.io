import { useI18n } from "@/i18n/useI18n.ts";
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
          <div className="space-y-12">
            {page.sections.map((section, idx) => (
              <section key={idx} className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  {section.title}
                </h2>

                {section.paragraphs && (
                  <div className="space-y-6">
                    {section.paragraphs.map((p, i) => (
                      <p key={i} className="text-lg leading-relaxed text-muted-foreground">
                        {p}
                      </p>
                    ))}
                  </div>
                )}

                {section.intro && (
                  <p className="text-lg leading-relaxed text-muted-foreground">{section.intro}</p>
                )}

                {section.subsections && (
                  <div className="space-y-8 ml-4 border-l-2 border-muted pl-6">
                    {section.subsections.map((subsection, sidx) => (
                      <div key={sidx} className="space-y-3">
                        <h3 className="text-lg font-semibold text-foreground">
                          {subsection.title}
                        </h3>
                        {subsection.content && (
                          <p className="text-base leading-relaxed text-muted-foreground">
                            {subsection.content}
                          </p>
                        )}
                        {subsection.items && (
                          <ul className="space-y-2">
                            {subsection.items.map((item, iidx) => (
                              <li
                                key={iidx}
                                className="text-base leading-relaxed text-muted-foreground flex gap-3"
                              >
                                <span className="text-muted-foreground mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
};

export default ManifestoPage;
