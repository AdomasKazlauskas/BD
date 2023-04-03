import "../App.scss";
import heroFoto from "../assets/heroFoto.png";

function Hero() {
  return (
    <div
      className="hero-background"
      style={{ backgroundImage: `url(${heroFoto})` }}
    >
      <h1 className="hero-text">AI took your job? We're here to help</h1>
      <button className="hero-button">Tell Your Story</button>
    </div>
  );
}

export default Hero;
