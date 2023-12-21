import sarthilogo from "../assets/sarthi_logo.svg";
import seek from "../assets/seek.svg";
import journey from "../assets/journey.svg";
import story from "../assets/story.svg";
import gradient from "../assets/gradient.svg";

export default function OTPLogin() {
  return (
    <div className="w-[414px] h-screen">
      <div
        className="flex  text-center font-extrabold  text-white h-screen  
      top-0 left-0 bg-[#003437]   max-w-[480px] flex-col mx-auto"
      >
        <img className="absolute z-10 w-full " src={gradient} alt="" />

        <div className="flex justify-center pt-20 z-20">
          <img src={sarthilogo} className="w-24" alt="" />
        </div>

        <div className="flex justify-center text-3xl z-20">
          Welcome! <br />I will be your Sarathi in <br /> your awesome journey{" "}
          <br /> of life to true happiness.
        </div>

        <div className="text-center text-sm text-white mt-10 font-extralight z-20">
          Going forward you will have access to the <br />
          following features to track your happiness!
        </div>
        <div className="flex space-x-6 font-normal justify-center items-center mt-6  mx-10 rounded-3xl h-16 z-20">
          <div className="text-[#E29B65]">
            <div className="flex w-14 h-14 justify-center items-center   bg-[#003437] rounded-2xl">
              <img src={seek} className="w-8" alt="" />
            </div>
            Seek
          </div>

          <div className="text-[#FAB7A7]">
            <div className="flex w-14 h-14 bg-[#003437] rounded-2xl">
              <img src={journey} alt="" />
            </div>
            Journey
          </div>

          <div className="text-[#ABADD6]">
            <div className="flex w-14 h-14 justify-center bg-[#003437] rounded-2xl">
              <img src={story} className="w-10" alt="" />
            </div>
            Story
          </div>
        </div>

        <div className="justify-center mt-10 font-normal text-white">
          To unlock true power of Sarathi, Please <br />
          answer these questions Sarathi has <br />
          curated for you.
          <br />
          <br />
          It will take just <span className="font-extrabold"> 2min</span> to
          complete this.
        </div>

        <div className="flex justify-center z-20">
          <button className="flex justify-center items-center w-16 h-16 bg-yellow-400 mt-6 rounded-full">
            <img src={sarthilogo} className="w-12 justify-center" alt="" />
          </button>
        </div>
        
      </div>
    </div>
  );
}
