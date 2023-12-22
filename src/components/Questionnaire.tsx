import sarthilogo from "../assets/sarthi_logo.svg";
// import downarrow from "../assets/arrow-drop.svg";
import gradient from "../assets/gradient.svg";

export default function questionnaire() {
  return (
    <div className="w-[414px] h-screen">
      <div
        className="flex  text-center font-extrabold  text-white h-screen  
      top-0 left-0 bg-[#003437]   max-w-[480px] flex-col mx-auto"
      >
        <img className="absolute  w-full " src={gradient} alt="" />

        <div className="flex justify-center text-center font-bold text-white mt-10  z-20">
          Sarathi Asks
        </div>

        <div className="absolute"></div>

        <div className="flex justify-center pt-8 ">
          <img src={sarthilogo} className="w-16" alt="" />
        </div>

        <div className="flex justify-center text-3xl z-20">
          Sarathi would like to <br /> know you more to be the <br /> Best
          Rider!
        </div>

        <div className=" justify-center space-y-4 items-center mt-6 z-20 mx-10 rounded-3xl h-16">
          <div>
            <input
              type="text"
              placeholder="Your good name"
              className="block w-[322px] h-14 px-6 rounded-2xl bg-white  text-gray-700 py-2  text-xl  focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <input
              type="Number"
              placeholder="Age"
              className="block w-[322px] h-14 px-6  rounded-2xl bg-white  text-gray-700 py-2  text-xl focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="relative">
            <select
              aria-label="Gender"
              className="block w-[322px] h-14 px-6 text-center rounded-2xl bg-white  text-gray-700 py-2  text-xl focus:outline-none focus:border-blue-500"
            >
              <option>Male</option>
              <option>Female</option>
            </select>
            {/* <div className="pointer-events-none absolute w-14 inset-y-0 right-4 flex items-center px text-gray-700">
              <img src={downarrow} alt="downarrow" />
            </div> */}
          </div>

          <div className="flex justify-end px-4 z-20">
            <button className="flex justify-center text-black items-center w-28 h-16 bg-yellow-400 mt-6 rounded-3xl">
              NEXT
            </button>
          </div>

          <div className="justify-center mt-10 font-extralight text-sm text-green-200">
            These questions are important for Sarathi to get to know you
            personally. Please answer them as truthfully as you can to ride the
            journey of your life!
          </div>
        </div>
      </div>
    </div>
  );
}
