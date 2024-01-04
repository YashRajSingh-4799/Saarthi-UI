import  { useState, useRef, useEffect } from "react"; 
import axios from "axios";
import sarthilogo from "../../assets/sarthi_logo.svg";
import gradient from "../../assets/gradient.svg";
import "./style.Login.scss"; // Import the SCSS file
import { useNavigate, useSearchParams } from "react-router-dom";
import { VERIFY_OTP_ENDPOINT } from "../../utils/constrant";

export default function OTPLogin() {
 const [verificationCode, setVerificationCode] = useState<string[]>([
   "",
   "",
   "",
   "",
 ]);

 const [phoneNumber, setPhoneNumber] = useState<string>("7388866668");
 const [searchParams] = useSearchParams();

 useEffect(() => {
   const params = new URLSearchParams(searchParams);
   const number = params.get("phoneNumber");
   if (number) {
     setPhoneNumber(number);
   }
 }, [searchParams]);
 const navigate = useNavigate();

 const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(4).fill(null));

 const handleVerificationCodeSubmit = async (
   e: React.FormEvent<HTMLFormElement>
 ) => {
   e.preventDefault();

   try {
     const enteredOTP: number = Number(verificationCode.join(""));
     const response = await axios.post( VERIFY_OTP_ENDPOINT, {
       phoneNumber: phoneNumber,
       otp: enteredOTP,
     });
     if (response.status === 200) {
       console.log("OTP verified successfully");
       navigate("/welcome"); 
     } else {
       console.error("Error in OTP verification");
     }
   } catch (error) {
     console.error("Network error:", error);
   }
 };

 const handleInput = (
   index: number,
   event: React.ChangeEvent<HTMLInputElement>
 ) => {
   const inputValue: string = event.target.value;

   if (inputValue.length > 1) {
     event.preventDefault();
     return;
   }

   const newVerificationCode = [...verificationCode];
   newVerificationCode[index] = inputValue;
   setVerificationCode(newVerificationCode);

   // Move to the next input field if there is input and the next field exists
   if (inputValue && inputRefs.current[index + 1]) {
     inputRefs.current[index + 1]?.focus();
   }
 };

 const handleBackspace = (
   index: number,
   event: React.KeyboardEvent<HTMLInputElement>
 ) => {
   if (
     event.key === "Backspace" &&
     !verificationCode[index] &&
     inputRefs.current[index - 1]
   ) {
     inputRefs.current[index - 1]?.focus();
   }
 };
  return (
    <div className="custom-container">
      <div className="custom-layout">
        <img className="custom-gradient" src={gradient} alt="" />

        <div className="custom-text">
          It appears you have not reached out to Sarathi before.
        </div>

        <div className="custom-info-text">
          Please enter the OTP shared on <br />
          <span className="custom-bold-number">+91 9978656787</span> to get in.
        </div>

        <form onSubmit={handleVerificationCodeSubmit} className="custom-inputs">
          <div className="input-container">
            {[...Array(4)].map((_, index) => (
              <input
                key={index}
                type="number"
                min="0"
                max="9"
                maxLength={1}
                placeholder="0"
                className="custom-input"
                value={verificationCode[index] || ""}
                onChange={(e) => handleInput(index, e)}
                onKeyDown={(e) => handleBackspace(index, e)}
              />
            ))}
          </div>

          <button type="submit" className="login-custom-button">
            <div className="login-custom-logo">
              <img src={sarthilogo} alt="" className="login-sarthi-logo" />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}