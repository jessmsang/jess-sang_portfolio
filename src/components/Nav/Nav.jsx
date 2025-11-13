import MobileNavBtn from "../MobileNavBtn/MobileNavBtn";
import "./Nav.css";

export default function Nav({ isMobile }) {
  return (
    <div className="nav">
      {!isMobile && (
        <div className="nav__desktop">
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
              <a href="#experience-section" className="nav__btn">
                Experience
              </a>
            </li>
            <li className="nav__btns-list-item">
              <a href="#education-section" className="nav__btn">
                Education
              </a>
            </li>
            <li className="nav__btns-list-item">
              <a href="#contact-section" className="nav__btn">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
      {isMobile && (
        <div className="nav__mobile">
          <MobileNavBtn />
        </div>
      )}
    </div>
  );
}
