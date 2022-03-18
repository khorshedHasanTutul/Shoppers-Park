import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./responsive.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./pages/ScrollToTop";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import AuthContextProvider from "./Store/AuthContextProvider";
import CartContextProvider from "./Store/CartContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <CartContextProvider>
        <AuthContextProvider>
        <App />
      </AuthContextProvider>
      </CartContextProvider>
      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
