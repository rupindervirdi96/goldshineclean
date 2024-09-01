import React, { useEffect, useState } from "react";
import "./App.css";
import {
  Sidebar,
  Navbar,
  Booking,
  Gallery,
  Reviews,
  Services,
} from "./components";
// import { useDispatch, useSelector } from "react-redux";
// import { actions } from "./store/store";

/*
max-sm for max-width media query
*/

function App() {
  const [showSidebar, setToggleSidebar] = useState<any>(false);

  useEffect(() => {}, []);

  return (
    <div className="w-full overflow-y-scroll bg-[url('./assets/bg1.jpg')] bg-cover bg-blend-overlay">
      <Sidebar showSidebar={showSidebar} setToggleSidebar={setToggleSidebar} />
      <Navbar
        isSidebarVisible={showSidebar}
        setToggleSidebar={setToggleSidebar}
      />
      <div className="flex overflow-x-scroll">
        <Booking />
        <Services />
        <Gallery />
        <Reviews />
      </div>
    </div>
  );
}

export default App;
