import { community } from "@/config/community";
import { useI18n } from "@/i18n/I18nContext";
import { translations } from "@/i18n/translations";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";

const WorkSection = () => {
  const { t, locale } = useI18n();
  const projects = community.projects;
  const configEvents = community.events;
  const events = translations[locale].events.items as readonly { title: string; date: string; description: string }[];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const pauseTimeout = useRef<ReturnType<typeof setTimeout>>();

  const total: number = configEvents.length;

  if (total === 0) {
    return null;
  }

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent(((index % total) + total) % total);
  }, [total]);

  const handleManualMove = useCallback((index: number, dir: number) => {
    goTo(index, dir);
    setPaused(true);
    if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
    pauseTimeout.current = setTimeout(() => setPaused(false), 5000);
  }, [goTo]);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(interval);
  }, [paused, total]);

  useEffect(() => {
    return () => { if (pauseTimeout.current) clearTimeout(pauseTimeout.current); };
  }, []);

  const event = configEvents[current];
  const translated = events[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section id="work" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center text-sm font-semibold uppercase tracking-widest text-foreground"
        >
          {t("work.title")}
        </motion.h2>

        {/* Projects grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-foreground/20"
            >
              <div className="mb-3 flex items-start justify-between">
                <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
              <p className="mb-4 flex-1 text-sm text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="border-border bg-secondary text-muted-foreground text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Events subtitle */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground"
        >
          {t("events.title")}
        </motion.h3>

        {/* Events carousel */}
        <div className="relative overflow-hidden rounded-xl border border-border bg-card">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex flex-col md:flex-row"
            >
              <div className="relative h-56 w-full md:h-auto md:w-1/2 shrink-0">
                <img
                  src={event.image}
                  alt={translated?.title ?? ""}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center p-6 md:p-10 flex-1">
                <span className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {translated?.date}
                </span>
                <h3 className="mb-3 text-xl font-bold text-foreground md:text-2xl">
                  {translated?.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {translated?.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => handleManualMove(current - 1, -1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-foreground/10"
            aria-label="Previous event"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => handleManualMove(current + 1, 1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-foreground/10"
            aria-label="Next event"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {configEvents.map((_, i) => (
              <button
                key={i}
                onClick={() => handleManualMove(i, i > current ? 1 : -1)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-foreground" : "w-1.5 bg-foreground/30"
                }`}
                aria-label={`Go to event ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
