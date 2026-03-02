import { community } from "@/config/community";
import { useI18n } from "@/i18n/I18nContext";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const { t } = useI18n();
  const { items } = community.projects;

  return (
    <section id="projects" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center text-sm font-semibold uppercase tracking-widest text-foreground"
        >
          {t("projects.title")}
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((project, i) => (
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
      </div>
    </section>
  );
};

export default ProjectsSection;
