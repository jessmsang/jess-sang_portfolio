import "./Education.css";

export default function Education() {
  return (
    <section className="education" id="education-section">
      <h2 className="education__title">Education</h2>
      <ul className="education__list">
        <li className="education__list-item">
          <p className="education__name">
            TripleTen | Software Engineering | October 2024 - August 2025
          </p>
          <ul className="education__description-list">
            <li className="education__description-list-item">
              Completed a full-stack web development bootcamp covering the MERN
              stack, REST APIs, Google Cloud deployment, and tools like Figma,
              Postman, and Git/GitHub.
            </li>
          </ul>
        </li>
        <li className="education__list-item">
          <p className="education__name">
            Flamingo Air | FAA Aircraft Dispatch | August 2021 - April 2022
          </p>
          <ul className="education__description-list">
            <li className="education__description-list-item">
              Earned FAA Aircraft Dispatcher Certificate through a 200-hour
              program covering flight planning, weather analysis, and emergency
              operations.
            </li>
          </ul>
        </li>
        <li className="education__list-item">
          <p className="education__name">
            University of Cincinnati | Bachelor's | Sport Administration |
            August 2016 - December 2019
          </p>
          <ul className="education__description-list">
            <li className="education__description-list-item">
              Gained foundational knowledge in sports marketing, management, and
              operations. Involved in Women in Sport Administration and served
              as Student Manager for the UC Women's Basketball Team.
            </li>
          </ul>
        </li>
        <li className="education__list-item">
          <p className="education__name">
            University of Cincinnati | Minor | Business Administration | August
            2016 - December 2019
          </p>
          <ul className="education__description-list">
            <li className="education__description-list-item">
              Studied management, marketing, finance, and organizational
              strategy, building a strong foundation in business principles to
              complement my Sport Administration degree.
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
