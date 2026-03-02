import { useState, useEffect } from "react";
import { useI18n } from "@/i18n/I18nContext";
import { community } from "@/config/community";
import { motion } from "framer-motion";
import { ExternalLink, Calendar, Loader2 } from "lucide-react";

interface TrelloCard {
  id: string;
  name: string;
  desc: string;
  due: string | null;
  url: string;
  labels: { name: string; color: string }[];
}

const labelColorMap: Record<string, string> = {
  green: "bg-emerald-500/20 text-emerald-400",
  yellow: "bg-yellow-500/20 text-yellow-400",
  orange: "bg-orange-500/20 text-orange-400",
  red: "bg-red-500/20 text-red-400",
  purple: "bg-purple-500/20 text-purple-400",
  blue: "bg-blue-500/20 text-blue-400",
  sky: "bg-sky-500/20 text-sky-400",
  lime: "bg-lime-500/20 text-lime-400",
  pink: "bg-pink-500/20 text-pink-400",
  black: "bg-foreground/20 text-foreground",
};

const UpcomingSection = () => {
  const { t } = useI18n();
  const [cards, setCards] = useState<TrelloCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const boardId = community.trello?.boardId;
    if (!boardId) {
      setLoading(false);
      return;
    }

    fetch(`https://api.trello.com/1/boards/${boardId}/cards?fields=name,desc,due,url,labels`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data: TrelloCard[]) => {
        // Sort by due date, cards without due date go last
        const sorted = data.sort((a, b) => {
          if (!a.due && !b.due) return 0;
          if (!a.due) return 1;
          if (!b.due) return -1;
          return new Date(a.due).getTime() - new Date(b.due).getTime();
        });
        setCards(sorted);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (!community.trello?.boardId) return null;

  return (
    <section id="upcoming" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center text-sm font-semibold uppercase tracking-widest text-foreground"
        >
          {t("upcoming.title")}
        </motion.h2>

        {loading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        )}

        {error && (
          <p className="text-center text-sm text-muted-foreground">
            {t("upcoming.error")}
          </p>
        )}

        {!loading && !error && cards.length === 0 && (
          <p className="text-center text-sm text-muted-foreground">
            {t("upcoming.empty")}
          </p>
        )}

        {!loading && !error && cards.length > 0 && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, i) => (
              <motion.a
                key={card.id}
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-foreground/20"
              >
                <div className="mb-2 flex items-start justify-between gap-2">
                  <h3 className="text-sm font-semibold text-foreground">{card.name}</h3>
                  <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>

                {card.desc && (
                  <p className="mb-3 flex-1 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                    {card.desc}
                  </p>
                )}

                <div className="mt-auto flex flex-wrap items-center gap-2">
                  {card.due && (
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {new Date(card.due).toLocaleDateString()}
                    </span>
                  )}
                  {card.labels.map((label) => (
                    <span
                      key={label.name}
                      className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                        labelColorMap[label.color] || "bg-foreground/10 text-muted-foreground"
                      }`}
                    >
                      {label.name}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default UpcomingSection;
