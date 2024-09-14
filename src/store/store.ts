import axios from "axios";
import { createStore } from "redux";

export const actions = {
  fetchAddresses: async (dispatch: any, payload: any) => {
    const response = await axios({
      method: "get",
      url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${payload}&location=44.645504%2C-63.593529&radius=500&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
      withCredentials: false,
    });
    dispatch({ type: "FETCH_ADDRESSES", payload: response.data });
  },
  setServiceType: async (dispatch: any, payload: any) => {
    dispatch({ type: "SET_SERVICE_TYPE", payload });
  },
};

const initState = {
  addressList: [],
  selectedServiceType: "",
};

const rootReducer = (state = initState, action: any) => {
  switch (action.type) {
    case "FETCH_ADDRESSES":
      return { ...state, addressList: action.payload };
    case "SET_SERVICE_TYPE":
      return { ...state, selectedServiceType: action.payload };
    default:
      return state;
  }
};

export const store = createStore(rootReducer);
