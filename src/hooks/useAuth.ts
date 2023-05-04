import { useState } from "react";
import { useEffect } from "react";

type Props = {};

const useAuth = () => {
  const [isAuthenticated, setIsAuth] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // bla bla bla

  return { isAuthenticated, isLoading };
};

export default useAuth;
