import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { skillCategories, certifications } from "@/data/content";

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label">Expertise</p>
          <h2 className="section-heading">Skills & Certifications</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {skillCategories.map((category) => (
              <div key={category.label}>
                <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
                  {category.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm font-medium px-3 py-1.5 rounded-lg bg-card border border-border text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            {certifications.map((cert) => (
              <a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 p-5 rounded-2xl border border-border bg-card hover:border-accent/40 transition-all"
              >
                <img
                  src={cert.image}
                  alt={cert.name}
                  className={`object-contain ${cert.imageClass || "w-16 h-16"}`}
                />
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-foreground">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-muted">{cert.fullName}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-accent mt-1 group-hover:gap-2 transition-all">
                    View Credential <ArrowRight size={12} />
                  </span>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
