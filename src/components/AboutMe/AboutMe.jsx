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
          Hi, I'm Jess! I'm an early-career software engineer with hands-on
          experience building full-stack applications using JavaScript, React,
          Node.js, and MongoDB. I enjoy creating practical, user-focused
          solutions and solving complex problems through code. Over the past
          year, I've built and deployed full-stack projects that integrate
          third-party APIs, implement secure user authentication, and handle
          real-time data, giving me experience across the full software
          lifecycle.
          <br />
          As I continue growing in tech, I'm expanding my skills into areas like
          QA automation, DevOps, and other facets of software engineering to
          deepen my expertise and better understand where I can have the most
          impact. I'm motivated by building reliable, high-quality systems and
          collaborating with teams that value curiosity, precision, and
          continuous improvement.
        </p>
      </div>
    </section>
  );
}
