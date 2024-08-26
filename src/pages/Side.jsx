import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Side = () => {
  const location = useLocation();
  const [activeDestination, setActiveDestination] = useState("Moon");
  const navigate = useNavigate();

  const handleClick = (destination) => {
    navigate(`/destination/${destination}`)
  };

  return (
    <div>
      <ul className="flex gap-[2rem] text-[16px] font-con uppercase text-[#D0D6F9]">
        <Link to="/destination/moon">
          <li
           
            className={
              location.pathname === "/destination/moon"
                ? "active"
                : "bg-red-600 text-5xl cursor-pointer"
            }
          >
            Moon
          </li>
        </Link>{" "}
        <li
          className={location.pathname === "/destination/mars" ? "active" : ""}
        >
          <Link to="/destination/mars" >
            Mars
          </Link>
        </li>
        <li
          className={
            location.pathname === "/destination/europa" ? "active" : ""
          }
        >
          <Link to="/destination/europa" onClick={() => handleClick("europa")}>
            Europa
          </Link>
        </li>
        <li
          className={location.pathname === "/destination/titan" ? "active" : ""}
        >
          <Link to="/destination/titan" onClick={() => handleClick("titan")}>
            Titan
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Side;
