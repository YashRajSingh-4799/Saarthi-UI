import { Link } from "react-router-dom";
import Object from "./../../assets/intr03_feather1.svg";
import Object2 from "./../../assets/intr03_feather2.svg";
import Object3 from "./../../assets/intr03_feather3.svg";
import sarthilogo from "./../../assets/sarthi_logo.svg";
// import "./../App.css";
import "./style.intro3.scss"; // Import the SCSS file

export default function intro3() {
  const handleButtonClick = () => {
    console.log("Button was clicked!");
  };

  return (
    <div className="intro-container">
      <div className="loading-indicator">
        <div className="indicator3-bar"></div>
        <div className="indicator3-bar"></div>
        <div className="indicator3-bar "></div>
      </div>

      <div className="text-container">
        <p className="title-text">
          Ask me anything,
          <br /> anywhere & <br /> anytime. I will <br /> always be there for{" "}
          <br /> you!
        </p>
      </div>

      {/* IMG  */}
      <div className="images-container">
        <div className="image-wrapper left-image">
          <img src={Object} alt="Objects" />
        </div>

        <div className="image-wrapper right-image">
          <img src={Object2} alt="Objects" />
        </div>
      </div>
      <div className="bottom-image">
        <img src={Object3} alt="Objects" />
      </div>

      <div className="sarthi-logo">
        <Link to="/signup">
          <button className="sarthi-btn" onClick={handleButtonClick}>
            <img src={sarthilogo} className="sarthi-img" alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
}
