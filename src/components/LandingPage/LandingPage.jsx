import "./LandingPage.css";

import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";

export default function LandingPage() {
  return (
    <section className="landing-page">
      <Nav />
      <Header />
      <AboutMe />
    </section>
  );
}
