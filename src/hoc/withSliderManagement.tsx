import React, { useEffect } from "react";

interface IServiceProps {
  Component: React.ComponentType<{
    containerRef: React.RefObject<HTMLDivElement>;
    visibleIndex: number;
    service: any;
  }>;
  setPageIndex?: Function;
  service?: any;
}

export const WithSliderManagement: React.FC<IServiceProps> = ({
  Component,
  setPageIndex,
  service
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [visibleIndex, setVisibleIndex] = React.useState<number>(0);

  useEffect(() => {
    setPageIndex && setPageIndex(visibleIndex);
  }, [visibleIndex]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleIndex(Number(entry.target.getAttribute("data-index")));
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.5,
      }
    );

    const slides = containerRef.current?.children;
    if (slides) {
      Array.from(slides).forEach((slide) => observer.observe(slide as Element));
    }

    return () => {
      if (slides) {
        Array.from(slides).forEach((slide) =>
          observer.unobserve(slide as Element)
        );
      }
    };
  }, []);

  return <Component containerRef={containerRef} visibleIndex={visibleIndex} service={service} />;
};
