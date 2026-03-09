import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { heroData, siteConfig } from "@/data/content";
import ducketLogo from "@/assets/ducket.png";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center section-padding pt-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Text content — 3 cols */}
          <motion.div
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <a href="https://ducket.io" target="_blank" rel="noopener noreferrer" className="inline-block">
                <img
                  src={ducketLogo}
                  alt="Ducket"
                  className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>
              <p className="font-mono text-sm tracking-widest text-accent uppercase">
                {heroData.subtitle}
              </p>
            </div>

            <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.1]">
              {heroData.firstName}
              <br />
              <span className="text-accent">{heroData.lastName}</span>
            </h1>

            <p className="text-muted text-lg md:text-xl max-w-xl leading-relaxed">
              {heroData.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-colors"
              >
                View Projects <ArrowDown size={16} />
              </a>
              <a
                href={siteConfig.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:border-accent hover:text-accent transition-colors"
              >
                Resume
              </a>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Photo — 2 cols */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-border">
                <img
                  src={heroData.image}
                  alt={siteConfig.name}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
