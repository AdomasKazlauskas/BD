import "../App.scss";
import logo from "../assets/logo.png";

function Header() {
  return (
    <div className="header-container">
      <div className="header-links">
        <button className="header-button">New Story</button>
        <button className="header-button">Story list</button>
      </div>
      <img className="logotype" src={logo} alt="logo" />
      <div className="header-links">
        <button className="header-button">Log in</button>
        <button className="header-button">Sign in</button>
      </div>
    </div>
  );
}

export default Header;
