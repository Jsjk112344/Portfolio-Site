import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/content";

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={project.featured ? "md:col-span-2" : ""}
  >
    <Link
      to={`/project/${project.slug}`}
      className="group block rounded-2xl border border-border bg-card overflow-hidden hover:border-accent/40 transition-all duration-300"
    >
      <div className={project.featured ? "grid md:grid-cols-2" : ""}>
        <div className="relative overflow-hidden bg-background">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              project.featured ? "h-64 md:h-full" : "h-48"
            }`}
          />
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <div className="flex items-start justify-between mb-2">
            <div>
              {project.featured && (
                <span className="font-mono text-xs text-accent uppercase tracking-wider mb-2 block">
                  Featured Startup
                </span>
              )}
              <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                {project.title}
                {project.role && (
                  <span className="text-sm font-normal text-muted ml-2">
                    {project.role}
                  </span>
                )}
              </h3>
            </div>
            <ExternalLink className="w-4 h-4 text-muted group-hover:text-accent transition-colors shrink-0 mt-1" />
          </div>
          <p className="text-muted text-sm leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-background text-muted border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label">Portfolio</p>
          <h2 className="section-heading">Selected Work</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
