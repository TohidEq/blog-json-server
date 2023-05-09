import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logIn } from "../actions/cartAction";

type Props = {};

const useAuth = () => {
  var state = useSelector(
    (state: { isAuthenticated: boolean }) => state
  ).isAuthenticated;

  console.log("useAuth *");
  console.log("isAuth: ", state);
  console.log("username: ");

  return { isAuthenticated: state };
};

export default useAuth;
