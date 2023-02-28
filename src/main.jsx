import React from "react";
import ReactDOM from "react-dom/client";
import RisingSun from "./risingSun/risingSunForm";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <RisingSun />
    </React.StrictMode>
  </BrowserRouter>
);
