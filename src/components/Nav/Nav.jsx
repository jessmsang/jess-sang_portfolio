import "./Nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <ul className="nav__btns-list">
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
        <li className="nav__btns-list-item">
          <a href="#contact-section" className="nav__btn">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
