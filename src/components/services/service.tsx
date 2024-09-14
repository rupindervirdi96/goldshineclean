import React, { useEffect } from "react";
import { WithSliderManagement } from "../../hoc/withSliderManagement";
import { ObjectType } from "typescript";
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
  const [photos, setPhotos] = React.useState([
    "bg-[url('https://picsum.photos/200/300')]",
    "bg-[url('https://picsum.photos/200/300')]",
    "bg-[url('https://picsum.photos/200/300')]",
  ]);
  const { setServiceType } = actions;

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(service);
  }, [service]);

  return (
    <div className="w-full flex flex-col items-center justify-center text-white my-2 bg-[rgba(0,0,0,0.6)] rounded-md">
      <h1 className="text-2xl py-3 pt-5">{service.service.name}</h1>
      <div className="py-2">
        <div
          ref={containerRef}
          className="h-56 w-56 flex overflow-auto snap-x snap-mandatory border-2 border-white rounded-md"
        >
          {photos.map((photo: any, key: any) => {
            console.log(photo.toString());

            return (
              <div
                className={`flex-none w-full basis-full snap-start bg-[url('https://picsum.photos/200/300')] bg-cover bg-center`}
                data-index={key.toString()}
              ></div>
            );
          })}
        </div>
        <div className="flex justify-center items-center">
          {photos.map((value, key) => {
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
      <p className="p-2 text-center text-sm">{service.service.description}</p>
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
