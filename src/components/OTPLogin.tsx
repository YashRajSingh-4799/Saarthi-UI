import sarthilogo from "../assets/sarthi_logo.svg";
export default function OTPLogin() {
  return (
    <div className="w-[414px] h-screen">
      <div className="text-center font-extrabold text-black w-[414px] h-screen top-0 left-0 [background:linear-gradient(180deg,rgb(0,100,155)_10%,rgb(247,246,242)_22.05%,rgb(152,185,204)_71.88%,rgb(0,39,78)_100%)] ">
        <div className="flex text-4xl pt-20">
          It appears you have not reached out to Sarathi before.
        </div>

        <div className="text-center text-sm text-white mt-10 font-extralight">
          Please enter the OTP shared on <br />
          <span className="text-green-600">
            +91 9978656787
            <span className="text-white"> and </span>
          </span>
          to get in.
        </div>
        <div className="flex space-x-4 justify-center items-center mt-6  mx-10 rounded-3xl h-16">
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
          
            <div className="flex justify-center w-20 h-20 bg-yellow-400 mt-64 rounded-full">
              <img src={sarthilogo} className="w-12 justify-center" alt="" />
            
          </div>
        </div>
      </div>
    </div>
  );
}
