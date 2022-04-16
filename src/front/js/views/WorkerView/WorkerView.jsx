import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext.js";
import "./WorkerView.css";
import { Link } from "react-router-dom";
import { getUser } from "../../service/workerview.js";
import Spinner from "../../component/Spinner.jsx";

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

  const handleClick = () => {
    localStorage.removeItem("token");
    actions.deleteLoggedUser();
    actions.setLogged(false);
  };

  return (
    <div className="container fluid justify-content-center col-md-6 offset-md-3">
      <div className="row align-self-center align-items-center">
        <div className="btn btn-outline worker">
          <Link to="/workeragenda">
            <i className="far fa-calendar-alt"></i>
            <br />
            Appointments
          </Link>
        </div>
        <div className="btn worker">
          <Link to="/message/worker">
            <i className="far fa-comment"></i>
            <br />
            Messages
          </Link>
        </div>
      </div>
      <div className="row align-self-center align-items-center">
        <div className="btn worker">
          <Link to="/account">
            <i className="far fa-file-alt"></i>
            <br />
            My Profile
          </Link>
        </div>
        <div className="btn worker">
          <Link to="/admin/customers">
            <i className="fas fa-book"></i>
            <br />
            Customers Profiles
          </Link>
        </div>
      </div>
      <div className="row align-self-center align-items-center">
        <div className="btn fluid col-5 exit" onClick={handleClick}>
          <Link to="/">
            <i className="fas fa-door-open"></i>
            <br />
            Log out
          </Link>
        </div>
      </div>
    </div>
  );
};
export default WorkerView;
