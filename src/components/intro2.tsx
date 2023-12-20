import PrimaryButton  from "../assets/Primary Button.svg";
// import Object from "./../assets/OBJECTS.svg";
// import Object2 from "./../assets/OBJECTS1.png";
// import Object3 from "./../assets/OBJECTS3.svg";
// import "./../App.css";

function intro2() { 

  return (
    <div className="bg-[#e1f2b3] flex flex-row justify-center w-full">
      <div className="bg-[#e1f2b3] w-[414px] h-[895px] relative">
        <p className="absolute w-[342px] top-[124px] left-[36px] [font-family:'Meutas_Soft-ExtraBold',Helvetica] font-extrabold text-[#003437] text-[32px] text-center tracking-[0] leading-[38px]">
          Ride your life with a charioteer who will always provide you the right
          guidance &amp; direction every step of the way.
        </p>
        <div className="left-[181px] bg-white absolute w-[12px] h-[12px] top-[80px] rounded-[4px]" />
        <div className="left-[201px] bg-[#003437] absolute w-[12px] h-[12px] top-[80px] rounded-[4px]" />
        <div className="left-[221px] bg-white absolute w-[12px] h-[12px] top-[80px] rounded-[4px]" />
        <div className="absolute w-[414px] h-[531px] top-[364px] left-0">
          <img
            className="absolute w-[414px] h-[386px] top-[145px] left-0"
            alt="Objects"
            src=""
          />
          <div className="!absolute !w-[105px] !h-[105px] !top-[377px] !left-[154px]">
          <PrimaryButton />
          </div>
          <img
            className="absolute w-[152px] h-[220px] top-[54px] left-0"
            alt="Objects"
            src=""
          />
          <img
            className="absolute w-[180px] h-[161px] top-0 left-[193px]"
            alt="Objects"
            src=""
          />
        </div>
      </div>
    </div>
  );
}

export default intro2;
