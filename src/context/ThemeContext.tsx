import { createContext, useReducer } from "react";

interface AppContextInterface {
  color: string;
  mode: string;
  changeColor: (color: string) => void;
  changeMode: (mode: string) => void;
}

export const ThemeContext = createContext<AppContextInterface | null>(null);

const themeReducer = (state: any, action: any) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };

    case "CHANGE_MODE":
      return { ...state, mode: action.payload };

    default:
      return state;
  }
};

export function ThemeProvider({ children }: any) {
  const [state, dispatch] = useReducer(themeReducer, {
    color: "#FF8303",
    mode: "dark",
  });

  const changeColor = (color: string) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };

  const changeMode = (mode: string) => {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  };
  return (
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
