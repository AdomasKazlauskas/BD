import "../App.scss";

function UrgentHelp() {
  return (
    <>
      <div className="howItWorks-header">
        <h3 className="section-name">Urgent help needed</h3>
        <h1 className="section-title">Featured topics</h1>
      </div>
      <div className="urgent-topics-list">
        <div className="urgent-topics-card one">
          <img className="topics-image" src="" alt="foto1" />
          <div className="topic-row-two">
            <h2 className="topic-card-name">Register yourself</h2>
            <div className="topic-row-two-money">
              <h4>Needed: 1000</h4>
              <h4>Left: 400</h4>
              <h4>Raised: 600</h4>
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
              <button>Donate</button>
              <button>Donors</button>
            </div>
          </div>
        </div>
        <div className="howItWorks-card two">
          <h1>...Two</h1>
          <h2 className="how-card-name">Tell about yourself</h2>
          <h4>Add your story and show why you deserve the money</h4>
        </div>
        <div className="howItWorks-card three">
          <h1>...Three</h1>
          <h2 className="how-card-name">Promote yourself</h2>
          <h4>Allow people to see your story by sharing it</h4>
        </div>
      </div>
    </>
  );
}

export default UrgentHelp;
