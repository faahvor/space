import { Navigate, Route, Routes } from "react-router-dom";
import Moon from "./Moon";
import Mars from "./Mars";
import Europa from "./Europa";
import Titan from "./Titan";
import Side from "./Side";

const Destination = () => {
  return (
    <div className="min-h-screen pt-[6rem] lg:bg-destinationDesktop md:bg-destinationTablet bg-destinationMobile bg-cover bg-center text-white flex lg:items-end  justify-center">
      <div>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/destination/moon" />} />
            <Route path="/moon" element={<Moon />} />
            <Route path="/mars" element={<Mars />} />
            <Route path="/europa" element={<Europa />} />
            <Route path="/titan" element={<Titan />} />
          </Routes>
        </div>
        <Side />
        {/* <Outlet /> */}
      </div>
    </div>
  );
};

export default Destination;
