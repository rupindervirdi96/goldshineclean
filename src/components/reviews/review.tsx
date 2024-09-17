import React from "react";
import { StarIcon } from "../../assets";
import { calculateDifference } from "../../utils/review";

interface ReviewProps {
  align: string;
  reviewDetails: any;
}

export const Review = ({ align, reviewDetails }: ReviewProps) => {
  const { nbStars, customerName, reviewText, userSince } = reviewDetails;
  let elements = [];

  for (let index = 0; index < nbStars; index++) {
    elements.push(<StarIcon fill="#d3d000" />);
  }

  return (
    <div
      className={`w-3/4 p-4 my-4 text-xs rounded-md bg-white shadow-sm shadow-white flex flex-col ${
        align === "right" ? "float-right" : "float-left"
      }`}
    >
      <div className="flex text-gray-600 items-top justify-between">
        <div>
          <h2>{customerName}</h2>
          <span className="flex">
            {elements.map((Element: any) => Element)}
          </span>
        </div>
        <div>{calculateDifference(new Date(userSince))}</div>
      </div>
      <div>
        <p>{reviewText}</p>
      </div>
    </div>
  );
};
