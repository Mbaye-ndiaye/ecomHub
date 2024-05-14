import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./utils/style/index.css";
import { FormProvider } from "react-hook-form";
// import { FormShopContext } from "./utils/context/FormShopContext";


ReactDOM.render(
  <React.StrictMode>
    <FormProvider>
      <App />
    </FormProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
