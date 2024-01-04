import { Link } from "react-router-dom";
import Object from "./../../assets/FTE2_OBJECTS1.svg";
import Object2 from "./../../assets/FTE2_OBJECTS2.svg";
import Object3 from "./../../assets/FTE2_OBJECTS3.svg";
import sarthilogo from "./../../assets/sarthi_logo.svg";
// import "./../App.css"/;
import "./style.intro2.scss"; // Import the SCSS file

export default function intro2() {
  const handleButtonClick = () => {
    console.log("Button was clicked!");
  };

  return (
    <div className="intro2-container">
      <div className="loading-indicator">
        <div className="indicator2-bar"></div>
        <div className="indicator2-bar nth-child"></div>
        <div className="indicator2-bar"></div>
      </div>

      <div className="text-container">
        <p className="title-text">
          Ride your life with a charioteer who will always provide you the right
          guidance & direction every step of the way.
        </p>
      </div>

      {/* IMG  */}
      <div className="images-container">
        <div className="image1-wrapper">
          <img src={Object} alt="Objects" />
        </div>

        <div className="image2-wrapper">
          <img src={Object2} alt="Objects" />
        </div>
      </div>
      <div className="bottom-image">
        <img src={Object3} alt="Objects" />
      </div>

      <div className="sarthi2-logo">
        <Link to="/intro3">
          <button className="sarthi2-btn" onClick={handleButtonClick}>
            <img src={sarthilogo} className="sarthi2-img" alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
}
