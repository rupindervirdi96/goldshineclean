import React, { useEffect } from "react";

interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  useEffect(() => {}, []);

  return (
    <div className="w-full my-12 mb-[60px] text-white grid grid-cols-[1fr_max-content_1fr]">
      <div className="flex items-start justify-end pt-5 pb-10 text-right pr-2">
        Gold Shine Cleaning company
      </div>
      <div className="h-full w-[1px] bg-[rgba(255,255,255,0.4)]"></div>
      <div className="flex flex-col text-xs items-start justify-start pt-6 pb-10 pl-2">
        <span className="pb-2">Halifax, Nova Scotia</span>
        <span className="py-2">+1 (306)580-6152</span>
        <span className="py-2">goldshinecleaning.inc</span>
        <span className="leading-[3px]">@gmail.com</span>
      </div>
    </div>
  );
};
