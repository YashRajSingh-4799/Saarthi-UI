import Object from "./../assets/FTE2_OBJECTS1.svg";
import Object2 from "./../assets/FTE2_OBJECTS2.svg";
import Object3 from "./../assets/FTE2_OBJECTS3.svg";
import sarthilogo from "./../assets/sarthi_logo.svg";
import "./../App.css";

export default function intro2() {

  const handleButtonClick = () => {
 
    console.log("Button was clicked!");
  };
  return (
    <div className="bg-[#E1F2B3] h-screen w-full">
      <div className="flex justify-center items-center pt-12">
        <div className="relative">
          <div className="flex items-center">
            <div className="bg-white w-[12px] h-[12px] rounded-[4px]" />
            <div className="bg-[#003437] w-[12px] h-[12px] rounded-[4px] mx-4" />
            <div className="bg-white w-[12px] h-[12px] rounded-[4px]" />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center pt-10">
        <p className=" w-[342px] top-0 left-0 [font-family:'Meutas_Soft-ExtraBold',Helvetica]  font-extrabold text-[#003437] text-[24px] text-center ">
          Ride your life with a charioteer who will always provide you the right
          guidance & direction every step of the way.
        </p>
      </div>

      {/* IMG  */}
      <div className="flex">
        <div className="absolute opacity-80 w-80">
          <img src={Object} alt="Objects" />
        </div>

        <div className="absolute right-10  w-32">
          <img src={Object2} alt="Objects" />
        </div>
      </div>
      <div className="absolute w-[380px] bottom-0  right-0 ...">
        <img src={Object3} alt="Objects" />
      </div>

      <div className="absolute bottom-16 left-48 z-10">
        <button
          className="flex justify-center items-center w-16 h-16 bg-yellow-400 mt-6 rounded-full"
          onClick={handleButtonClick} 
        >
          <img src={sarthilogo} className="w-12 justify-center" alt="" />
        </button>
      </div>
    </div>
  );
}