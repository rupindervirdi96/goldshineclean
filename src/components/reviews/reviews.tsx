import React from "react";
import { Review } from "./review";

interface ReviewsProps {}

export const Reviews = ({}: ReviewsProps) => {
  const [reviews, setReviews] = React.useState<any>([
    {
      nbStars: 5,
      customerName: "Roneet Kumar",
      reviewText:
        "Very satisfied with their service. The team was professional and did a fantastic job. My house looks and feels amazing. Will definitely hire them again.",
      userSince: "8/11/2024",
    },
    {
      nbStars: 5,
      customerName: "Rupinder Virdi",
      reviewText:
        "Superb cleaning service! They were thorough and left my house sparkling. The team was friendly and professional. I will definitely use them again.",
      userSince: "7/16/2024",
    },
    {
      nbStars: 5,
      customerName: "Karl Nagribianko",
      reviewText:
        "Service exceptionnel! Mon appartement n’a jamais été aussi propre. L’équipe était ponctuelle, professionnelle et très minutieuse. Je recommande vivement leurs services.",
      userSince: "09/01/2024",
    },
  ]);
  return (
    <div
      id="reviews"
      className="min-w-full flex flex-col p-3"
      data-index={1}
    >
      <div>
        <h1 className="text-white text-center text-lg my-8 mt-12">
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
