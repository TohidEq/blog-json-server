import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logIn } from "../actions/cartAction";

type Props = {};

const useAuth = () => {
  var state = useSelector(
    (state: { isAuthenticated: boolean; username: string; id: string }) => state
  );

  return {
    isAuthenticated: state.isAuthenticated,
    username: state.username,
    id: state.id,
  };
};

export default useAuth;
