import "../App.scss";
import SadProgrammer from "../assets/SadProgrammer.png";
import SadProgrammer2 from "../assets/SadProgrammer2.png";
import SadProgrammer3 from "../assets/SadProgrammer3.png";

function StoryList() {
  const handleNextClick = () => {
    const container = document.getElementById("story-list-next");
    container.scrollBy({ left: 418.5, behavior: "smooth" });
  };

  const handlePreviousClick = () => {
    const container = document.getElementById("story-list-next");
    container.scrollBy({ left: -418.5, behavior: "smooth" });
  };

  return (
    <>
      <div id="story-list" className="storyList-header">
        <div>
          <h3 className="section-name">Happening near You</h3>
          <h1 className="section-title">Help your community</h1>
        </div>
        <div className="left-right">
          <button className="left-right-btn" onClick={handlePreviousClick}>
            &larr;
          </button>
          <button className="left-right-btn" onClick={handleNextClick}>
            &rarr;
          </button>
        </div>
      </div>
      <div id="story-list-next" className="urgent-topics-list scroll">
        <div className="urgent-topics-card one">
          <div className="image-border">
            <img className="topics-image" src={SadProgrammer} alt="foto1" />
          </div>
          <div className="topic-row-two">
            <h4 className="topic-card-name">Help John</h4>
            <div className="topic-row-two-money">
              <h4>Raised: 400/3000</h4>
            </div>
          </div>
          <h4 className="topic-text">
            John had been a skilled programmer for over a decade, working at a
            large tech company. But one day, the company introduced an AI system
            that could automate much of his job. Despite his experience, John
            couldn't compete with the speed and efficiency of the AI. Within
            weeks, he was let go from his position.
          </h4>
          <div className="topic-row-four">
            <div className="topic-row-four-inputs">
              <input type="text" placeholder="Your Name..." />
              <input type="number" placeholder="Your Donation..." />
            </div>
            <div className="topic-row-four-buttons">
              <button className="donation-button">Donate</button>
              <button className="donation-button">Donors</button>
            </div>
          </div>
        </div>
        <div className="urgent-topics-card one">
          <div className="image-border">
            <img className="topics-image" src={SadProgrammer2} alt="foto1" />
          </div>
          <div className="topic-row-two">
            <h4 className="topic-card-name">Help Jack</h4>
            <div className="topic-row-two-money">
              <h4>Raised: 0/1000</h4>
            </div>
          </div>
          <h4 className="topic-text">
            Once a successful software developer, Jack had always taken pride in
            his coding skills. But his world was turned upside down when his
            company decided to replace him with an AI that could write code
            faster and with fewer errors. Jack was devastated and struggled to
            find a new job in a market flooded with other programmers in the
            same predicament.
          </h4>
          <div className="topic-row-four">
            <div className="topic-row-four-inputs">
              <input type="text" placeholder="Your Name..." />
              <input type="number" placeholder="Your Donation..." />
            </div>
            <div className="topic-row-four-buttons">
              <button className="donation-button">Donate</button>
              <button className="donation-button">Donors</button>
            </div>
          </div>
        </div>
        <div className="urgent-topics-card one">
          <div className="image-border">
            <img className="topics-image" src={SadProgrammer3} alt="foto1" />
          </div>
          <div className="topic-row-two">
            <h4 className="topic-card-name">Help Sarah</h4>
            <div className="topic-row-two-money">
              <h4>Raised: 500/770</h4>
            </div>
          </div>
          <h4 className="topic-text">
            For years, Sarah had worked as a data analyst for a major
            corporation. She was confident in her ability to analyze complex
            data sets and provide valuable insights to her employer. However,
            Sarah's job came to an abrupt end when her company implemented an AI
            system that could analyze data more efficiently and accurately than
            any human.
          </h4>
          <div className="topic-row-four">
            <div className="topic-row-four-inputs">
              <input type="text" placeholder="Your Name..." />
              <input type="number" placeholder="Your Donation..." />
            </div>
            <div className="topic-row-four-buttons">
              <button className="donation-button">Donate</button>
              <button className="donation-button">Donors</button>
            </div>
          </div>
        </div>
        <div className="urgent-topics-card one">
          <div className="image-border">
            <img className="topics-image" src={SadProgrammer3} alt="foto1" />
          </div>
          <div className="topic-row-two">
            <h4 className="topic-card-name">Help Sarah</h4>
            <div className="topic-row-two-money">
              <h4>Raised: 500/770</h4>
            </div>
          </div>
          <h4 className="topic-text">
            For years, Sarah had worked as a data analyst for a major
            corporation. She was confident in her ability to analyze complex
            data sets and provide valuable insights to her employer. However,
            Sarah's job came to an abrupt end when her company implemented an AI
            system that could analyze data more efficiently and accurately than
            any human.
          </h4>
          <div className="topic-row-four">
            <div className="topic-row-four-inputs">
              <input type="text" placeholder="Your Name..." />
              <input type="number" placeholder="Your Donation..." />
            </div>
            <div className="topic-row-four-buttons">
              <button className="donation-button">Donate</button>
              <button className="donation-button">Donors</button>
            </div>
          </div>
        </div>
        <div className="urgent-topics-card one">
          <div className="image-border">
            <img className="topics-image" src={SadProgrammer3} alt="foto1" />
          </div>
          <div className="topic-row-two">
            <h4 className="topic-card-name">Help Sarah</h4>
            <div className="topic-row-two-money">
              <h4>Raised: 500/770</h4>
            </div>
          </div>
          <h4 className="topic-text">
            For years, Sarah had worked as a data analyst for a major
            corporation. She was confident in her ability to analyze complex
            data sets and provide valuable insights to her employer. However,
            Sarah's job came to an abrupt end when her company implemented an AI
            system that could analyze data more efficiently and accurately than
            any human.
          </h4>
          <div className="topic-row-four">
            <div className="topic-row-four-inputs">
              <input type="text" placeholder="Your Name..." />
              <input type="number" placeholder="Your Donation..." />
            </div>
            <div className="topic-row-four-buttons">
              <button className="donation-button">Donate</button>
              <button className="donation-button">Donors</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StoryList;
