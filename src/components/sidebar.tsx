import React, { useEffect } from "react";
import { NextStepIcon } from "../assets";
// import { useDispatch, useSelector } from "react-redux";
// import { actions } from "./store/store";

interface ISidebarProps {
  showSidebar: boolean;
  setToggleSidebar: Function;
}

export const Sidebar = ({ showSidebar, setToggleSidebar }: ISidebarProps) => {

  return (
    <div
      className={`absolute flex flex-col w-full h-screen ${
        showSidebar ? "translate-x-0" : "-translate-x-full"
      }  transition-all ease-in-out text-white z-10`}
    >
      <ul className="pt-[68px] bg-slate-800">
        <a
          onClick={() => setToggleSidebar(false)}
          href="#home"
          className="border-t-[0.1px] border-[rgba(255,255,255,0.2)] hover:bg-slate-700 p-4 flex items-center justify-between"
        >
          Home <NextStepIcon className="inline h-4 w-4" fill="#fff" />
        </a>
        <a
          onClick={() => setToggleSidebar(false)}
          href="#services"
          className="hover:bg-slate-700 p-4 flex items-center justify-between"
        >
          Services <NextStepIcon className="inline h-4 w-4" fill="#fff" />
        </a>
        <a
          onClick={() => setToggleSidebar(false)}
          href="#gallery"
          className="hover:bg-slate-700 p-4 flex items-center justify-between"
        >
          Gallery <NextStepIcon className="inline h-4 w-4" fill="#fff" />
        </a>
        <a
          onClick={() => setToggleSidebar(false)}
          href="#testimonies"
          className="hover:bg-slate-700 p-4 flex items-center justify-between"
        >
          Testimonies <NextStepIcon className="inline h-4 w-4" fill="#fff" />
        </a>
        <a
          onClick={() => setToggleSidebar(false)}
          href="#reviews"
          className="hover:bg-slate-700 p-4 flex items-center justify-between"
        >
          Reviews <NextStepIcon className="inline h-4 w-4" fill="#fff" />
        </a>
      </ul>
      <div className="flex-1 bg-slate-400 opacity-75"></div>
    </div>
  );
};
