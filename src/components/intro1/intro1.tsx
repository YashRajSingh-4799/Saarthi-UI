import { Link } from "react-router-dom";
import Object from "./../../assets/OBJECTS.svg";
import Object2 from "./../../assets/OBJECTS1.png";
import Object3 from "./../../assets/OBJECTS3.svg";
import sarthilogo from "./../../assets/sarthi_logo.svg";
// import "./../App.css";
import "./style.intro1.scss"; // Import the SCSS file

export default function intro1() {

  return (
    <div className="intro1-container">
      <div className="loading-indicator">
        <div className="indicator1-black-bar" ></div>
        <div className="indicator1-bar"></div>
        <div className="indicator1-bar"></div>
      </div>

      <div className="text-container">
        <p className="title-text">Find Happiness <br />
           Quotient within you.</p>
      </div>

      {/* IMG  */}
      <div className="image-container">
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

      <div className="sarthi1-logo">
        <Link to="/intro2">
          <button className="sarthi-btn">
            <img src={sarthilogo} className="sarthi-img" alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
}
