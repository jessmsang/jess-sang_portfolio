import "./App.css";

import Main from "../Main/Main";
import BackToTopBtn from "../BackToTopBtn/BackToTopBtn";
import Footer from "../Footer/Footer";

export default function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Main />
        <Footer />
        <BackToTopBtn />
      </div>
    </div>
  );
}
