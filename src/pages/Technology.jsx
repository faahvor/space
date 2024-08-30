import { useMemo, useState } from "react";
import Data from "../Data.js";

const Technology = () => {
  const [activeTab, setActiveTab] = useState("Launch vehicle");

  const techData = useMemo(() => {
    return Data[0]?.technology?.find(
      (technology) => technology?.name === activeTab);
  }, [activeTab]);

  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="lg:bg-techDesktop md:bg-techTablet bg-techMobile min-h-screen flex flex-col text-white lg:pl-[7rem]">
      <h1 className="lg:text-[28px] uppercase font-con pt-[8rem] pb-[4rem]">
        <span className="text-[#a0a3ad]">03</span> space launch 101
      </h1>
      <div className="flex lg:flex-row flex-col lg:gap-[6rem] items-center">
        <div className="flex lg:flex-col gap-3 ">
          <div
            className={`cursor-pointer h-[3rem] w-[3rem] rounded-full text-black flex items-center justify-center text-[30px] font-belle 
              ${activeTab === "Launch vehicle" ? "bg-white" : "bg-slate-400"}`}
            onClick={() => handleTab("Launch vehicle")}
          >
            1
          </div>
          <div
            className={`h-[3rem] w-[3rem] rounded-full text-black flex items-center justify-center text-[30px] font-belle 
              ${activeTab === "Spaceport" ? "bg-white" : "bg-slate-400"}`}
            onClick={() => handleTab("Spaceport")}
          >
            2
          </div>
          <div
            className={`h-[3rem] w-[3rem] rounded-full text-black flex items-center justify-center text-[30px] font-belle 
              ${activeTab === "Space capsule" ? "bg-white" : "bg-slate-400"}`}
            onClick={() => handleTab("Space capsule")}
          >
            3
          </div>
        </div>

        <div className="w-[470px] h-[303px] lg:pt-0 pt-[2rem]">
          <h1 className="lg:text-[16px] lg:w-[150px] uppercase font-con">
            The technology is
          </h1>
          <h1 className="text-[56px] font-belle uppercase">{techData?.name}</h1>
          <p className="text-[18px] w-[444px] font-normal font-barlow">
            {techData?.description}
          </p>
        </div>

        <div className="lg:pt-0 pt-[2rem]">
          <img
            className="lg:h-[19rem] lg:w-[523px] h-[223px]"
            src={techData?.images?.portrait}
            alt={techData?.name}
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;
