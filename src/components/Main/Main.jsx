import "./Main.css";

import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";
import LandingPage from "../LandingPage/LandingPage";

export default function Main() {
  return (
    <section className="main">
      <LandingPage />
      <Skills />
      <Portfolio />
    </section>
  );
}
