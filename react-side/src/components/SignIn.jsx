import "../App.scss";
import logo from "../assets/logo.png";

function SignIn() {
  return (
    <div className="sign">
      <div className="sign-leftside">
        <img className="logotype" src={logo} alt="logo" />
        <h3 className="section-name">Welcome back</h3>
        <h1 className="section-title">Sign in to SendMeMoney</h1>
      </div>
      <div className="sign-rightside">
        <div className="rightside-top">
          <h4>
            Don't have an account? <a href="/">Sign Up</a>
          </h4>
        </div>
        <div className="rightside-details">
          <h3 className="rightside-title">Your account details</h3>
          <input
            className="rightside-input"
            type="text"
            placeholder="Your Name..."
          />
          <input
            className="rightside-input"
            type="text"
            placeholder="Your Password..."
          />
        </div>
        <div className="rightside-terms">
          <h4>
            By continuing, you agree with the SendMeMoney{" "}
            <a href="/">terms of service</a> and have no way back.
          </h4>
          <button className="terms-btn">Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
