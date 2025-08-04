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
          applications that are engaging, intuitive, practical, and reliable.
        </p>
      </div>
    </section>
  );
}
