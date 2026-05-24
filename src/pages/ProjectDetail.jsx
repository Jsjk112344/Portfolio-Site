import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Linkedin } from "lucide-react";
import { projects, siteConfig } from "@/data/content";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project || !project.detail) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold mb-4">
            Project not found
          </h1>
          <Link to="/" className="text-accent hover:underline">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const d = project.detail;

  const primaryLink = d.links.website || d.links.github;
  const primaryLabel = d.links.website ? "Visit Website" : "View on GitHub";
  const PrimaryIcon = d.links.website ? ExternalLink : Github;
  const hasLink = Boolean(primaryLink && primaryLink !== "#");

  return (
    <div className="pt-24">
      {/* Back button */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 mb-8">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
        >
          <ArrowLeft size={16} /> Back to projects
        </Link>
      </div>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <p className="section-label">{project.tags.join(" · ")}</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-6">
              {d.overview}
            </p>
            {primaryLink && primaryLink !== "#" && (
              <a
                href={primaryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-colors"
              >
                <PrimaryIcon size={16} /> {primaryLabel}
              </a>
            )}
            {/* Extra links for cafeconnect */}
            {d.links.userGuide && (
              <div className="flex gap-3 mt-3">
                <a
                  href={d.links.userGuide}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:underline"
                >
                  User Guide
                </a>
                {d.links.developerGuide && (
                  <a
                    href={d.links.developerGuide}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:underline"
                  >
                    Developer Guide
                  </a>
                )}
              </div>
            )}
          </div>
          <div className="rounded-2xl overflow-hidden border border-border">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Motivation */}
      <section className="max-w-3xl mx-auto px-6 md:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-display font-bold mb-4">Motivation</h2>
          <p className="text-muted leading-relaxed">{d.motivation}</p>
        </motion.div>
      </section>

      {/* Architecture */}
      {d.architecture && (
        <section className="max-w-3xl mx-auto px-6 md:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-display font-bold mb-4 text-center">
              Architecture
            </h2>
            {d.architecture.intro && (
              <p className="text-muted leading-relaxed mb-10 text-center max-w-2xl mx-auto">
                {d.architecture.intro}
              </p>
            )}
            <div>
              {d.architecture.stages.map((stage, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex gap-4"
                >
                  <div className="flex flex-col items-center">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 font-mono text-xs font-semibold text-accent">
                      {i + 1}
                    </span>
                    {i < d.architecture.stages.length - 1 && (
                      <span className="my-1 w-px flex-1 bg-border" />
                    )}
                  </div>
                  <div className="pb-6">
                    <h4 className="text-sm font-semibold mb-1">{stage.title}</h4>
                    <p className="text-xs text-muted leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* Tech Stack */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-display font-bold mb-8 text-center">
            Technologies & Tools
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {d.technologies.map((tech) => (
              <div
                key={tech.name}
                className="p-4 rounded-xl border border-border bg-card text-center"
              >
                <img
                  src={`https://cdn.simpleicons.org/${tech.icon}`}
                  alt={tech.name}
                  className="w-8 h-8 mx-auto mb-2 opacity-70"
                />
                <h4 className="text-sm font-semibold mb-1">{tech.name}</h4>
                <p className="text-xs text-muted">{tech.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-display font-bold mb-8 text-center">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {d.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-5 rounded-xl border border-border bg-card"
              >
                <h4 className="text-sm font-semibold mb-2">{feature.title}</h4>
                <p className="text-xs text-muted leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Engineering Decisions */}
      {d.decisions && (
        <section className="max-w-3xl mx-auto px-6 md:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-display font-bold mb-3 text-center">
              Engineering Decisions
            </h2>
            {d.decisionsIntro && (
              <p className="text-muted leading-relaxed mb-10 text-center max-w-2xl mx-auto">
                {d.decisionsIntro}
              </p>
            )}
            <div className="space-y-12">
              {d.decisions.map((group, gi) => (
                <div key={gi}>
                  <p className="section-label">{group.group}</p>
                  <div className="space-y-5">
                    {group.items.map((item, i) => (
                      <div key={i} className="border-l-2 border-accent pl-5">
                        <h4 className="text-sm font-semibold mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-muted leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* Screenshots */}
      {d.gallery && d.gallery.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 md:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-display font-bold mb-8 text-center">
              Screenshots
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {d.gallery.map((src, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden border border-border bg-background"
                >
                  <img
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* Challenges */}
      <section className="max-w-3xl mx-auto px-6 md:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-display font-bold mb-8 text-center">
            Challenges & Solutions
          </h2>
          <div className="space-y-6">
            {d.challenges.map((challenge, i) => (
              <div key={i} className="border-l-2 border-accent pl-5">
                <h4 className="text-sm font-semibold mb-1">
                  {challenge.title}
                </h4>
                <p className="text-xs text-muted mb-2">
                  {challenge.description}
                </p>
                <p className="text-xs text-accent/80">
                  <span className="font-semibold">Solution:</span>{" "}
                  {challenge.solution}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 md:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center p-10 rounded-2xl border border-border bg-card"
        >
          <h3 className="text-xl font-display font-bold mb-3">
            {hasLink ? "Interested in this project?" : "Interested? Chat with me"}
          </h3>
          <p className="text-sm text-muted mb-6">
            {hasLink
              ? "Explore the source code and implementation details."
              : "Happy to walk you through how it works — let's connect."}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {hasLink ? (
              <>
                <a
                  href={primaryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                >
                  <PrimaryIcon size={16} /> {primaryLabel}
                </a>
                {d.links.github && d.links.website && d.links.github !== "#" && (
                  <a
                    href={d.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground font-semibold rounded-lg hover:border-accent hover:text-accent transition-colors"
                  >
                    <Github size={16} /> Source Code
                  </a>
                )}
              </>
            ) : (
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-colors"
              >
                <Linkedin size={16} /> Connect on LinkedIn
              </a>
            )}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ProjectDetail;
