import "../App.scss";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function AddStory() {
  const navigate = useNavigate();

  return (
    <div className="sign">
      <div className="sign-leftside">
        <img
          className="logotype"
          src={logo}
          alt="logo"
          onClick={() => navigate("/")}
        />
        <h3 className="section-name">It all begins here...</h3>
        <h1 className="section-title">Tell your story</h1>
      </div>
      <div className="sign-rightside">
        <div className="rightside-details-post">
          <h3 className="rightside-title">Story details</h3>
          <input
            className="rightside-input"
            type="text"
            placeholder="Your Photo URL..."
          />
          <input
            className="rightside-input"
            type="text"
            placeholder="Your Title..."
          />
          <input
            className="rightside-input"
            type="text"
            placeholder="Required sum..."
          />
          <textarea
            className="rightside-input"
            type="text"
            placeholder="Your Text..."
            maxLength={200}
          />
          <button className="post-btn">Post</button>
        </div>
        <div className="rightside-terms-post">
          <h4>
            By continuing, you agree with the SendMeMoney{" "}
            <a href="/">terms of service</a> and have no way back.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default AddStory;
