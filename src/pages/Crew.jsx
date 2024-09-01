import { useMemo, useState } from "react";
import Data from "../Data";

const Crew = () => {
  const [activeTab, setActiveTab] = useState("Commander");


  const crewData = useMemo(() => {
    return Data[0]?.crew?.find((crew) => crew?.role === activeTab);
  }, [activeTab]);

  const handleSwitchTab = (tab) => {
    setActiveTab(tab);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     const arr = [
  //       "Commander",
  //       "Mission Specialist",
  //       "Pilot",
  //       "Flight Engineer",
  //     ];

  //     setActiveTab(arr[index]);
  //     setIndex((prev) => {
  //       if (prev >= arr.length - 1) {
  //         prev = 0;
  //       } else {
  //         prev + 1;
  //       }

  //       return prev;
  //     });
  //   }, 1000);
  // }, [index]);

  console.log("crewData", crewData);
  return (
    <div className=" z-10 text-white lg:bg-crewDesktop md:bg-crewTablet bg-crewMobile min-h-screen  bg-center bg-cover">
      <div className="mx-[5rem]">
        <h1 className="text-[28px]  uppercase font-con pt-[8rem]">
          <span className="text-[#a0a3ad]">02</span> Meet your crew
        </h1>
        <div className="flex lg:pt-[4rem] lg:gap-[8rem] lg:flex-row md:flex-col flex-col-reverse relative text-center lg:text-start lg:justify-start lg:items-start  justify-center items-center">
          <div className="pt-[5rem] flex md:flex-col flex-col-reverse">
            <div className="pb-[2rem] md:pb-0"> 
              <h3 className=" text-[#a0a3ad] lg:text-[32px] md:text-[24px] font-belle">
                {crewData.role}
              </h3>
              <h1 className="w-[444px] lg:text-[46px] md:text-[38px] font-belle">
                {crewData.name}
              </h1>
              <p className="md:w-[444px] w-[327px] lg:text-[18px] md:[16px] font-barlow mx-auto">
                {crewData.bio}
              </p>
            </div>
            <div className="flex gap-4 md:pt-[3rem] pt-[-10rem] pb-[4rem] md:pb-0  lg:justify-start lg:items-start  justify-center items-center">
              <button
                className={`h-3 w-3 ${
                  activeTab === "Commander" ? "bg-white" : "bg-slate-400"
                } rounded-full`}
                onClick={() => handleSwitchTab("Commander")}
              ></button>
              <button
                className={`h-3 w-3 ${
                  activeTab === "Mission Specialist"
                    ? "bg-white"
                    : "bg-slate-400"
                } rounded-full`}
                onClick={() => handleSwitchTab("Mission Specialist")}
              ></button>
              <div
                className={`h-3 w-3 ${
                  activeTab === "Pilot" ? "bg-white" : "bg-slate-400"
                } rounded-full`}
                onClick={() => handleSwitchTab("Pilot")}
              ></div>
              <button
                className={`h-3 w-3 ${
                  activeTab === "Flight Engineer" ? "bg-white" : "bg-slate-400"
                } rounded-full`}
                onClick={() => handleSwitchTab("Flight Engineer")}
              ></button>
            </div>
          </div>
          <div className="">
            <img
              className="lg:h-[25rem] md:h-[20rem] h-[223px] md:top-0 "
              src={crewData.images.webp}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
