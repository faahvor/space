/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Side = () => {
  const location = useLocation();
  const [activeDestination, setActiveDestination] = useState("Moon");
  const navigate = useNavigate();

  return (
    <div className="absolute lg:top-[13rem] lg:right-[20rem] top-[27rem] right-[5rem] md:right-[20rem]">
      <ul className="flex gap-[2rem] text-[16px] font-con uppercase text-[#D0D6F9]">
        <li
          className={location.pathname === "/destination/moon" ? "active" : ""}
        >
          <Link to="/destination/moon"> Moon</Link>
        </li>

        <li
          className={location.pathname === "/destination/mars" ? "active" : ""}
        >
          <Link to="/destination/mars">Mars</Link>
        </li>
        <li
          className={
            location.pathname === "/destination/europa" ? "active" : ""
          }
        >
          <Link to="/destination/europa">Europa</Link>
        </li>
        <li
          className={location.pathname === "/destination/titan" ? "active" : ""}
        >
          <Link to="/destination/titan">Titan</Link>
        </li>
      </ul>
    </div>
  );
};

export default Side;
