import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import LoginContextProvider from "./components/context/login_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoginContextProvider>
      <App />
    </LoginContextProvider>
  </React.StrictMode>
);
