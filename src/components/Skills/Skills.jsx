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
        <h2 className="skills__title">Technical Skills</h2>

        {/* Lists grid */}
        <div className="skills__subsections">
          <div className="skills__subsection">
            <h3 className="skills__subtitle">Languages</h3>
            <ul className="skills__list">
              <li>JavaScript (ES6+)</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
          </div>

          <div className="skills__subsection">
            <h3 className="skills__subtitle">Frontend</h3>
            <ul className="skills__list">
              <li>React</li>
              <li>Vue.js</li>
              <li>Responsive Design</li>
              <li>BEM</li>
            </ul>
          </div>

          <div className="skills__subsection">
            <h3 className="skills__subtitle">Backend</h3>
            <ul className="skills__list">
              <li>Node.js</li>
              <li>Express</li>
              <li>REST APIs</li>
            </ul>
          </div>

          <div className="skills__subsection">
            <h3 className="skills__subtitle">Databases</h3>
            <ul className="skills__list">
              <li>MongoDB (NoSQL)</li>
              <li>PostgreSQL (learning)</li>
              <li>SQL (learning)</li>
            </ul>
          </div>

          <div className="skills__subsection">
            <h3 className="skills__subtitle">DevOps & Infrastructure</h3>
            <ul className="skills__list">
              <li>GCP</li>
              <li>Nginx</li>
              <li>Cloudflare</li>
              <li>Squarespace</li>
            </ul>
          </div>

          <div className="skills__subsection">
            <h3 className="skills__subtitle">Tools</h3>
            <ul className="skills__list">
              <li>Git / GitHub</li>
              <li>npm</li>
              <li>Postman</li>
              <li>Figma</li>
              <li>Webpack</li>
              <li>Vite</li>
            </ul>
          </div>
        </div>

        <ul className="skills__icons">
          {/* Languages */}
          <li className="skills__icon">
            <img
              className="skills__icon-image"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              alt="JavaScript"
            />
          </li>
          <li className="skills__icon">
            <img
              className="skills__icon-image"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              alt="HTML5"
            />
          </li>
          <li className="skills__icon">
            <img
              className="skills__icon-image"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              alt="CSS3"
            />
          </li>

          {/* Frontend */}
          <li className="skills__icon">
            <img
              className="skills__icon-image"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              alt="React"
            />
          </li>
          <li className="skills__icon">
            <img
              className="skills__icon-image"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
              alt="Vue.js"
            />
          </li>

          {/* Backend */}
          <li className="skills__icon">
            <img
              className="skills__icon-image"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
              alt="Node.js"
            />
          </li>
          <li className="skills__icon">
            <img
              className="skills__icon-image"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
              alt="Express"
            />
          </li>

          {/* Databases */}
          <li className="skills__icon">
            <img
              className="skills__icon-image"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
              alt="MongoDB"
            />
          </li>
          <li className="skills__icon">
            <img
              className="skills__icon-image"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
              alt="PostgreSQL"
            />
          </li>

          {/* DevOps & Infrastructure */}
          <li className="skills__icon">
            <img
              className="skills__icon-image"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg"
              alt="GCP"
            />
          </li>
          <li className="skills__icon">
            <img
              className="skills__icon-image"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg"
              alt="Nginx"
            />
          </li>
          <li className="skills__icon">
            <img
              className="skills__icon-image"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg"
              alt="Cloudflare"
            />
          </li>

          {/* Tools */}
          <li className="skills__icon">
            <img
              className="skills__icon-image"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
              alt="Git"
            />
          </li>
          <li className="skills__icon">
            <img
              className="skills__icon-image"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              alt="GitHub"
            />
          </li>
          <li className="skills__icon">
            <img
              className="skills__icon-image"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
              alt="npm"
            />
          </li>
          <li className="skills__icon">
            <img
              className="skills__icon-image"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
              alt="Postman"
            />
          </li>
          <li className="skills__icon">
            <img
              className="skills__icon-image"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
              alt="Figma"
            />
          </li>
          <li className="skills__icon">
            <img
              className="skills__icon-image"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg"
              alt="Webpack"
            />
          </li>
          <li className="skills__icon">
            <img
              className="skills__icon-image"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
              alt="Vite"
            />
          </li>
        </ul>
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
