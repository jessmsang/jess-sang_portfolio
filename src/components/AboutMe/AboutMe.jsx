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
          I'm Jess! And I'm a full-stack software engineer passionate about
          building interactive UI. I am driven to create user-oriented web
          applications that are engaging, intuitive, practical, and reliable. I
          have hands-on experience with JavaScript, React, Node.js, Express,
          MongoDB, and REST APIs, completing projects that simulate real-world
          full-stack challenges. I enjoy solving problems through code and
          continuously learning new technologies to deliver scalable solutions.
          I approach software engineering with curiosity and a commitment to
          learning, continuously developing my skills to contribute effectively
          to a team. While I am early in my software engineering career, I am
          highly motivated to grow, take on challenges, and contribute
          meaningful solutions within a collaborative environment.
        </p>
      </div>
    </section>
  );
}
