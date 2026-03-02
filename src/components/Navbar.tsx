import { community } from "@/config/community";
import { useState, useEffect, useCallback } from "react";
import { useI18n } from "@/i18n/I18nContext";
import { localeLabels, type Locale } from "@/i18n/translations";
import { Globe, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sectionKeys = [
  { id: "about", key: "nav.about" },
  { id: "members", key: "nav.members" },
  { id: "location", key: "nav.location" },
  { id: "work", key: "nav.work" },
  { id: "partners", key: "nav.partners" },
  { id: "faq", key: "nav.faq" },
  { id: "join", key: "nav.join", highlight: true },
] as const;

/** Scroll to a section by id without touching the URL hash. */
const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Navbar = () => {
  const { t, locale, setLocale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSectionClick = useCallback(
    (e: React.MouseEvent, id: string) => {
      e.preventDefault();
      scrollToSection(id);
      setMobileOpen(false);
    },
    [],
  );

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const offsets = sectionKeys.map(({ id }) => {
        const el = document.getElementById(id);
        return { id, top: el ? el.getBoundingClientRect().top : Infinity };
      });
      const current = offsets.find((o) => o.top > -200 && o.top < 400);
      if (current) setActive(current.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            {community.logoIsImage ? (
              <img src={community.logo} alt={community.name} className="h-8 w-8 object-contain" />
            ) : (
              <span className="text-xl">{community.logo}</span>
            )}
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 md:flex">
            {sectionKeys.map(({ id, key, ...rest }) => {
              const isHighlight = "highlight" in rest && rest.highlight;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => handleSectionClick(e, id)}
                  className={`text-xs uppercase tracking-widest transition-colors duration-200 ${
                    isHighlight
                      ? "rounded-full border border-border px-3 py-1.5 hover:border-foreground/30 " +
                        (active === id
                          ? "text-foreground border-foreground/30"
                          : "text-muted-foreground hover:text-foreground")
                      : active === id
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t(key)}
                </a>
              );
            })}

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                <Globe className="h-3.5 w-3.5" />
                {localeLabels[locale]}
              </button>
              {langOpen && (
                <>
                  <div className="fixed inset-0 z-30" onClick={() => setLangOpen(false)} />
                  <div className="absolute right-0 top-full z-40 mt-2 overflow-hidden rounded-lg border border-border bg-card shadow-lg">
                    {(Object.keys(localeLabels) as Locale[]).map((l) => (
                      <button
                        key={l}
                        onClick={() => {
                          setLocale(l);
                          setLangOpen(false);
                        }}
                        className={`block w-full px-4 py-2 text-left text-xs transition-colors ${
                          locale === l
                            ? "bg-foreground/10 text-foreground"
                            : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
                        }`}
                      >
                        {localeLabels[l]}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen(true)} className="md:hidden text-foreground p-1" aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile slide-out menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-72 border-l border-border bg-background p-6 flex flex-col"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="self-end mb-8 text-foreground"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="flex flex-col gap-4 flex-1">
                {sectionKeys.map(({ id, key }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => handleSectionClick(e, id)}
                    className={`text-sm uppercase tracking-widest transition-colors ${
                      active === id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {t(key)}
                  </a>
                ))}
              </div>

              {/* Language selector in mobile */}
              <div className="border-t border-border pt-4 flex gap-2">
                {(Object.keys(localeLabels) as Locale[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLocale(l);
                      setMobileOpen(false);
                    }}
                    className={`flex-1 rounded-lg py-2 text-xs font-medium transition-colors ${
                      locale === l
                        ? "bg-foreground text-background"
                        : "border border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {localeLabels[l]}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
