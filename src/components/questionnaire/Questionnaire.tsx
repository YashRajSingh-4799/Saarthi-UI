import sarthilogo from "../../assets/sarthi_logo.svg";
// import downarrow from "../assets/arrow-drop.svg";
import gradient from "../../assets/gradient.svg";
import "./style.questionnaire.scss"; // Import the SCSS file

export default function questionnaire() {
  return (
    <div className="custom-container">
      <div className="custom-layout">
        <img className="custom-gradient" src={gradient} alt="" />

        <div className="custom-title">Sarathi Asks</div>

        <div className="custom-logo">
          <img src={sarthilogo} alt="" />
        </div>

        <div className="custom-question">
          Sarathi would like to <br /> know you more to be the <br /> Best
          Rider!
        </div>

        <div className="custom-inputs">
          {/* Replace with your input fields */}
        </div>

        <div className="custom-button">
          <button>NEXT</button>
        </div>

        <div className="custom-info">
          These questions are important for Sarathi to get to know you
          personally. Please answer them as truthfully as you can to ride the
          journey of your life!
        </div>
      </div>
    </div>
  );
}
