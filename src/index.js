import React from "react";
import ReactDom from "react-dom/client";
import StoreProvider from "./store/StoreProvider";
import App from "./App";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
