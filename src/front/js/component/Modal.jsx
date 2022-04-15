import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Modal = (props) => {
  return (
    <div>
      <button onClick={notify}>Clic</button>
    </div>
  );
};

export default Modal;
