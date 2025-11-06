import CircleAnimation from "../CircleAnimation/CircleAnimation";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio-section">
      <CircleAnimation className="circle_top-right" />
      <h2 className="portfolio__title">Portfolio</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a
            href="https://www.hangout.devbyjess.com/"
            className="portfolio__list-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="portfolio__project-name">Hangout</span> -
            Weather-Based Activity Recommendation App
          </a>{" "}
          <p className="portfolio__project-description">
            Built a full-stack MERN app to help users discover activities suited
            to current weather. Integrated OpenWeather API with dynamic filters
            for season, cost, and group size, delivering personalized
            recommendations. Applied responsive design and state management;
            deployed backend on GCP with PM2, Cloudflare DNS, and Squarespace
            domain. Tested APIs with Postman and curl.
          </p>
        </li>
        <li className="portfolio__list-item">
          <a
            href="https://www.wtwr.devbyjess.com/"
            className="portfolio__list-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="portfolio__project-name">
              WTWR (What to Wear?)
            </span>{" "}
            - Weather-Based Clothing Recommendation App
          </a>
          <p className="portfolio__project-description">
            Developed a full-stack React + Node/Express app addressing the
            challenge of real-time outfit decisions. Integrated OpenWeather API
            for context-aware recommendations, added JWT authentication for
            secure profiles, and designed a mobile-first UI with modals.
            Deployed backend on GCP with PM2. Tested APIs using Postman and
            curl.
          </p>
        </li>
        <li className="portfolio__list-item">
          <a
            href="https://jessmsang.github.io/se_project_spots/"
            className="portfolio__list-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="portfolio__project-name">Spots</span> - Image
            Sharing Social Media Site
          </a>
          <p className="portfolio__project-description">
            Created a frontend social media app enabling image posting, editing,
            and interaction. Built validation and custom error handling to
            improve reliability, and added accessible modals for smooth user
            flows. Delivered a responsive interface with hover states that
            encourage engagement across devices.
          </p>
        </li>
      </ul>
    </section>
  );
}
