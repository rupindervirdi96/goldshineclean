import React from "react";
import { EnhancedServiceWithSlideWork } from "./service";
import { Footer } from "../footer";

interface ServicesProps {}

export const Services = ({}: ServicesProps) => {
  const [services, setServices] = React.useState<any>([
    {
      name: "AIRBNB",
      images: ["", ""],
      description:
        "Experience a spotless home with our professional cleaning services. We ensure a clean, healthy, and welcoming environment for you and your family. Checkout our range of services below.",
    },
    {
      name: "Full House",
      images: ["", ""],
      description:
        "Experience a spotless home with our professional cleaning services. We ensure a clean, healthy, and welcoming environment for you and your family. Checkout our range of services below.",
    },
    {
      name: "Single room",
      images: ["", ""],
      description:
        "Experience a spotless home with our professional cleaning services. We ensure a clean, healthy, and welcoming environment for you and your family. Checkout our range of services below.",
    },
    {
      name: "Office",
      images: ["", ""],
      description:
        "Experience a spotless home with our professional cleaning services. We ensure a clean, healthy, and welcoming environment for you and your family. Checkout our range of services below.",
    },
  ]);
  return (
    <div
      id="home"
      className="snap-start min-w-full h-[calc(100vh-65px)] overflow-y-scroll flex flex-col p-3"
      data-index={0}
    >
      <div>
        <p className="text-lg my-8 mt-12 text-white">
          Experience a spotless home with our professional cleaning services. We
          ensure a clean, healthy, and welcoming environment for you and your
          family. Checkout our range of services below.
        </p>
      </div>
      {services.map((service: any) => {
        return <EnhancedServiceWithSlideWork service={service} />;
      })}
      <Footer />
    </div>
  );
};
