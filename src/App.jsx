import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import ProjectDetail from "@/pages/ProjectDetail";

function ScrollToHash() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);
  return null;
}

function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
