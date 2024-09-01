import React from "react";
import { Review } from "./review";

interface ReviewsProps {}

export const Reviews = ({}: ReviewsProps) => {
  return (
    <div
      id="reviews"
      className="min-w-full px-4 pb-[25px] h-[calc(100vh-68px)] flex items-top justify-center overflow-y-scroll"
    >
      <div>
        <h1 className="text-white text-lg py-4">People kind of like us..</h1>
        <div className="pointer-events-auto">
          <Review align="left" />
          <Review align="right" />
          <Review align="left" />
          <Review align="right" />
          <Review align="left" />
          <Review align="right" />
          <Review align="left" />
          <Review align="right" />
        </div>
      </div>
    </div>
  );
};
