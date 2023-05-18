import { LOG_IN, LOG_OUT } from "../actionTypes/actionTypes";

const initialState = {
  isAuthenticated: !(
    sessionStorage.getItem("user_id") === "" ||
    sessionStorage.getItem("user_id") === null
  ),
  id: sessionStorage.getItem("user_id") || "",
  username: sessionStorage.getItem("username") || "",
};

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isAuthenticated: true,
        id: action.payload.id,
        username: action.payload.username,
      };

    case LOG_OUT:
      return {
        ...state,
        isAuthenticated: false,
        id: "",
        username: "",
      };
    default:
      return state;
  }
};

export default cartReducer;
