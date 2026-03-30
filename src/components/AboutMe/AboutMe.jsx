import "./AboutMe.css";
import portrait from "../../assets/about-me-image.jpg";

export default function AboutMe() {
  return (
    <section className="about-me" id="about-me-section">
      <div className="about-me__image-container">
        <img src={portrait} alt="about me image" className="about-me__image" />
      </div>
      <div className="about-me__text">
        <h2 className="about-me__title">About Me</h2>
        <p className="about-me__paragraph">
          Hi, I'm Jess! I'm an early-career developer with a growing passion for
          UX/UI design. I have hands-on experience building full-stack
          applications using JavaScript, React, Node.js, and MongoDB, and I
          enjoy creating practical, user-focused solutions that solve real
          problems.
          <br />
          Over the past year, I've built and deployed full-stack projects that
          integrate third-party APIs, implement secure authentication, and
          handle real-time data. Working closely with Figma design specs and
          building user-facing interfaces sparked a deeper interest in the
          design side of the process — specifically how products look, feel, and
          work for the people using them.
          <br />
          I'm now actively exploring UX/UI design, bringing my technical
          foundation into a role focused on human-centered problem solving. I'm
          motivated by building things that are both functional and meaningful,
          and I'm looking for opportunities to grow at the intersection of
          design and development.
          <br />
        </p>
      </div>
    </section>
  );
}
