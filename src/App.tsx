import { useEffect, useState } from "react";
import "./App.css";
import { Gallery, Navbar, Reviews, Services } from "./components";
import {
  InstaIcon,
  MenuIcon,
  TikTokIcon,
  WhatsappIcon,
  ArrowBackIcon,
  ArrowForwardIcon,
} from "./assets";
import { GetQuote } from "./components/getQuote";
import { MainDisplayEnhanced } from "./components/mainDisplay";

function App() {
  const [showSidebar, setToggleSidebar] = useState<any>(false);
  const [openOptions, setOpenOptions] = useState<any>(false);
  const [pageIndex, setPageIndex] = useState<any>();

  const pageNameMapping = ["#home", "#reviews", "#getQuote", "#gallery"];

  return (
    <div className="h-screen overflow-y-hidden overflow-x-hidden relative bg-[url('./assets/bg1.jpg')] bg-cover bg-[rgba(0,0,0,0.5)] bg-blend-overlay backdrop-blur-md">
      {/* <Sidebar showSidebar={showSidebar} setToggleSidebar={setToggleSidebar} /> */}
      <Navbar
        isSidebarVisible={showSidebar}
        setToggleSidebar={setToggleSidebar}
      />
      <MainDisplayEnhanced setPageIndex={setPageIndex} />
      {/* <div className="flex overflow-auto snap-x snap-mandatory">
        <Services />
        <Reviews />
        <GetQuote />
        <Gallery /> */}
      {/* <Booking /> */}
      {/* </div> */}

      {/* <button
        title="Glimpse of our service"
        className="h-14 w-14 z-50 p-2 pr-3 fixed flex rounded-full bg-black shadow-[inset_0px_0px_12px_4px_rgba(255,255,255,0.4)] justify-center items-center top-full left-full -translate-x-[120%] -translate-y-[150%] text-black text-lg"
        onClick={() => setCleanClutter(!cleanClutter)}
      >
        <div className="cleanBtn"></div>
      </button> */}
      <div className="absolute top-full left-full -translate-x-[130%] -translate-y-[130%] bg-gray-800">
        <MenuIcon
          fill="white"
          className="md:hidden h-10 w-10 p-1"
          onClick={() => setOpenOptions(!openOptions)}
        />
        <div
          id="horizontalMenu"
          className="top-1/2 left-0 -translate-x-full -translate-y-1/2 absolute overflow-hidden"
        >
          <ul className="flex flex-row items-center">
            <li className="mx-1 h-10 w-10 bg-gray-800 flex items-center justify-center">
              <a href={pageNameMapping[pageIndex - 1]}>
                <ArrowBackIcon className="h-8 w-8" />
              </a>
            </li>
            <li className="mx-1 mr-2 h-10 w-10 bg-gray-800 flex items-center justify-center">
              <a href={pageNameMapping[pageIndex + 1]}>
                <ArrowForwardIcon className="h-8 w-8" />
              </a>
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
            <li className="my-1 h-10 w-10 bg-gray-800 flex items-center justify-center">
              <TikTokIcon className="h-10 w-10" />
            </li>
            <li className="my-1 h-10 w-10 bg-gray-800 flex items-center justify-center">
              <a
                href="https://api.whatsapp.com/send?phone=13065806152"
                target="_blank"
              >
                <WhatsappIcon className="h-8 w-8" />
              </a>
            </li>
            <li className="my-1 mb-2 h-10 w-10 bg-gray-800 flex items-center justify-center">
              <a
                href="https://www.instagram.com/gold_shine_cleaning/"
                target="_blank"
              >
                <InstaIcon className="h-10 w-10" />
              </a>
            </li>
          </ul>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
