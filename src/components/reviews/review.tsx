import React from "react";
import { StarIcon } from "../../assets";

interface ReviewProps {
  align: string;
}

export const Review = ({ align }: ReviewProps) => {
  return (
    <div
      className={`w-3/4 p-4 my-4 text-xs rounded-md bg-white shadow-sm shadow-white flex flex-col ${
        align === "right" ? "float-right" : "float-left"
      }`}
    >
      <div className="flex text-gray-600 items-top justify-between">
        <div>
          <h2>John Doe</h2>
          <span className="flex">
            <StarIcon fill="#d3d000" />
            <StarIcon fill="#d3d000" />
            <StarIcon fill="#d3d000" />
            <StarIcon fill="#d3d000" />
            <StarIcon fill="#d3d000" />
          </span>
        </div>
        <div>2 months ago</div>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint
          corrupti, a perspiciatis eaque maxime sapiente.
        </p>
      </div>
    </div>
  );
};
