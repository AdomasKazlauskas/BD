import "../App.scss";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { paths } from "../constants/routing";

function Header() {
  const navigate = useNavigate();

  // addStory tik registrutiems prieinamas!;
  return (
    <div id="story-carousel" className="header-container">
      <div className="header-links">
        <button
          className="header-button"
          onClick={() => navigate(paths.ADDSTORY)}
        >
          New Story
        </button>
        <button
          className="header-button"
          onClick={() => document.getElementById("story-list").scrollIntoView()}
        >
          Story list
        </button>
      </div>
      <img className="logotype" src={logo} alt="logo" />
      <div className="header-links">
        <button
          className="header-button"
          onClick={() => navigate(paths.SIGNIN)}
        >
          Log in
        </button>
        <button
          className="header-button"
          onClick={() => navigate(paths.SIGNUP)}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Header;
