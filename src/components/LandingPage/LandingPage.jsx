import "./LandingPage.css";

import CircleAnimation from "../CircleAnimation/CircleAnimation";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";

export default function LandingPage({ isMobile }) {
  return (
    <section className="landing-page">
      <CircleAnimation className="circle_top-left" />
      <Nav isMobile={isMobile} />
      <Header />
      <AboutMe />
    </section>
  );
}
