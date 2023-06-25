import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./css/index.scss";

import { nhost } from "./utils/nhost";
import { ThemeProvider } from "./context/ThemeContext";
import { Provider } from 'react-redux';

import store from "./store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
