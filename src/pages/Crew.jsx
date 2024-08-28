import { useEffect, useMemo, useState } from "react";
import Data from "../Data";

const Crew = () => {
  const [activeTab, setActiveTab] = useState("Commander");
  const [index, setIndex] = useState(0);

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
    <div className=" text-white lg:bg-crewDesktop md:bg-crewTablet bg-crewMobile min-h-screen  bg-center bg-cover">
      <div className="mx-[5rem]">
        <h1 className="text-[28px] uppercase font-con pt-[10rem]">
          02 Meet your crew
        </h1>
        <div className="flex">
          <div>
            <h3>{crewData.role}</h3>
            <h1>{crewData.name}</h1>
            <p>{crewData.bio}</p>
          </div>
          <div>
            <img className="h-[20rem]" src={crewData.images.webp} alt="" />
          </div>
        </div>
        <div className="flex gap-4">
          <div
            className={`h-2 w-2 ${
              activeTab === "Commander" ? "bg-white" : "bg-slate-400"
            } rounded-full`}
            onClick={() => handleSwitchTab("Commander")}
          ></div>
          <div
            className={`h-2 w-2 ${
              activeTab === "Mission Specialist" ? "bg-white" : "bg-slate-400"
            } rounded-full`}
            onClick={() => handleSwitchTab("Mission Specialist")}
          ></div>
          <div
            className={`h-2 w-2 ${
              activeTab === "Pilot" ? "bg-white" : "bg-slate-400"
            } rounded-full`}
            onClick={() => handleSwitchTab("Pilot")}
          ></div>
          <div
            className={`h-2 w-2 ${
              activeTab === "Flight Engineer" ? "bg-white" : "bg-slate-400"
            } rounded-full`}
            onClick={() => handleSwitchTab("Flight Engineer")}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
