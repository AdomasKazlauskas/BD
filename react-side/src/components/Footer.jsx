import "../App.scss";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/Instagram.png";
import LinkedIn from "../assets/LinkedIn.png";
import Whatsapp from "../assets/Twitter.png";
import Twitter from "../assets/Whatsapp.png";
import Youtube from "../assets/Youtube.png";
import GooglePlay from "../assets/googleplay.png";
import AppStore from "../assets/AppStore.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-terms">
        <h4>&#169; 2023-2023 SendMeMoney</h4>
        <a href="/">Terms</a>
        <a href="/">Privacy</a>
        <a href="/">Legal</a>
        <a href="/">Acessibility Statement</a>
      </div>
      <div className="footer-links">
        <div className="socials">
          <a href="/">
            <img src={Facebook} alt="Facebook" />
          </a>
          <a href="/">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="/">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="/">
            <img src={Whatsapp} alt="Whatsapp" />
          </a>
          <a href="/">
            <img src={Twitter} alt="Twitter" />
          </a>
          <a href="/">
            <img src={Youtube} alt="Youtube" />
          </a>
        </div>
        <div className="app-stores">
          <a href="/">
            <img src={GooglePlay} alt="GooglePlay" />
          </a>
          <a href="/">
            <img src={AppStore} alt="AppStore" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
