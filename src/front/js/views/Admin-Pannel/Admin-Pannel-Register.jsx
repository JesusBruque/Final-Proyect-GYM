import React from "react";
import { Link, useHistory } from "react-router-dom";

import "./Admin-Pannel-Styles/Admin-Pannel-Register.css";

const AdminPannelRegister = () => {

  const history = useHistory();

  return (
    <div>
      <table className="table table-users my-3 mx-auto p-auto">
        <thead>
          <tr>
            <th scope="col">
              <i className="fas fa-user-edit"></i>
            </th>
            <th scope="col">URL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <i className="fas fa-dumbbell"></i>
              Trainers
            </th>
            <td>{`${window.location}/register/trainer`}</td>
          </tr>
          <tr>
            <th scope="row">
              <i className="fas fa-spa"></i>
              Physios
            </th>
            <td>{`${window.location}/register/physio`}</td>
          </tr>
        </tbody>
      </table>
      <div className="d-flex justify-content-center">
        <div className="row justify-content-center text-center">
          <Link
            className="register-button d-flex flex-column m-2 p-2"
            to="/register/trainer"
          >
            Trainers
          </Link>
          <Link
            className="register-button d-flex flex-column m-2 p-2"
            to="/register/physio"
          >
            Physios
          </Link>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button type="button" onClick={() => history.goBack()} className="col-2 btn btn-outline-light mt-3">
          Back
        </button>
      </div>
    </div>
  );
};

export default AdminPannelRegister;
