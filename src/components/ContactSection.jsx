import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/content";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="border-t border-border pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-lg mx-auto"
          >
            <p className="section-label">Get in Touch</p>
            <h2 className="section-heading mb-4">Let's Build Something</h2>
            <p className="text-muted mb-8">
              Open to collaborations, freelance work, and interesting
              conversations.
            </p>

            <div className="flex items-center justify-center gap-6 mb-16">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-muted hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>

            <p className="text-xs text-muted">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
