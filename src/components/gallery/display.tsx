import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { actions } from "./store/store";

interface DisplayProps {
  color: string;
  cleanClutter: boolean;
}

export const Display = ({ color, cleanClutter }: DisplayProps) => {
  useEffect(() => {}, []);

  return (
    <div
      className={`w-36 h-36 relative m-1 my-2 inline-block hover:z-10 hover:duration-150 hover:scale-150 text-center`}
    >
      <div
        className={`h-full w-full transition-all duration-1000 absolute shadow-[0px_0px_15px_3px_rgba(0,0,0,0.8)] bg-cover bg-[url("https://picsum.photos/200/300")] border-2 border-white rounded-md`}
        style={{
          top: !cleanClutter
            ? `${Math.floor(Math.random() * (20 - -20 + 1) + -20)}%`
            : "0%",
          left: !cleanClutter
            ? `${Math.floor(Math.random() * (20 - -20 + 1) + -20)}%`
            : "0%",
          transform: !cleanClutter
            ? `rotate(${Math.floor(Math.random() * (20 - -20 + 1) + -20)}deg)`
            : "rotate(0deg)",
        }}
      ></div>
    </div>
  );
};
