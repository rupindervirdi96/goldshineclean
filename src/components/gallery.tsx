import React from "react";

interface GalleryProps {}

export const Gallery = ({}: GalleryProps) => {
  return (
    <div
      id="gallery"
      className="min-w-full px-4 h-[calc(100vh-68px)] flex items-top justify-center overflow-y-scroll"
    ></div>
  );
};
