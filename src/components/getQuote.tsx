import React, { useEffect } from "react";
import { DropDownIcon } from "../assets";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

// interface GetQuoteProps {}

export const GetQuote = () => {
  const [addressText, setAddressText] = React.useState("");
  const [typingActive, setTypingActive] = React.useState(false);
  const [showFrequency, setShowFrequency] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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

  const requestQuote = async (data: any) => {
    const {
      clientName,
      serviceType,
      serviceFrequency,
      serviceDate,
      location,
      email,
      phonenumber,
      serviceDetails,
    } = data;
    var emailDetails = {
      service_id: process.env.REACT_APP_SERVICE_ID,
      template_id: process.env.REACT_APP_TEMPLATE_ID,
      user_id: process.env.REACT_APP_USER_ID,
      template_params: {
        clientName,
        serviceType,
        serviceFrequency,
        serviceDate,
        location,
        email,
        phonenumber,
        serviceDetails,
      },
    };
    console.log(errors);

    const templateMessage = `Hi, this is ${clientName} here. I need "${
      serviceTypeList[serviceType - 1]
    }" cleaning service ${
      serviceFrequency ? serviceFrequency : ""
    } at ${location}. Reach me out at ${email} or ${phonenumber}. ${
      serviceDetails ? "\n\nDetails: " + serviceDetails : ""
    }`;
    if (!errors.keys) {
      window.location.href = `https://wa.me/13065806152?text=${templateMessage}`;
    }
  };

  return (
    <div
      id="getQuote"
      className="snap-start min-w-full flex flex-col p-3"
      data-index={2}
    >
      <form
        action=""
        className="grid w-full mx-auto text-gray-600 gap-3 text-sm"
        onSubmit={handleSubmit(requestQuote)}
      >
        <h1 className="mainTitle mb-6 mt-12 text-3xl text-center text-white">
          GET FREE QUOTE
        </h1>
        <p className="text-center text-white">
          Please provide the details below to receive a personalized cleaning
          quote from our specialized team.
        </p>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-4 bg-gray-200 rounded-md"
          {...register("clientName", { required: true })}
        />
        <div className="w-full relative bg-gray-200 rounded-md">
          <DropDownIcon
            fill="#777"
            className="absolute top-1/2 left-full -translate-x-8 -translate-y-1/2"
          />
          <select
            className="rounded-md w-full p-4 bg-transparent appearance-none"
            {...register("serviceType", { required: true })}
          >
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
        <div className="text-white flex items-center -mt-2">
          <label htmlFor="">Would you like us to repeat this service?</label>
          <input
            type="checkbox"
            className="ml-2 h-6 w-6"
            {...register("isFrequent", {
              onChange: (e) => setShowFrequency(e.target.checked),
            })}
          />
        </div>
        {showFrequency && (
          <select
            className="w-full p-4 h-[52px] bg-gray-200 rounded-md"
            id=""
            {...register("frequency", { required: true })}
          >
            <option value="">Weekly</option>
            <option value="">Biweekly</option>
            <option value="">Monthly</option>
          </select>
        )}
        <input
          className="w-full p-4 h-[52px] bg-gray-200 rounded-md"
          type="date"
          placeholder="Date"
          {...register("serviceDate", { required: true })}
        />
        <div className="flex flex-col bg-gray-200 rounded-md">
          <input
            className="w-full p-4 rounded-md bg-gray-200"
            type="text"
            placeholder="Location"
            value={addressText}
            {...register("location", { required: true })}
            onChange={(e) => {
              setTypingActive(true);
              setAddressText(e.target.value);
            }}
          />
          <ul
            className={`${
              !typingActive || !addressText.length ? "hidden" : ""
            } bg-gray-300 select-none`}
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
          {...register("email", { required: true })}
        />
        <input
          type="phonenumber"
          placeholder="Phone"
          className="w-full p-4 bg-gray-200 rounded-md"
          {...register("phonenumber", { required: true, maxLength: 10 })}
        />
        <textarea
          className="w-full p-4 bg-gray-200 rounded-md"
          placeholder="Provide a summary of the services needed"
          {...register("serviceDetails", { required: true })}
        />
        <div className="flex gap-10">
          <button
            className="p-6 bg-green-800 text-white rounded-md w-1/2 mx-auto"
            type="submit"
          >
            GetQuote
          </button>
          <button
            className="p-6 bg-green-800 text-white rounded-md w-1/2 mx-auto"
            type="submit"
          >
            Whatsapp
          </button>
        </div>
        {/* <input
          type="submit"
          value="Get Quote"
          className="p-6 bg-green-800 text-white rounded-md w-1/2 mx-auto"
        /> */}
      </form>
    </div>
  );
};
