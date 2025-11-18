import { useEffect, useRef, useState } from "react";
import MobileNavBtn from "../MobileNavBtn/MobileNavBtn";
import "./Nav.css";

export default function Nav({ isMobile }) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="nav">
      {/* DESKTOP */}
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
      {/* MOBILE */}
      {isMobile && (
        <div className="nav__mobile" ref={dropdownRef}>
          <MobileNavBtn onClick={toggleMenu} />

          {isOpen && (
            <div className="nav__mobile-dropdown">
              <a href="#skills-section" onClick={closeMenu}>
                Skills
              </a>
              <hr className="nav__mobile-dropdown-divider" />
              <a href="#portfolio-section" onClick={closeMenu}>
                Portfolio
              </a>
              <hr className="nav__mobile-dropdown-divider" />
              <a href="#experience-section" onClick={closeMenu}>
                Experience
              </a>
              <hr className="nav__mobile-dropdown-divider" />
              <a href="#education-section" onClick={closeMenu}>
                Education
              </a>
              <hr className="nav__mobile-dropdown-divider" />
              <a href="#contact-section" onClick={closeMenu}>
                Contact
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
