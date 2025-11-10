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
          Hi, I'm Jess! I'm a software engineer passionate about building
          practical, user-centered applications. While I began my journey
          focusing on full-stack web development, I'm now exploring the broader
          world of software engineering to deepen my technical foundation and
          discover where I can make the biggest impact. I have hands-on
          experience with JavaScript, TypeScript, React, Node.js, Express,
          MongoDB, and REST APIs, completing projects that simulate real-world
          development challenges from end to end. I enjoy solving problems
          through code, learning new technologies, and collaborating to create
          reliable, scalable solutions. As I continue to grow early in my
          career, I'm excited to explore different areas within software
          engineering — from backend systems to cloud technologies — and to
          contribute meaningfully to teams that value curiosity, learning, and
          collaboration.
        </p>
      </div>
    </section>
  );
}
