import Object from "./../assets/FTE2_OBJECTS1.svg";
import Object2 from "./../assets/FTE2_OBJECTS2.svg";
import Object3 from "./../assets/FTE2_OBJECTS3.svg";
import "./../App.css";

export default function intro2() {
  return (
    <div className="bg-[#B2DDF3] h-screen w-full">
      <div className="flex justify-center items-center pt-12">
        <div className="relative">
          <div className="flex items-center">
            <div className="bg-white w-[12px] h-[12px] rounded-[4px]" />
            <div className="bg-white w-[12px] h-[12px] rounded-[4px] mx-4" />
            <div className="bg-[#003437] w-[12px] h-[12px] rounded-[4px]" />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center pt-10">
        <p className=" w-[342px] top-0 left-0 [font-family:'Meutas_Soft-ExtraBold',Helvetica]  font-extrabold text-[#003437] text-[24px] text-center ">
          Ask me anything, anywhere & anytime. I will always be there for you!
        </p>
      </div>

      {/* IMG  */}
      <div className="flex">
        <div className="flex px-10 opacity-70 scale-150">
          <img src={Object} alt="Objects" />
        </div>

        <div className="flex px-10 scale-150">
          <img src={Object2} alt="Objects" />
        </div>
      </div>
      <div className="absolute bottom-0  left-0 ...">
        <img src={Object3} alt="Objects" />
      </div>
    </div>
  );
}

// export default intro1;
