import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useState } from "react";

type Props = {};

const useTheme = () => {
  // const context = useContext(ThemeContext);

  // if (context == undefined) {
  //   throw new Error("useTheme() must be used inside a ThemeProvider");
  // }

  const [mode, setMode] = useState(
    JSON.parse(localStorage.getItem("mode") || JSON.stringify("light"))
  );

  const changeMode = () => {
    mode == "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(mode));
  }, [mode, changeMode]);

  return { mode, changeMode };
};

export default useTheme;
