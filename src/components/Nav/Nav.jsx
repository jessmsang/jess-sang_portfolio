import "./Nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <ul className="nav__btns-list">
        <li className="nav__btns-list-item">
          <a href="#about-me-section" className="nav__btn">
            About Me
          </a>
        </li>
        <li className="nav__btns-list-item">
          <a href="#skills-section" className="nav__btn">
            Skills
          </a>
        </li>
        <li className="nav__btns-list-item">
          <a href="#portfolio-section" className="nav__btn">
            Portfolio
          </a>
        </li>
      </ul>
    </div>
  );
}
