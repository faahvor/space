import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

function App() {
  const location = useLocation();

  
  // const getBackgroundClass = () => {

  //   console.log(location.pathname);
  //   switch (location.pathname) {
  //     case "/":
  //       return "lg:bg-desktop md:bg-tablet bg-mobile";
  //     case "/crew":
  //       return "lg:bg-crew-desktop md:bg-crew-tablet bg-crew-mobile";
  //     case "/technology":
  //       return "lg:bg-tech-desktop md:bg-tech-tablet bg-tech-mobile";
  //     default:
  //       return "bg-default";
  //   }
  // };

  return (
    <div className=" min-h-screen " >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
