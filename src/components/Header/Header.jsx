import "./Header.css";

import CircleAnimation from "../CircleAnimation/CircleAnimation";

export default function Header() {
  return (
    <header className="header">
      <CircleAnimation className="circle_top-left" />
      <h1 className="header__title">JESS SANG</h1>
    </header>
  );
}
