import "../App.scss";
import logo from "../assets/logo.png";

function LearnMore() {
  return (
    <div className="full-width">
      <div className="learn-more">
        <img className="logotype" src={logo} alt="logo" />
        <div className="link-column">
          <h4 className="bold">Fundraise for</h4>
          <a href="/">Yourself</a>
          <a href="/">Community</a>
          <a href="/">Charity</a>
          <a href="/">Re-education</a>
          <a href="/">Joblessness relief</a>
          <a href="/">To-be homeless</a>
          <a href="/">AI gods</a>
        </div>
        <div className="link-column">
          <h4 className="bold">Learn more</h4>
          <a href="/">How it works</a>
          <a href="/">Why give money</a>
          <a href="/">FAQ</a>
          <a href="/">How to find a job</a>
          <a href="/">Today's economy</a>
          <a href="/">Chat GPT</a>
          <a href="/">4th revolution</a>
        </div>
        <div className="link-column">
          <h4 className="bold">Resources</h4>
          <a href="/">BIT</a>
          <a href="/">Lectures</a>
          <a href="/">AI logo generator</a>
          <a href="/">AI pictures</a>
          <a href="/">AI text</a>
          <a href="/">Cheap labour</a>
          <a href="/">About</a>
        </div>
      </div>
    </div>
  );
}

export default LearnMore;
