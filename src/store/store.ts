import { createStore } from "redux";

export const actions = {
  actionOne: (dispatch: any, payload: string) => {
    dispatch({ type: "FIRST_ACTION", payload: payload });
  },
  actionTwo: () => {},
};

const initState = {
  text: "hello",
};

const rootReducer = (state = initState, action: any) => {
  switch (action.type) {
    case "FIRST_ACTION":
      return { ...state, text: action.payload };
    default:
      return state;
  }
};

export const store = createStore(rootReducer);
