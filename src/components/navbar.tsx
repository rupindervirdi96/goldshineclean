import React from "react";

interface NavbarProps {
  setToggleSidebar: Function;
  isSidebarVisible: boolean;
}

export const Navbar = ({}: NavbarProps) => {

  return (
    <div className="relative top-0 grid border-b-[0.1px] border-[rgba(255,255,255,0.2)] grid-cols-[1fr_max-content] justify-between p-4 items-center md:p-8">
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
