import React from "react";
import { Review } from "./review";

interface ReviewsProps {}

export const Reviews = ({}: ReviewsProps) => {
  return (
    <div
      id="reviews"
      className="snap-start min-w-full h-[calc(100vh-65px)] overflow-y-scroll flex flex-col p-3"
    >
      <div>
        <h1 className="text-white text-lg">Our valued customers told us that..</h1>
        <div className="">
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
