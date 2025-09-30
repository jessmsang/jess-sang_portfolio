import "./Main.css";

import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";

export default function Main() {
  return (
    <section className="main">
      <AboutMe />
      <Skills />
      <Portfolio />
    </section>
  );
}
