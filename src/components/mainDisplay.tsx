import React, { useEffect } from "react";
import { Services } from "./services";
import { Reviews } from "./reviews";
import { GetQuote } from "./getQuote";
import { Gallery } from "./gallery";
import { WithSliderManagement } from "../hoc/withSliderManagement";

interface IMainDisplayProps {
  containerRef: React.RefObject<HTMLDivElement>;
  visibleIndex: number;
}

export const MainDisplay: React.FC<IMainDisplayProps> = ({
  containerRef,
  visibleIndex,
}) => {

  return (
    <>
      <div
        ref={containerRef}
        className="relative flex overflow-auto overflow-x-scroll snap-x snap-mandatory"
      >
        <div className="marquee">
          <p>
            WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME
            WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME
            WELCOME WELCOME WELCOME WELCOME
          </p>
        </div>
        <Services />
        <Reviews />
        <GetQuote />
        <Gallery />
      </div>
    </>
  );
};

export const MainDisplayEnhanced = ({ setPageIndex }: any) => (
  <WithSliderManagement Component={MainDisplay} setPageIndex={setPageIndex} />
);
