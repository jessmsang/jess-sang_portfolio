import "./Experience.css";

export default function Experience() {
  return (
    <section className="experience" id="experience-section">
      <h2 className="experience__title">Experience</h2>
      <ul className="experience__list">
        <li className="experience__list-item">
          <p className="experience__name">
            Software Engineer Extern - TripleTen | Oct 2025 - Dec 2025
          </p>
          <ul className="experience__description-list">
            <li className="experience__description-list-item">
              Collaborated in an agile team with GitHub task management, code
              reviews, and standups.
            </li>
            <li className="experience__description-list-item">
              Contributed full-stack features while practicing testing,
              debugging, and iterative development.
            </li>
            <li className="experience__description-list-item">
              Gained exposure to production-oriented workflows, documentation
              standards, and deployment constraints.
            </li>
          </ul>
        </li>
        <li className="experience__list-item">
          <p className="experience__name">
            Domestic Flight Support Specialist - Executive Jet Management | Jun
            2022 - Aug 2024
          </p>
          <ul className="experience__description-list">
            <li className="experience__description-list-item">
              Collaborated cross-functionally with multiple teams to ensure
              smooth and compliant flight operations, enhancing overall team
              efficiency and safety.
            </li>
            <li className="experience__description-list-item">
              Trained and mentored new team members to streamline workflows and
              enhance team readiness, ensuring consistent operational standards.
            </li>
            <li className="experience__description-list-item">
              Conducted detailed compliance checks on flight plans — enhancing
              my skills in testing, debugging, and quality assurance.
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
