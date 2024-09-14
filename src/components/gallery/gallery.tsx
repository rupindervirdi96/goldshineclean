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
  ];

  return (
    <div
      id="gallery"
      className={`min-w-full snap-start h-[calc(100vh-65px)] px-4 overflow-y-scroll justify-center pb-4 flex flex-wrap`}
      data-index={3}
    >
      <div className="w-full text-center text-lg text-white my-8 mt-12 flex items-center justify-center">
        <h2>here's some of our work..</h2>
        <button
          title="Glimpse of our service"
          className="py-1 px-2 mx-2 flex text-sm items-center text-white bg-blue-900 rounded-md border-2 border-white"
          onClick={() => setCleanClutter(!cleanClutter)}
        >
          <span>declutter</span>
          <div className="cleanBtn"></div>
        </button>
      </div>
      {colors.map((color, key) => {
        return <Display cleanClutter={cleanClutter} color={color} />;
      })}
    </div>
  );
};
