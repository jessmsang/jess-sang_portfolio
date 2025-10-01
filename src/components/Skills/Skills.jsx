import "./Skills.css";
import MovingDashes from "../MovingDashes/MovingDashes";

export default function Skills() {
  return (
    <section className="skills" id="skills-section">
      <MovingDashes
        direction="normal"
        color="#804f45"
        dashLength={40}
        gapLength={30}
        thickness={7}
        speed={30}
      />
      <div className="skills__body">
        <h2 className="skills__title">Skills</h2>
        <div className="skills__subsections">
          <div className="skills__subsection">
            <h3 className="skills__subtitle">Languages</h3>
            <ul className="skills__list">
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="skills__subsection">
            <h3 className="skills__subtitle">Frameworks and Tools</h3>
            <ul className="skills__list">
              <li>Express</li>
              <li>React</li>
              <li>VS Code</li>
              <li>Figma</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>Vite</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="skills__subsection">
            <ul className="skills__icons">
              <li className="skills__icon">
                <img
                  className="skills__icon-image"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                />
              </li>
              <li className="skills__icon">
                <img
                  className="skills__icon-image"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                />
              </li>
              <li className="skills__icon">
                <img
                  className="skills__icon-image"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                />
              </li>
              <li className="skills__icon">
                <img
                  className="skills__icon-image"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                />
              </li>
              <li className="skills__icon">
                <img
                  className="skills__icon-image"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                />
              </li>
              <li className="skills__icon">
                <img
                  className="skills__icon-image"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-plain.svg"
                />
              </li>
              <li className="skills__icon">
                <img
                  className="skills__icon-image"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
                />
              </li>
              <li className="skills__icon">
                <img
                  className="skills__icon-image"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                />
              </li>
              <li className="skills__icon">
                <img
                  className="skills__icon-image"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                />
              </li>
              <li className="skills__icon">
                <img
                  className="skills__icon-image"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                />
              </li>
              <li className="skills__icon">
                <img
                  className="skills__icon-image"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <MovingDashes
        direction="reverse"
        color="#804f45"
        dashLength={40}
        gapLength={30}
        thickness={7}
        speed={30}
      />
    </section>
  );
}
