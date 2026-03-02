import { community } from "@/config/community";
import { useI18n } from "@/i18n/I18nContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Navigation } from "lucide-react";

// UEPA Campus XXII — Ananindeua, PA (MH4R+7Q)
const GMAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1994.3601420543932!2d-48.4085565!3d-1.3442479!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a46142af21ed2d%3A0x7fa4f155a5eecf6c!2sUEPA%20-%20Universidade%20do%20Estado%20do%20Par%C3%A1%20-%20Campus%20XXII%20Ananindeua!5e0!3m2!1spt-BR!2sbr!4v1772418885943!5m2!1spt-BR!2sbr";
const GMAPS_LINK =
  "https://www.google.com/maps/place/UEPA+-+Universidade+do+Estado+do+Par%C3%A1+-+Campus+XXII+Ananindeua/data=!4m2!3m1!1s0x0:0x7fa4f155a5eecf6c?sa=X&ved=1t:2428&ictx=111";

const LocationSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useI18n();
  const { venue, address, city } = community.location;

  return (
    <section id="location" className="px-6 py-24 md:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-5xl transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <h2 className="mb-12 text-center text-sm font-semibold uppercase tracking-widest text-foreground">
          {t("location.title")}
        </h2>

        <div className="grid gap-0 overflow-hidden rounded-xl border border-border md:grid-cols-2">
          {/* Map — left column */}
          <div className="relative min-h-72 md:min-h-full">
            <iframe
              title="KERNEL location map"
              src={GMAPS_EMBED}
              width="100%"
              height="100%"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Mapa do Campus XXII da UEPA em Ananindeua"
            />
          </div>

          {/* Info — right column */}
          <div className="flex flex-col justify-center gap-6 bg-card p-8 md:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground/5">
              <MapPin className="h-5 w-5 text-foreground" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-semibold text-foreground">{venue}</h3>
              <p className="text-muted-foreground">{address}</p>
              <p className="text-muted-foreground">{city}</p>
            </div>

            <a
              href={GMAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              <Navigation className="h-4 w-4" />
              Ver no mapa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
