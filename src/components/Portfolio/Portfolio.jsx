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
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            href="https://www.wtwr-js.jumpingcrab.com/"
            className="portfolio__list-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="portfolio__project-name">
              WTWR (What to Wear?)
            </span>{" "}
            - Weather-Based Clothing Recommendation App
          </a>
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
        </li>
      </ul>
    </section>
  );
}
