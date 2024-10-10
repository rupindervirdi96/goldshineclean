import React from "react";
import { EnhancedServiceWithSlideWork } from "./service";

interface ServicesProps {}

export const Services = ({}: ServicesProps) => {
  const services=[
    {
      name: "COMMERCIAL",
      images: [
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1661953180079-d4ca0c49fdc8?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      description:
        "Transform your workspace into a pristine environment with our top-notch commercial cleaning services. We ensure your office or business premises are spotless, creating a professional and inviting atmosphere for your clients and employees.",
    },
    {
      name: "RESIDENTIAL",
      images: [
        "https://images.unsplash.com/photo-1503011510-c0e00592713b?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1556037843-347ddff9f4b0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1679500354595-0feead204a28?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1522444195799-478538b28823?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1643949719317-4342d8d4031e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      description:
        "Enjoy the comfort of a sparkling clean home with our residential cleaning services. We take care of every nook and cranny, ensuring a healthy and welcoming space for you and your family to relax and thrive.",
    },
    // {
    //   name: "CARPETS",
    //   images: [
    //     "https://images.unsplash.com/photo-1534889156217-d643df14f14a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     "https://images.unsplash.com/photo-1527515673510-8aa78ce21f9b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     "https://plus.unsplash.com/premium_photo-1677234147034-ced930647894?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   ],
    //   description:
    //     "Revitalize your carpets with our expert carpet cleaning services. We remove deep-seated dirt and stains, restoring the vibrant colors and plush feel of your carpets, making them look and feel brand new.",
    // },
    {
      name: "AIRBNB",
      images: [
        "https://plus.unsplash.com/premium_photo-1686090448728-34d6ebc43390?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1686090448422-de8536066f64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1684175656218-70f1c6f442b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1679939153963-ff44f5deeba2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ],
      description:
        "Ensure 5-star reviews with our top-tier Airbnb cleaning services. We provide thorough, reliable cleanings, leaving your space spotless and guest-ready. Satisfaction guaranteed, every stay, every time!",
    },
    {
      name: "GLASS CLEANING",
      images: [
        "https://plus.unsplash.com/premium_photo-1683141114952-91f1915dcc0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1676810457654-db59e1416504?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1679500354742-89a2c21e3103?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      description:
        "Professional glass cleaning service for homes and businesses. We use eco-friendly products to achieve spotless, streak-free windows, enhancing visibility and appearance. Ideal for maintaining a clear and pristine look for both interiors and exteriors.",
    },
    {
      name: "CONSTRUCTION",
      images: [
        "https://images.unsplash.com/photo-1444419988131-046ed4e5ffd6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ],
      description:
        "Post-construction mess? No problem! Our construction cleaning services handle the toughest debris and dust, ensuring your newly built or renovated space is spotless and ready for use.",
    },
  ];
  
  return (
    <div id="home" className="min-w-full flex flex-col p-3" data-index={0}>
      <div className="logo"></div>
      <div>
        <p className="text-lg my-8 mt-0 text-white text-center md:w-1/2 md:mx-auto">
          Experience a spotless home with our professional cleaning services. We
          ensure a clean, healthy, and welcoming environment for you and your
          family. Checkout our range of services below.
        </p>
      </div>
      {services.map((service: any) => {
        return <EnhancedServiceWithSlideWork service={service} />;
      })}
    </div>
  );
};
