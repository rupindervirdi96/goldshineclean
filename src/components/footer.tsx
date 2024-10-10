import React, { useEffect } from "react";

interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  useEffect(() => {}, []);

  return (
    <div className="w-full my-12 mb-[60px] text-white grid grid-cols-[1fr_max-content_1fr]">
      <div className="flex flex-col items-end justify-between md:justify-start pt-5 pb-10 text-right pr-2 md:text-lg">
        <span>Gold Shine Cleaning company</span>
        {/* <span className="text-xs py-1"></span> */}
        <span className="text-xs md:hidden py-2">
          Open daily : <br /> 7:00 AM - 9:00 PM
        </span>
        <span className="text-sm hidden md:block pt-3">
          Open daily: 7:00 AM - 9:00 PM
        </span>
      </div>
      <div className="h-full w-[1px] bg-[rgba(255,255,255,0.4)]"></div>
      <div className="flex flex-col text-xs items-start justify-start pt-6 pb-10 pl-2 md:text-sm">
        <span className="pb-2">Halifax, Nova Scotia</span>
        <span className="py-2">+1 (306)580-6152</span>
        <span className="py-2 hidden md:block">
          goldshinecleaning.inc@gmail.com
        </span>

        <span className="py-2 flex flex-col   md:hidden">
          goldshinecleaning.inc
          <span className="-leading-[1px] md:hidden">@gmail.com</span>
        </span>
      </div>
    </div>
  );
};
