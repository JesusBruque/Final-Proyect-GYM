export const URL =
  "https://3001-jesusbruque-finalproyect-f4g1da0zy85.ws-eu34xl.gitpod.io";

//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//import your own components
import AppRouter from "./AppRouter.jsx";

//render your react application
ReactDOM.render(<AppRouter />, document.querySelector("#app"));
