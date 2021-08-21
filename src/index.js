import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import BadgeNew from "./pages/BadgeNew";

const container = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <BadgeNew />
  </React.StrictMode>,
  container
);
