import sarthilogo from "../../assets/sarthi_logo.svg";
import gradient from "../../assets/gradient.svg";
import "./style.askQues.scss"; // Import the SCSS file

export default function AskQues() {
  return (
    <div className="welcome-custom-container">
      <div className="custom-layout">
        <img className="custom-gradient" src={gradient} alt="" />

        <div className="ask-custom-title">Your Question</div>

        <div className="welcome-custom-text">
          <textarea
            className="ask-custom-textarea"
            placeholder="Type here..."
          ></textarea>
        </div>

        

        <div className="ask-custom-button">
          <button>
            <img src={sarthilogo} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
