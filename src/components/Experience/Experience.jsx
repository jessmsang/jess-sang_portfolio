import "./Experience.css";

export default function Experience() {
  return (
    <section className="experience" id="experience-section">
      <h2 className="experience__title">Experience</h2>
      <ul className="experience__list">
        <li className="experience__list-item">
          <p className="experience__name">
            Software Engineer Extern - TripleTen | Externship | Oct 2025 -
            Present | End Date: December 2025
          </p>
          <ul className="experience__description-list">
            <li className="experience__description-list-item">
              Completing a software engineering externship, collaborating with a
              team on a real client project.
            </li>
            <li className="experience__description-list-item">
              Applying full-stack development skills in an agile workflow with
              GitHub task management, code reviews, and stakeholder
              presentations.
            </li>
          </ul>
        </li>
        <li className="experience__list-item">
          <p className="experience__name">
            Junior Software Developer Intern - Analyzify360 Global | Internship
            | Oct 2025 - Nov 2025
          </p>
          <ul className="experience__description-list">
            <li className="experience__description-list-item">
              Completed TypeScript training and participated in technical mock
              interviews to reinforce programming concepts and problem-solving
              skills.
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
