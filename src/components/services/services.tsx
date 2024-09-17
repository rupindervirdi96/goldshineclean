import React from "react";
import { EnhancedServiceWithSlideWork } from "./service";
import { Footer } from "../footer";

interface ServicesProps {}

export const Services = ({}: ServicesProps) => {
  const [services, setServices] = React.useState<any>([
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
    {
      name: "CARPETS",
      images: [
        "https://images.unsplash.com/photo-1534889156217-d643df14f14a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1527515673510-8aa78ce21f9b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1677234147034-ced930647894?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      description:
        "Revitalize your carpets with our expert carpet cleaning services. We remove deep-seated dirt and stains, restoring the vibrant colors and plush feel of your carpets, making them look and feel brand new.",
    },
    {
      name: "STAIN REMOVAL",
      images: [
        "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1627905646269-7f034dcc5738?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      description:
        "Say goodbye to stubborn stains with our specialized stain removal services. Whether it's wine, coffee, or pet stains, we have the expertise to eliminate them, restoring the beauty of your fabrics and surfaces.",
    },
    {
      name: "CONSTRUCTION",
      images: [
        "https://images.unsplash.com/photo-1444419988131-046ed4e5ffd6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1682366278661-1096d176d96f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      description:
        "Post-construction mess? No problem! Our construction cleaning services handle the toughest debris and dust, ensuring your newly built or renovated space is spotless and ready for use.",
    }
  ]);
  return (
    <div
      id="home"
      className="min-w-full flex flex-col p-3"
      data-index={0}
    >
      <div>
        <p className="text-lg my-8 mt-12 text-white text-center">
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
