import sarthilogo from "../../assets/sarthi_logo.svg";
import seek from "../../assets/seek.svg";
import journey from "../../assets/journey.svg";
import story from "../../assets/story.svg";
import gradient from "../../assets/gradient.svg";
import "./style.welcome.scss"; // Import the SCSS file

export default function Welcome() {
  return (
    <div className="welcome-custom-container">
      <div className="custom-layout">
        <img className="custom-gradient" src={gradient} alt="" />

        <div className="custom-logo">
          <img src={sarthilogo} alt="" />
        </div>
        <div className="welcome-custom-text">
          Welcome! <br />I will be your Sarathi in <br /> your awesome journey{" "}
          <br /> of life to true happiness.
        </div>

        <div className="custom-features">
          <p className="custom-features-text">
            Going forward you will have access to the <br />
            following features to track your happiness!
          </p>

          <div className="custom-feature-icons">
            <div className="welcome-custom-feature">
              <div className="custom-icon-bg custom-seek">
                <img src={seek} alt="" />
              </div>
              Seek
            </div>

            <div className="welcome-custom-feature">
              <div className="custom-icon-bg custom-journey">
                <img src={journey} alt="" />
              </div>
              Journey
            </div>

            <div className="welcome-custom-feature">
              <div className="custom-icon-bg custom-story">
                <img src={story} alt="" />
              </div>
              Story
            </div>
          </div>
        </div>

        <div className="custom-questions">
          To unlock true power of Sarathi, Please <br />
          answer these questions Sarathi has <br />
          curated for you.
          <br />
          <br />
          It will take just <span className="custom-bold"> 2min</span> to
          complete this.
        </div>

        <div className="welcome-custom-button">
          <button>
            <img src={sarthilogo} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
