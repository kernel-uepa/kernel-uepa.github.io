import { community } from "@/config/community";
import { useI18n } from "@/i18n/I18nContext";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter, MessageCircle, Youtube, Github } from "lucide-react";

const socialIcons = [
  { key: "instagram", icon: Instagram, href: community.socials.instagram },
  { key: "linkedin", icon: Linkedin, href: community.socials.linkedin },
  { key: "x", icon: Twitter, href: community.socials.x },
  { key: "discord", icon: MessageCircle, href: community.socials.discord },
  { key: "youtube", icon: Youtube, href: community.socials.youtube },
  { key: "github", icon: Github, href: community.socials.github },
];

const FooterSection = () => {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6">
        <div className="flex items-center gap-4">
          {socialIcons.map(({ key, icon: Icon, href }) => (
            <a key={key} href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <Link to="/terms" className="transition-colors hover:text-foreground">{t("footer.terms")}</Link>
          <span>·</span>
          <Link to="/privacy" className="transition-colors hover:text-foreground">{t("footer.privacy")}</Link>
          <span>·</span>
          <Link to="/manifesto" className="transition-colors hover:text-foreground">{t("footer.manifesto")}</Link>
        </div>
        <p className="text-sm text-muted-foreground">{t("footer.copyright")}</p>
      </div>
    </footer>
  );
};

export default FooterSection;
