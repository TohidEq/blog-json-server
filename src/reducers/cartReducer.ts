import { LOG_IN, LOG_OUT } from "../actionTypes/actionTypes";

const initialState = {
  isAuthenticated: true,
  id: "",
};

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isAuthenticated: true,
        id: action.payload.id,
      };

    case LOG_OUT:
      return {
        ...state,
        isAuthenticated: false,
        id: "",
      };
    default:
      return state;
  }
};

export default cartReducer;
