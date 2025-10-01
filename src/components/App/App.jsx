import "./App.css";

import LandingPage from "../LandingPage/LandingPage";
import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";
import BackToTopBtn from "../BackToTopBtn/BackToTopBtn";

export default function App() {
  return (
    <div className="page">
      <LandingPage className="page__snap-section" />
      <Skills className="page__snap-section" />
      <Portfolio className="page__snap-section" />
      <Footer className="page__footer" />
      <BackToTopBtn />
    </div>
  );
}
