import { useState } from "react";
import { useEffect } from "react";

type Props = {};

const useAuth = () => {
  var isLoading = true;

  var isAuthenticated = !(
    sessionStorage.getItem("username") === "" ||
    sessionStorage.getItem("username") === null
  );

  isLoading = false;
  console.log("useAuth *");
  console.log("isAuth: ", isAuthenticated);
  console.log("username: ", sessionStorage.getItem("username"));

  return { isAuthenticated, isLoading };
};

export default useAuth;
