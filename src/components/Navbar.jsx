import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/content";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const sections = navLinks.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("#" + entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    if (isHome) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/" + href);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a
          href="/"
          className="font-display font-bold text-xl text-foreground hover:text-accent transition-colors"
        >
          {siteConfig.logo}
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm font-medium transition-colors bg-transparent border-none cursor-pointer ${
                activeSection === link.href
                  ? "text-accent"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href={siteConfig.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-4 py-1.5 rounded-full border border-accent text-accent hover:bg-accent hover:text-background transition-all"
          >
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground bg-transparent border-none cursor-pointer p-1"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-lg">
          <div className="flex flex-col items-center justify-center gap-8 pt-20">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-2xl font-display font-semibold text-foreground hover:text-accent transition-colors bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <a
              href={siteConfig.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium px-6 py-2 rounded-full border border-accent text-accent hover:bg-accent hover:text-background transition-all"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
