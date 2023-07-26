import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./classroom/context/context";
import { BrowserRouter } from "react-router-dom";
import 'react-calendar/dist/Calendar.css';

ReactDOM.render(
  <ContextProvider>
    <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </React.StrictMode>
  </ContextProvider>,
  document.getElementById("root")
);
