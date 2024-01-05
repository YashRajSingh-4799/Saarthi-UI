import gradient from "../../assets/gradient.svg";
import rightarrow from "../../assets/right-arrow.svg";
import "./style.SignUp.scss";
import { useState } from "react";
import axios from "axios";
import { SEND_OTP_ENDPOINT } from "./../../utils/constrant";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

export default function SignUp() {
  const [phoneNumber, setPhoneNumber] = useState<string>(""); 
  // const [countryCode, setCountryCode] = useState<string>("+91"); 
  const navigate = useNavigate();

  const handlePhoneNumberSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const response = await axios.post(SEND_OTP_ENDPOINT, {
        phoneNumber: phoneNumber,
        // countryCode: countryCode,
      });


      if (response.status === 200) {
        console.log("Phone number sent successfully");
         navigate(`/login?phoneNumber=${phoneNumber}`);
        
      } else {
        console.error("Error in sending phone number");
      }
    } catch (error) {
      
      console.error("Network error:", error);
    }
  };
  
  return (
    <div className="signin-custom-container">
      <div className="signin-custom-layout">
        <img className="signin-custom-gradient" src={gradient} alt="" />
        <div className="signin-custom-text">
          Please enter your mobile number
        </div>
        <form className="signin-input" onSubmit={handlePhoneNumberSubmit}>
          
            <div className="signin-custom-select">
              <select
                // value={countryCode}
                // onChange={(e) => setCountryCode(e.target.value)}
                style={{
                  border: "none",
                  outline: "none",
                }}
              >
                <option>+91</option>
                <option>+1</option>
              </select>
            </div>
            <div className="signin-custom-number-input">
              <input
                type="text"
                placeholder="0000000000"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                style={{
                  border: "none",
                  outline: "none",
                  fontSize: "1.1rem",
                }}
              />
            </div>
        </form>
          <button type="submit" onClick={handlePhoneNumberSubmit} className="signin-custom-button">
            <div className="signin-custom-arrow-container">
              <img className="send-arrow" src={rightarrow} alt="" /> 
            </div>
          </button>
        <div className="signin-custom-agreement">
          By continuing, you agree to Sarathis
          <span className="signin-custom-green-text"> Terms & Conditions</span>
          <span className="signin-custom-white-text"> and </span>
          <span className="signin-custom-green-text">Privacy Policy</span>
        </div>
      </div>
    </div>
  );
}
