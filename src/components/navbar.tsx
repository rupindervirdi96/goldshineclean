import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { actions } from "./store/store";
import { MenuIcon, CloseMenuIcon, CallIcon } from "../assets";

interface NavbarProps {
  setToggleSidebar: Function;
  isSidebarVisible: boolean;
}

export const Navbar = ({ setToggleSidebar, isSidebarVisible }: NavbarProps) => {
  useEffect(() => {}, []);

  return (
    <div className="grid border-b-[0.1px] border-[rgba(255,255,255,0.2)] max-sm:grid-cols-[max-content_1fr_max-content] grid-cols-[max-content_1fr_max-content] justify-between max-sm:p-4 md:p-8 items-center">
      {!isSidebarVisible ? (
        <MenuIcon fill="white" className="z-10 md:hidden h-7 w-7" onClick={() => setToggleSidebar(true)} />
      ) : (
        <CloseMenuIcon
          className="z-10 md:hidden h-7 w-7"
          fill="white"
          onClick={() => setToggleSidebar(false)}
        />
      )}
      <h1 className="z-20 text-3xl text-center text-white">
        Gold Shine
      </h1>
      <ul className="max-sm:hidden flex items-center justify-center">
        <li className="px-5 py-2 mx-2 hover:underline underline-offset-4">Home</li>
        <li className="px-5 py-2 mx-2 hover:underline underline-offset-4">Services</li>
        <li className="px-5 py-2 mx-2 hover:underline underline-offset-4">Testimonies</li>
        <li className="px-5 py-2 mx-2 hover:underline underline-offset-4">Reviews</li>
      </ul>
      <a className="z-20" href={`tel:+14389981746`}>
        <CallIcon className="h-7 w-7" fill="#ffffff" />
      </a>
    </div>
  );
};
