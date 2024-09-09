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
import { InstaIcon, MenuIcon, TikTokIcon, WhatsappIcon } from "./assets";
import { Footer } from "./components/footer";
import { GetQuote } from "./components/getQuote";
// import { useDispatch, useSelector } from "react-redux";
// import { actions } from "./store/store";

/*
max-sm for max-width media query
*/

function App() {
  const [showSidebar, setToggleSidebar] = useState<any>(false);
  const [openOptions, setOpenOptions] = useState<any>(false);

  useEffect(() => {}, []);

  return (
    <div className="h-screen overflow-y-hidden overflow-x-hidden relative bg-[url('./assets/bg1.jpg')] bg-cover bg-[rgba(0,0,0,0.5)] bg-blend-overlay backdrop-blur-md">
      {/* <Sidebar showSidebar={showSidebar} setToggleSidebar={setToggleSidebar} /> */}
      <Navbar
        isSidebarVisible={showSidebar}
        setToggleSidebar={setToggleSidebar}
      />
      <div className="flex overflow-auto snap-x snap-mandatory">
        <Services />
        <Reviews />
        <GetQuote />
        {/* <Booking /> */}
        {/* <Gallery /> */}
      </div>
      {/* <button
        title="Glimpse of our service"
        className="h-14 w-14 z-50 p-2 pr-3 fixed flex rounded-full bg-black shadow-[inset_0px_0px_12px_4px_rgba(255,255,255,0.4)] justify-center items-center top-full left-full -translate-x-[120%] -translate-y-[150%] text-black text-lg"
        onClick={() => setCleanClutter(!cleanClutter)}
      >
        <div className="cleanBtn"></div>
      </button> */}
      <div className="absolute top-full left-full -translate-x-[130%] -translate-y-[130%] bg-gray-600">
        <MenuIcon
          fill="white"
          className="md:hidden h-10 w-10 p-1"
          onClick={() => setOpenOptions(!openOptions)}
        />
        <div
          id="horizontalMenu"
          className={`${
            openOptions
              ? "top-1/2 left-0 -translate-x-full -translate-y-1/2"
              : "top-1/2 left-0 translate-x-full -translate-y-1/2 opacity-0"
          } absolute overflow-hidden transition-all duration-300`}
        >
          <ul className="flex flex-row items-center">
            <li className="mx-2">
              <WhatsappIcon className="h-10 w-10 " />
            </li>
            <li className="mx-2">
              <InstaIcon className="h-11 w-11 " />
            </li>
          </ul>
        </div>
        <div
          id="verticalMenu"
          className={`${
            openOptions
              ? "top-0 left-1/2 -translate-x-1/2 -translate-y-full"
              : "top-0 left-1/2 -translate-x-1/2 translate-y-full opacity-0"
          } absolute overflow-hidden transition-all duration-300`}
        >
          <ul className="flex flex-col items-center overflow-hidden">
            <li className="my-2">
              <TikTokIcon className="h-11 w-11" />
            </li>
            <li className="my-2">
              <WhatsappIcon className="h-10 w-10" />
            </li>
            <li className="my-2">
              <InstaIcon className="h-11 w-11" />
            </li>
          </ul>
        </div>
        {/* </div> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
