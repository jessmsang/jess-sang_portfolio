import "./MobileNavBtn.css";

export default function MobileNavBtn({ onClick }) {
  return (
    <button
      type="button"
      className="nav__mobile-btn"
      onClick={onClick}
    ></button>
  );
}
