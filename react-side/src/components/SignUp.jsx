import "../App.scss";
import logo from "../assets/logo.png";

function SignUp() {
  return (
    <div className="sign">
      <div className="sign-leftside">
        <img className="logotype" src={logo} alt="logo" />
        <h3 className="section-name">Welcome to SendMeMoney</h3>
        <h1 className="section-title">Create an account</h1>
      </div>
      <div className="sign-rightside">
        <div className="rightside-top">
          <h4>
            Already have an account? <a href="/">Sign In</a>
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
          <button className="terms-btn">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
