import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./css/index.css";

import { nhost } from "./utils/nhost";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
