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
    <div className="grid border-b-[0.1px] border-[rgba(255,255,255,0.2)] grid-cols-[1fr_max-content] md:grid-cols-[1fr_2fr_1fr] justify-between max-sm:p-4 md:p-8 items-center">
      {/* {!isSidebarVisible ? (
        <MenuIcon fill="white" className="z-10 md:hidden h-7 w-7" onClick={() => setToggleSidebar(true)} />
      ) : (
        <CloseMenuIcon
          className="z-10 md:hidden h-7 w-7"
          fill="white"
          onClick={() => setToggleSidebar(false)}
        />
      )} */}
      <h1 className="z-20 text-2xl text-green-400">
        Gold Shine Cleaning 
      </h1>
      <ul className="max-sm:hidden text-white flex items-center justify-center">
        <li className="px-5 py-2 mx-2 hover:underline underline-offset-4">Home</li>
        <li className="px-5 py-2 mx-2 hover:underline underline-offset-4">Services</li>
        <li className="px-5 py-2 mx-2 hover:underline underline-offset-4">Reviews</li>
      </ul>
      <a className="z-20 md:flex md:justify-end" href={`tel:+14389981746`}>
        <CallIcon className="h-6 w-6" fill="#ffffff" />
      </a>
    </div>
  );
};
