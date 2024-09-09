import React from "react";

interface ServiceProps {}

export const Service = ({}: ServiceProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-white my-2 bg-[rgba(255,255,255,0.4)] rounded-md">
      <h1 className="text-2xl py-3 pt-5">AIR/BNB</h1>
      <div className="py-2">
        <div className="h-44 w-44 flex overflow-auto snap-x snap-mandatory border-2 border-white rounded-md">
          <div
            id="A"
            className="snap-start min-w-full bg-[url('https://picsum.photos/200/300')]"
          ></div>
          <div
            id="B"
            className="snap-start min-w-full bg-[url('https://picsum.photos/200/300')]"
          ></div>
          <div
            id="C"
            className="snap-start min-w-full bg-[url('https://picsum.photos/200/300')]"
          ></div>
        </div>
        <div className="flex justify-center items-center">
          {[1, 2, 3].map((key) => {
            return (
              <div
                id={key.toString()}
                className="h-2 w-2 m-2 rounded-full border-[1px] border-white"
              ></div>
            );
          })}
        </div>
      </div>
      <p className="p-2 text-center text-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo odio
        molestiae natus doloremque corporis illo possimus sapiente, incidunt
        nostrum quod?
      </p>
      <a href="#getQuote" className="p-2 my-4 bg-green-800 rounded-md">Get quote</a>
    </div>
  );
};
