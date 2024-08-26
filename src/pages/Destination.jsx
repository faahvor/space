import { Link, Outlet, useLocation } from "react-router-dom";


const Destination = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen pt-[6rem] lg:bg-destinationDesktop md:bg-destinationTablet bg-destinationMobile bg-cover bg-center text-white flex items-end justify-center">
      <div className="flex lg:flex-row flex-col justify-center justify-items-center mx-[2rem] lg:gap-[10rem]">
        <div className="flex flex-1 flex-col items-center">
          <h1 className="text-[28px] font-barlow font-normal flex gap-4 md:ml-[-30rem] lg:ml-0">
            <span className="text-[#D0D6F9]">01</span>
            <span className="uppercase">Pick your destination</span>
          </h1>
        </div>
        <div className="flex flex-2 flex-col lg:w-[445px] lg:h-[472px] pt-[4rem] items-center lg:items-start">
          <div>
            <ul className="flex gap-[2rem] text-[16px] font-con uppercase text-[#D0D6F9]">
              <li className={location.pathname === "/destination/moon" ? "active" : ""}>
                <Link to="/destination/moon">Moon</Link>
              </li>
              <li className={location.pathname === "/destination/mars" ? "active" : ""}>
                <Link to="/destination/mars">Mars</Link>
              </li>
              <li className={location.pathname === "/destination/europa" ? "active" : ""}>
                <Link to="/destination/europa">Europa</Link>
              </li>
              <li className={location.pathname === "/destination/titan" ? "active" : ""}>
                <Link to="/destination/titan">Titan</Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Destination;
