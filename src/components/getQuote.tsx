import React, { useEffect } from "react";
import { DropDownIcon } from "../assets";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store";

// interface GetQuoteProps {}

export const GetQuote = () => {
  const [addressText, setAddressText] = React.useState("");
  const [typingActive, setTypingActive] = React.useState(false);
  const dispatch = useDispatch();
  const { addressList, selectedServiceType } = useSelector((state: any) => ({
    addressList: state.addressList,
    selectedServiceType: state.selectedServiceType,
  }));

  const [serviceTypeList, setServiceTypeList] = React.useState([
    "COMMERCIAL",
    "RESIDENTIAL",
    "CARPETS",
    "STAIN REMOVAL",
    "CONSTRUCTION",
  ]);

  useEffect(() => {
    addressText && actions.fetchAddresses(dispatch, addressText);
  }, [addressText]);

  return (
    <div
      id="getQuote"
      className="snap-start min-w-full h-[calc(100vh-65px)] overflow-y-scroll flex flex-col p-3"
      data-index={2}
    >
      <form
        action=""
        className="grid w-full mx-auto text-gray-600 gap-3 text-sm"
      >
        <h1 className="mainTitle mb-6 mt-12 text-3xl text-center text-white">
          GET QUOTE
        </h1>
        <p className="text-center text-white">
          Please provide the details below to receive a personalized cleaning
          quote from our specialized team.
        </p>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-4 bg-gray-200 rounded-md"
          required
        />
        <div className="w-full relative bg-gray-200 rounded-md">
          <DropDownIcon
            fill="#777"
            className="absolute top-1/2 left-full -translate-x-8 -translate-y-1/2"
          />
          <select className="rounded-md w-full p-4 bg-transparent appearance-none">
            <option value="0">Select your service</option>
            {serviceTypeList.map((service, key) => (
              <option
                value={key + 1}
                selected={service === selectedServiceType}
              >
                {service}
              </option>
            ))}
          </select>
        </div>
        <input
          className="w-full p-4 h-[52px] bg-gray-200 rounded-md"
          type="date"
          placeholder="Date"
          required
        />
        <div className="flex flex-col bg-gray-200 rounded-md">
          <input
            className="w-full p-4 rounded-md bg-gray-200"
            type="text"
            placeholder="Location"
            value={addressText}
            onChange={(e) => {
              setTypingActive(true);
              setAddressText(e.target.value);
            }}
          />
          <ul
            className={`${
              !typingActive || !addressText.length ? "hidden" : ""
            } bg-gray-300`}
          >
            {addressList &&
              addressList?.predictions?.map((address: any, key: any) => {
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
          className="w-full p-4 bg-gray-200 rounded-md"
        />
        <input
          type="phonenumber"
          placeholder="Phone"
          className="w-full p-4 bg-gray-200 rounded-md"
          maxLength={10}
          required
        />
        <textarea
          name="summary"
          id=""
          className="w-full p-4 bg-gray-200 rounded-md"
          placeholder="Provide a summary of the services needed"
        />
        <input
          type="submit"
          value="Get Quote"
          className="p-6 bg-green-800 text-white rounded-md w-1/2 mx-auto"
        />
      </form>
    </div>
  );
};
