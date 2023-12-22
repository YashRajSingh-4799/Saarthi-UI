import downarrow from "../assets/arrow-drop.svg";
import rightarrow from "../assets/right-arrow.svg";
import gradient from "../assets/gradient.svg";
export default function SignUp() {
  

  return (
    <div className="w-[414px] h-screen">
        <div
        className="flex  text-center font-extrabold  text-white h-screen  
      top-0 left-0 bg-[#003437]   max-w-[480px] flex-col mx-auto"
      >
        <img className="absolute z-10 w-full " src={gradient} alt="" />
        <div className="flex text-4xl pt-20">
          Please enter your mobile number
        </div>
        <div className="flex space-x-4 justify-center items-center z-20 mt-20 bg-white mx-10 rounded-3xl h-16">
          <div className="relative">
            <select className="block appearance-none w-24  text-gray-900 py-2 px-3 rounded focus:outline-none focus:border-blue-500">
              <option>+91</option>
              <option>+1</option>
            </select>
            <div className="pointer-events-none absolute w-14 inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <img src={downarrow} alt="downarrow" />
            </div>
          </div>

          <div>
            <input
              type="text"
              placeholder="0000000000"
              className="block w-48 bg-white  text-gray-700 py-2  text-xl rounded focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex justify-center ">
          <div className="flex justify-center w-20 h-20 bg-yellow-400 mt-64 rounded-full">
            <img src={rightarrow} className="w-7 justify-center" alt="" />
          </div>
        </div>
        <div className="text-center text-sm text-white mt-10 font-extralight">
          By continuing, you agree to Sarathi’s{" "}
          <span className="text-green-600">
            Terms &
            <br /> Conditions
            <span className="text-white"> and </span>
            Privacy Policy
          </span>
        </div>
      </div>
    </div>
  );
}
