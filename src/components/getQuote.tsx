import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { actions } from "./store/store";
import { MenuIcon, CloseMenuIcon, CallIcon, DropDownIcon } from "../assets";
import axios from "axios";

interface GetQuoteProps {}

export const GetQuote = ({}: GetQuoteProps) => {
  const [addressResponse, setAddressResponse] = React.useState<any>([]);
  const [addressText, setAddressText] = React.useState("");
  const [typingActive, setTypingActive] = React.useState(false);

  const getData = async (address: string) => {
    const addressString = address.replace(" ", "+");
    const response = await axios({
      method: "get",
      url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${addressString}&location=44.645504%2C-63.593529&radius=500&key=AIzaSyDfv192ushbnK006jl17IgCXQz3F32H0Lc`,
      withCredentials: false,
    });
    setAddressResponse(response.data);
  };

  useEffect(() => {
    addressText && getData(addressText);
  }, [addressText]);

  return (
    <div
      id="getQuote"
      className="snap-start min-w-full h-[calc(100vh-65px)] overflow-y-scroll flex flex-col p-3"
    >
      <form
        action=""
        className="grid w-[80%] mx-auto text-gray-600 gap-3 text-sm"
      >
        <p className="my-3 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sint
          tempore, dolore dolorem dolorum similique ullam, laboriosam labore
          maxime vero explicabo quis ducimus voluptatum, voluptates modi culpa!
          Tenetur, voluptates incidunt!
        </p>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 bg-gray-200 rounded-md"
          required
        />
        <div className="w-full relative p-2 bg-gray-200 rounded-md">
          <DropDownIcon
            fill="#777"
            className="absolute top-1/2 left-full -translate-x-8 -translate-y-1/2"
          />
          <select className="rounded-md w-full bg-transparent appearance-none">
            <option value="0">Select your service</option>
            <option value="1">AIR/BNB</option>
            <option value="2">Full House</option>
            <option value="3">Single room</option>
            <option value="4">Office</option>
          </select>
        </div>
        <input
          className="w-full p-2 h-10 bg-gray-200 rounded-md"
          type="date"
          placeholder="Date"
          required
        />
        <div className="flex flex-col bg-gray-200 rounded-md">
          <input
            className="w-full p-2 rounded-md bg-gray-200"
            type="text"
            placeholder="Location"
            value={addressText}
            onChange={(e) => {
              setTypingActive(true);
              setAddressText(e.target.value);
            }}
          />
          <ul className={`${!typingActive || !addressText.length ? "hidden" : ""} bg-gray-300`}>
            {addressResponse &&
              addressResponse?.predictions?.map((address: any, key: any) => {
                return (
                  <li
                  className="py-1 px-2 bg-gray-300 hover:bg-gray-400"
                    onClick={() => {
                      setTypingActive(false);
                      setAddressText(address.description);
                    }}
                    value={key}
                  >
                    {address.description}
                  </li>
                );
              })}
          </ul>
        </div>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 bg-gray-200 rounded-md"
        />
        <input
          type="phonenumber"
          placeholder="Phone"
          className="w-full p-2 bg-gray-200 rounded-md"
          maxLength={10}
          required
        />
        <input
          type="submit"
          value="Get Quote"
          className="px-3 py-2 bg-green-800 text-white rounded-md w-1/2 mx-auto"
        />
      </form>
    </div>
  );
};
