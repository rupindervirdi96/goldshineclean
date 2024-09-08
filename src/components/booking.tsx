import React, { useEffect, useState } from "react";
import { DropDownIcon, NextStepIcon } from "../assets";

interface BookingProps {}

export const Booking = ({}: BookingProps) => {
  const [startDate, setStartDate] = useState<any>(new Date());
  useEffect(() => {}, []);

  return (
    // <div
    //   id="home"
    //   className="min-w-full snap-start min-h-full grid grid-rows-[1fr_max-content_1fr] items-center justify-center p-5 pb-2"
    // >
    //   <div>
    //     <p className="text-2xl bg-[rgba(0,0,0,0.5)] shadow-[0px_0px_35px_8px_rgba(0,0,0,0.5)] px-4 py-8 text-[#36ccb3]">
    //       Reliable, thorough, and eco-friendly cleaning that leaves your space
    //       sparkling and immaculate every time.
    //     </p>
    //   </div>
    //   <form
    //     className="flex max-sm:flex-col sm:justify-evenly px-4 py-2 rounded-md items-center justify-center min-w-[70%] mx-auto"
    //     action=""
    //   >
    //     <div className="w-full relative text-gray-600 bg-gray-100 rounded-md mx-1 my-2 shadow-2xl">
    //       <DropDownIcon
    //         fill="#777"
    //         className="absolute top-1/2 left-full -translate-x-8 -translate-y-1/2"
    //       />
    //       <select className="rounded-md px-2 !py-2 w-full bg-transparent appearance-none">
    //         <option value="0">Select service</option>
    //         <option value="1">Service 1</option>
    //         <option value="1">Service 2</option>
    //       </select>
    //     </div>
    //     <input
    //       className="w-full text-gray-600 rounded-md mx-1 px-2 my-2 !py-2 h-[40px] bg-gray-100 content-[attr(placeholder)]"
    //       type="date"
    //       placeholder="Date"
    //       required
    //     />
    //     <div className="relative w-full my-2 rounded-md">
    //       <NextStepIcon
    //         fill="#fff"
    //         className="absolute top-1/2 left-full -translate-x-8 -translate-y-1/2"
    //       />
    //       <input
    //         type="submit"
    //         className="hover:bg-[#2ba591] active:bg-[#2ba591] text-white text-left px-4 w-full py-2 rounded-md bg-[#098a75]"
    //       />
    //     </div>
    //   </form>
    //   <div className="marquee z-50">
    //     <p>
    //       WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME
    //       WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME
    //       WELCOME WELCOME WELCOME WELCOME
    //     </p>
    //   </div>
    // </div>
    <></>
  );
};
