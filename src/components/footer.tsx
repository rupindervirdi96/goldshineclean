import React, { useEffect } from "react";

interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  useEffect(() => {}, []);

  return (
    <div className="w-full my-8 text-white grid grid-cols-[1fr_1fr]">
      <div className="flex items-center justify-end py-10 text-right pr-2">Gold Shine Cleaning company</div>
      <div className="flex flex-col text-xs items-start justify-start py-10 border-l-[1px] pl-2">
        <span className="py-1">Halifax, Nova Scotia</span>
        <span className="py-1">+1 (306)580-6152</span>
        <span className="py-1">goldshinecleaning.inc@gmail.com</span>
      </div>
    </div>
  );
};
