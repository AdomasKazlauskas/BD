import "../App.scss";
import heroFoto from "../assets/heroFoto.png";
import { paths } from "../constants/routing";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <div
      className="hero-background"
      style={{ backgroundImage: `url(${heroFoto})` }}
    >
      <h1 className="hero-text">AI took your job? We're here to help</h1>
      <button className="hero-button" onClick={() => navigate(paths.ADDSTORY)}>
        Tell Your Story
      </button>
    </div>
  );
}

export default Hero;
