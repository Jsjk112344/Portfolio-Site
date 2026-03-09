import { motion } from "framer-motion";
import { experience } from "@/data/content";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label">Experience</p>
          <h2 className="section-heading">Where I've Worked</h2>
        </motion.div>

        <div className="max-w-3xl space-y-0">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative pl-8 pb-10 last:pb-0 border-l border-border"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-2 border-background" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-accent">
                    {item.company}
                    <span className="text-muted"> · {item.location}</span>
                  </p>
                </div>
                <span className="text-xs font-mono text-muted whitespace-nowrap">
                  {item.period}
                </span>
              </div>

              <p className="text-sm text-muted leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
