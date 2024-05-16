import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./utils/style/index.css";
import { FormProvider } from "react-hook-form";
import GlobalContextProvider from "./utils/context/GlobalContext";
import { BrowserRouter } from "react-router-dom";
import CategorieContextProvider from "./utils/context/CategorieContext";
import ProduitContextProvider from "./utils/context/ProduitsContext";





ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalContextProvider>
            <ProduitContextProvider>
          <CategorieContextProvider>
            <FormProvider>
      {/* <GlobalContextProvider> */}
      <App />
      </FormProvider>
       {/* </GlobalContextProvider>  */}
       </CategorieContextProvider>
       </ProduitContextProvider>
       </GlobalContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
