import React from "react";
import { Service } from "./service";

interface ServicesProps {}

export const Services = ({}: ServicesProps) => {
  return (
    <div
      id="home"
      className="snap-start min-w-full h-[calc(100vh-65px)] overflow-y-scroll flex flex-col p-3"
    >
      <div>
        <p className="text-xl text-center px-4 py-8 text-white">
          Experience a spotless home with our professional cleaning services. We
          ensure a clean, healthy, and welcoming environment for you and your
          family. Checkout our range of services below.
        </p>
      </div>
      <Service />
    </div>
  );
};
