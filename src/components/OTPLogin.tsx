import sarthilogo from "../assets/sarthi_logo.svg";
import gradient from "../assets/gradient.svg";
import arrow from "../assets/arrow-drop.svg";
export default function OTPLogin() {
  return (
    <div className="w-[414px] h-screen">
      <div
        className="flex  text-center font-extrabold  text-white h-screen  
      top-0 left-0 bg-[#003437]   max-w-[480px] flex-col mx-auto"
      >
        <img className="absolute z-10 w-full " src={gradient} alt="" />
        
        <div className="absolute top-1 left-16 pt-20 z-20 rotate-90">
          <img src={arrow} className="w-12" alt="" />
        </div>
        
        
        <div className="flex text-4xl pt-32">
          It appears you have not reached out to Sarathi before.
        </div>

        <div className="text-center text-sm text-white mt-10 font-extralight">
          Please enter the OTP shared on <br />
          <span className="text-green-700 font-bold underline">
            +91 9978656787{" "}
          </span>
          to get in.
        </div>
        <div className="flex space-x-4 justify-center items-center mt-6  mx-10 z-20 rounded-3xl h-16">
          <div>
            <input
              type="text"
              placeholder="0"
              className="block w-14 h-14 text-center rounded-2xl bg-white  text-gray-700 py-2  text-xl focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="0"
              className="block w-14 h-14 text-center rounded-2xl bg-white  text-gray-700 py-2  text-xl  focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="0"
              className="block w-14 h-14 text-center rounded-2xl bg-white  text-gray-700 py-2  text-xl focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="0"
              className="block w-14 h-14 text-center rounded-2xl bg-white  text-gray-700 py-2  text-xl  focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex justify-center ">
          
            <div className="flex justify-center w-20 h-20 bg-yellow-400 mt-60  rounded-full">
              <img src={sarthilogo} className="w-12 justify-center" alt="" />
            
          </div>
        </div>
      </div>
    </div>
  );
}
