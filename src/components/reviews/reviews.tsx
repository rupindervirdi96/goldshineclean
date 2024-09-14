import React from "react";
import { Review } from "./review";

interface ReviewsProps {}

export const Reviews = ({}: ReviewsProps) => {
  const [reviews, setReviews] = React.useState<any>([
    {
      nbStars: 2,
      customerName: "John Doe",
      reviewText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint corrupti, a perspiciatis eaque maxime sapiente. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, ut.",
      userSince: "2 months ago",
    },
    {
      nbStars: 2,
      customerName: "John Doe",
      reviewText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint corrupti, a perspiciatis eaque maxime sapiente. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, ut.",
      userSince: "2 months ago",
    },
    {
      nbStars: 2,
      customerName: "John Doe",
      reviewText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint corrupti, a perspiciatis eaque maxime sapiente. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, ut.",
      userSince: "2 months ago",
    },
  ]);
  return (
    <div
      id="reviews"
      className="snap-start min-w-full h-[calc(100vh-65px)] overflow-y-scroll flex flex-col p-3"
      data-index={1}
    >
      <div>
        <h1 className="text-white text-lg my-8 mt-12">
          Our valued customers told us that..
        </h1>
        <div className="">
          {reviews.map((review: any, key: any) => {
            return (
              <Review
                align={key % 2 === 0 ? "left" : "right"}
                reviewDetails={review}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
