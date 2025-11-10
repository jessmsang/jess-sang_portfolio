import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__contact-container" id="contact-section">
        <h3 className="footer__contact-header">Contact:</h3>
        <ul className="footer__contact-list">
          <li className="footer__contact-list-item">
            Email:&nbsp;
            <a
              href="&#109;a&#105;lto&#58;&#37;6Aessica%&#54;Dsa&#110;g&#64;hot%6Dail&#46;%&#54;3om"
              className="footer__contact-link"
            >
              j&#101;ss&#105;camsan&#103;&#64;&#104;otmai&#108;&#46;com
            </a>
          </li>
          <li className="footer__contact-list-item">
            <a
              href="https://www.linkedin.com/in/jess-sang/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__contact-link"
            >
              LinkedIn
            </a>{" "}
            |&nbsp;
            <a
              href="https://github.com/jessmsang"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__contact-link"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__developer-container">
        <p className="footer__author">Developed by Jess Sang</p>
        <p className="footer__year">&nbsp; &copy; {currentYear}</p>
      </div>
    </footer>
  );
}

export default Footer;
