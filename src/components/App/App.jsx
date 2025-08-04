import "./App.css";

import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import Main from "../Main/Main";
import BackToTopBtn from "../BackToTopBtn/BackToTopBtn";
import Footer from "../Footer/Footer";

export default function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Nav />
        <Header />
        <Main />
        <Footer />
        <BackToTopBtn />
      </div>
    </div>
  );
}
