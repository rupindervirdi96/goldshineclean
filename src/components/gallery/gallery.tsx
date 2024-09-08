import React from "react";
import { Display } from "./display";

interface GalleryProps {}

export const Gallery = ({}: GalleryProps) => {
  const [cleanClutter, setCleanClutter] = React.useState(false);
  const colors = [
    "bg-[#E6ED07]",
    "bg-[#CCFF00]",
    "bg-[#AD0AFD]",
    "bg-[#00FFE5]",
    "bg-[#0FFF50]",
    "bg-[#FFA500]",
    "bg-[#6F00FF]",
    "bg-[#E6ED07]",
    "bg-[#CCFF00]",
    "bg-[#AD0AFD]",
    "bg-[#00FFE5]",
    "bg-[#0FFF50]",
    "bg-[#FFA500]",
    "bg-[#6F00FF]",
    "bg-[#E6ED07]",
    "bg-[#CCFF00]",
    "bg-[#AD0AFD]",
    "bg-[#00FFE5]",
    "bg-[#0FFF50]",
    "bg-[#FFA500]",
    "bg-[#6F00FF]",
  ];

  return (
    <div
      id="gallery"
      className={`min-w-full snap-start relative px-4 overflow-y-scroll justify-center pb-4 flex flex-wrap`}
    >
      {/* <button
        title="Glimpse of our service"
        className="h-14 w-14 z-50 p-2 pr-3 fixed flex rounded-full bg-black shadow-[inset_0px_0px_12px_4px_rgba(255,255,255,0.4)] justify-center items-center top-full left-full -translate-x-[120%] -translate-y-[150%] text-black text-lg"
        onClick={() => setCleanClutter(!cleanClutter)}
      >
        <div className="cleanBtn"></div>
      </button> */}
      <h2 className="w-full text-center text-2xl text-gray-600 font-semibold font-sans my-8">
        here's some of our work..
      </h2>
      {colors.map((color, key) => {
        return (
          <Display
            cleanClutter={cleanClutter}
            color={color}
          />
        );
      })}
    </div>
  );
};
