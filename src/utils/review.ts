import axios from "axios";
import { log } from "console";

export const calculateDifference = (startDate: Date) => {
  const diffDays = Math.floor(
    (new Date().getTime() - startDate.getTime()) / (3600000 * 24)
  );

  if (diffDays < 7) {
    return `${diffDays} day(s)`;
  } else if (diffDays < 30) {
    return `${Math.floor(diffDays / 7)} week(s) ago`;
  } else if (diffDays < 365) {
    return `${Math.floor(diffDays / 30)} month(s) ago`;
  } else {
    return `${Math.floor(diffDays / 365)} year(s) ago`;
  }
};

export const getReviews = async() => {
  const response = await axios.get("http://localhost:5000/api/reviews");
  console.log(response);
};

export const getServices = async() => {
  const response = await axios.get("http://localhost:5000/api/services");
  return response.data;
};
