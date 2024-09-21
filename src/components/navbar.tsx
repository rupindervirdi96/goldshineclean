import React, { useEffect } from "react";
import { MenuIcon, CloseMenuIcon, CallIcon } from "../assets";

interface NavbarProps {
  setToggleSidebar: Function;
  isSidebarVisible: boolean;
}

export const Navbar = ({ setToggleSidebar, isSidebarVisible }: NavbarProps) => {
  useEffect(() => {}, []);

  return (
    // <div className="grid border-b-[0.1px] border-[rgba(255,255,255,0.2)] max-sm:grid-cols-[max-content_1fr_max-content] grid-cols-[max-content_1fr_max-content] justify-between max-sm:p-4 md:p-8 items-center">
    <div className="relative top-0 grid border-b-[0.1px] border-[rgba(255,255,255,0.2)] grid-cols-[1fr_max-content] justify-between max-sm:p-4 items-center">
      {/* {!isSidebarVisible ? (
        <MenuIcon fill="white" className="z-10 md:hidden h-7 w-7" onClick={() => setToggleSidebar(true)} />
      ) : (
        <CloseMenuIcon
          className="z-10 md:hidden h-7 w-7"
          fill="white"
          onClick={() => setToggleSidebar(false)}
        />
      )} */}
      <div className="marquee">
          <p>
            WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME
            WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME
            WELCOME WELCOME WELCOME WELCOME
          </p>
        </div>
      <h1 className="mainTitle z-20 text-3xl text-green-400">
        GOLD SHINE CLEANING 
      </h1>
      <a className="z-20 text-sm md:flex md:justify-end text-white" href={`tel:+13065806152`}>
        <span>+1 (306 580-6152)</span>
      </a>
    </div>
  );
};
