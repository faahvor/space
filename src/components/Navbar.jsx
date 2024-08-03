import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="  fixed w-screen z-50">
      <div className="flex justify-between  items-center lg:pt-[4rem]  pt-[2rem] md:pt-0 top-0 relative">
        <img
          className="h-[2rem] md:ml-[4rem] ml-5 mr-11"
          src="../src/assets/logo.svg"
          alt="Logo"
        />

        <div className="flex items-center ">
          <hr className=" hidden  lg:flex border-t-2 border-slate-500 w-[35rem] z-30 border-opacity-30  absolute ml-[-30rem] " />

          <nav className="text-white">
            <ul className=" hidden  md:flex lg:flex gap-[3rem] w-full bg-white backdrop-blur-lg font-con text-[14px] shadow-lg bg-opacity-5 pl-[4rem] py-8 lg:pr-[10rem] pr-[6rem] rounded-l-lg">
              <li>
                <Link to="/">00 Home</Link>{" "}
              </li>
              <li>
                <Link to="/destination">01 Destination</Link>{" "}
              </li>
              <li>
                <Link to="/crew">02 Crew</Link>{" "}
              </li>
              <li>
                <Link to="/technology">03 Technology</Link>{" "}
              </li>
            </ul>
          </nav>
        </div>
        <div className="md:hidden lg:hidden" onClick={navToggle}>
          <button
            className={`z-50 mt-3 mr-6 block hamburger md:hidden lg:hidden focus:outline-none ${
              menuOpen ? "open" : ""
            }`}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </div>

      <div
        id="menu"
        className={`bg-white backdrop-blur-lg shadow-lg bg-opacity-5 absolute font-con text-[16px] font-normal text-white right-0 left-[10rem] h-screen  top-0 px-10 pt-[8rem] ${
          menuOpen ? "flex" : "hidden"
        } `}
      >
        <ul className="flex flex-col gap-[25px]">
          <li>
            <Link to="/">
              {" "}
              <span className="font-bold mr-2">00</span> Home
            </Link>{" "}
          </li>
          <li>
            <Link to="/destination">
              {" "}
              <span className="font-bold mr-2">01</span> Destination
            </Link>{" "}
          </li>
          <li>
            <Link to="/crew">
              <span className="font-bold mr-2">02</span> Crew
            </Link>{" "}
          </li>
          <li>
            <Link to="/technology">
              {" "}
              <span className="font-bold mr-2">03</span> Technology
            </Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
