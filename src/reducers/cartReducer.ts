import { LOG_IN, LOG_OUT } from "../actionTypes/actionTypes";

const initialState = {
  id: "",
};

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        id: action.payload.id,
      };

    case LOG_OUT:
      return {
        ...state,
        id: "",
      };
    default:
      return state;
  }
};

export default cartReducer;
