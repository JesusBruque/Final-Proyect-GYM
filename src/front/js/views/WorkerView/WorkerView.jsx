import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext.js";
import "./WorkerView.css";
import { Link } from "react-router-dom";
import { getUser } from "../../service/workerview.js";

const WorkerView = () => {
  const { store, actions } = useContext(Context);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUser()
      .then((res) => res.json())
      .then((data) => {
        actions.setLoggedUser(data);
        actions.setLogged(true);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="container-fluid col-md-12">
      <div className="row justify-content-center align-items-center">
        <Link
          className="customer-dashboard-button d-flex flex-column m-3 p-3"
          to="/workeragenda"
        >
          <i className="far fa-calendar-alt button-icon"></i>
          <span className="button-text mt-3">Appointments</span>
        </Link>
        <Link
          className="customer-dashboard-button d-flex flex-column m-3 p-3"
          to="/message/worker"
        >
          <i className="far fa-comment button-icon"></i>
          <span className="button-text mt-3">Messages</span>
        </Link>
      </div>
      <div className="row justify-content-center align-items-center m-auto">
        <Link
          className="customer-dashboard-button d-flex flex-column m-3 p-3"
          to="/account"
        >
          <i className="far fa-file-alt button-icon"></i>
          <span className="button-text mt-3">My Profile</span>
        </Link>
        <Link
          className="customer-dashboard-button d-flex flex-column m-3 p-3"
          to="/admin/customers"
        >
          <i className="fas fa-book button-icon"></i>
          <span className="button-text mt-3">Customers Profiles</span>
        </Link>
      </div>
    </div>
  );
};
export default WorkerView;
