import { useEffect, useMemo, useState } from "react";
import Data from "../Data.js";

const Technology = () => {
  const [activeTab, setActiveTab] = useState("Launch vehicle");
const [isLandscape, setIsLandscape]=useState(false)

const updateImage=()=>{
  const screenWidth = window.innerWidth
  setIsLandscape(screenWidth >= 1300)
}
useEffect(()=>{
  updateImage()
  window.addEventListener('resize',updateImage)

  return ()=>window.removeEventListener('resize',updateImage)
},[])
  const techData = useMemo(() => {
    return Data[0]?.technology?.find(
      (technology) => technology?.name === activeTab
    );
  }, [activeTab]);

  const handleSwitchTab = (tab) => {
    setActiveTab(tab);
  };


  return (
    <div className="lg:bg-techDesktop md:bg-techTablet bg-techMobile  min-h-screen flex flex-col text-white lg:pl-[7rem]">
      <h1 className="lg:text-[28px] uppercase font-con pb-3 pt-[8rem] md:pb-[4rem] text-center md:text-start ">
        <span className="text-[#a0a3ad] md:text-[24px] text-[16px] ">03</span> space launch 101
      </h1>
      <div className="flex lg:flex-row  lg:gap-[6rem] items-center flex-col-reverse">
        <div className="flex lg:gap-[6rem] md:gap-[1rem] lg:mt-0 md:mt-10 mt-4 lg:flex-row flex-col items-center lg:items-start">
          <div className="flex lg:flex-col gap-3  ">
            <div
              className={`cursor-pointer h-[40px] w-[40px] md:h-[3rem] md:w-[3rem] rounded-full text-black flex items-center justify-center text-[30px] font-belle 
              ${
                activeTab === "Launch vehicle"
                  ? "bg-white text-black"
                  : "bg-black border-2 border-white text-white"
              }`}
              onClick={() => handleSwitchTab("Launch vehicle")}
            >
              1
            </div>
            <div
              className={ `md:h-[3rem] h-[40px] w-[40px] md:w-[3rem] rounded-full text-black flex items-center justify-center text-[30px] font-belle 
              ${
                activeTab === "Spaceport"
                  ? "bg-white text-black"
                  : "bg-black border-2 border-white text-white"
              }`}
              onClick={() => handleSwitchTab("Spaceport")}
            >
              2
            </div>
            <div
              className={`md:h-[3rem]  h-[40px] w-[40px] md:w-[3rem] rounded-full text-black flex items-center justify-center text-[30px] font-belle 
              ${
                activeTab === "Space capsule"
                  ? "bg-white text-black"
                  : "bg-black border-2 border-white text-white"
              }`}
              onClick={() => handleSwitchTab("Space capsule")}
            >
              3
            </div>
          </div>

          <div className="lg:w-[470px] lg:h-[303px] lg:pt-0 pt-[2rem] flex flex-col text-center lg:text-start  md:w-[458px] items-center justify-center lg:items-start lg:justify-start  w-[327px] ">
            <h1 className="lg:text-[16px] lg:w-[150px] text-[14px] uppercase font-con">
              The technology is
            </h1>
            <h1 className="lg:text-[56px] md:text-[40px] text-[24px] font-belle uppercase">
              {techData?.name}
            </h1>
            <p className="text-[18px] w-[444px] font-normal font-barlow px-[2rem] md:px-0">
              {techData?.description}
            </p>
          </div>
        </div>

        <div className="lg:pt-0 lg:ml-[5rem]  md:w-full">
          <img
            className={` ${isLandscape?'lg:h-[19rem] lg:w-[523px] h-[175px]  rounded-sm':'md:w-full  md:h-[310px]  '}`}
            src={isLandscape ? techData?.images?.portrait : techData?.images?.landscape}
            alt={techData?.name}
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;
