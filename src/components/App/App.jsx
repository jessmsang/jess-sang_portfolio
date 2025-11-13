import { useState, useEffect } from "react";

import "./App.css";

import LandingPage from "../LandingPage/LandingPage";
import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import Footer from "../Footer/Footer";
import BackToTopBtn from "../BackToTopBtn/BackToTopBtn";

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);

  // --- RESPONSIVE DESIGN ---
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 425);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="page">
      <LandingPage className="page__snap-section" isMobile={isMobile} />
      <Skills className="page__snap-section" />
      <Portfolio className="page__snap-section" />
      <Experience className="page__snap-section" />
      <Education className="page__snap-section" />
      <Footer className="page__footer" />
      <BackToTopBtn />
    </div>
  );
}
