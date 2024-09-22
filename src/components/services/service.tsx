import React from "react";
import { WithSliderManagement } from "../../hoc/withSliderManagement";
import { useDispatch } from "react-redux";
import { actions } from "../../store/store";

interface IServiceProps {
  containerRef: React.RefObject<HTMLDivElement>;
  visibleIndex: number;
  service: any;
}

const Service: React.FC<IServiceProps> = ({
  containerRef,
  visibleIndex,
  service,
}) => {
  const { setServiceType } = actions;

  const dispatch = useDispatch();

  return (
    <div className="w-full flex flex-col items-center justify-center text-white my-2 bg-[rgba(0,0,0,0.6)] rounded-md">
      <h1 className="heading-2 text-3xl py-3 pt-8 ">
        {service.service.name}
      </h1>
      <div className="py-2">
        <div
          ref={containerRef}
          className="h-64 w-80 flex overflow-auto snap-x snap-mandatory border-2 border-white rounded-md"
        >
          {service.service.images.map((photo: any, key: any) => {
            return (
              <div
                className="flex-none w-full basis-full snap-start bg-cover bg-center aspect-square"
                style={{
                  backgroundImage: `url(${photo})`,
                }}
                data-index={key.toString()}
              ></div>
            );
          })}
        </div>
        <div className="flex justify-center items-center">
          {service.service.images.map((value: any, key: any) => {
            return (
              <div
                id={key.toString()}
                className={`h-2 w-2 m-2 rounded-full border-[1px] border-white ${
                  key === visibleIndex ? "bg-white" : ""
                }`}
              ></div>
            );
          })}
        </div>
      </div>
      <p className="p-2 text-center text-sm md:w-1/2 md:mx-auto md:text-base">{service.service.description}</p>
      <a
        href="#getQuote"
        onClick={() => setServiceType(dispatch, service.service.name)}
        className="p-2 my-4 bg-green-800 rounded-md"
      >
        Get quote
      </a>
    </div>
  );
};

// export const EnhancedServiceWithSlideWork: any = WithSliderManagement({
//   Component: Service,
// });

export const EnhancedServiceWithSlideWork = (service: any) => (
  <WithSliderManagement Component={Service} service={service} />
);
