import React from "react";
import ReactDOM from "react-dom/client";
import PrintComponent from "./app.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrintComponent />
  </React.StrictMode>
);
