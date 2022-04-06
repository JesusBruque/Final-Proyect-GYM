import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./customerdashboard.css";
import { Context } from "../../store/appContext.js";
import {
  getUser,
  getAppointments,
  getInfoUser,
  updateInfo,
  getGoals,
} from "../../service/customerdashboard.js";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import Spinner from "../../component/Spinner.jsx";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CustomerDashboard = () => {
  const initialState = {
    goals: "",
    medical_history: "",
  };

  const { store, actions } = useContext(Context);
  const [allEvents, setAllEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState(initialState);
  const [infoCopy, setInfoCopy] = useState(initialState);
  const [disabledData, setDisabledData] = useState(true);
  const [error, setError] = useState(initialState);
  const [goal, setGoal] = useState([]);
  const [newGoal, setNewGoal] = useState("");

  const showAppointments = (appointments) => {
    const events = [];
    let session = "";
    for (let i = 0; i < appointments.length; i++) {
      let start = new Date(appointments[i].start);
      let end = new Date(appointments[i].end);
      if (appointments[i].worker.role_id === 2) session = "Training";
      if (appointments[i].worker.role_id === 3) session = "Physiotherapy";
      let title =
        session +
        " with " +
        appointments[i].worker.first_name +
        " " +
        appointments[i].worker.last_name;
      events.push({ start: start, end: end, title: title });
    }
    setAllEvents(events);
  };

  useEffect(() => {
    setLoading(true);
    getUser()
      .then((res) => res.json())
      .then((data) => {
        actions.setLoggedUser(data);
        actions.setLogged(true);
      })
      .catch((err) => console.log(err));

    getAppointments()
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        showAppointments(data);
      })
      .catch((err) => {
        console.log(err);
      });

    getInfoUser()
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
        setInfoCopy(data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });

    getGoals()
      .then((res) => res.json())
      .then((data) => {
        setGoal(data);
        console.log(data);
      })
      .catch((err) => console.log(err))

  }, []);

  console.log("goal", goal);
  console.log("newGoal", newGoal)

  const update = () => {
    setLoading(true);

    const errorHandler = { ...initialState };

    if (info.goals.length === 0) {
      errorHandler.goals = "Goals can't be empty";
    }

    if (errorHandler.goals === "") {
      const form = new FormData();
      form.append("goals", info.goals);

      updateInfo(info)
        .then((res) => res.json())
        .then((data) => {
          setInfo(data);
          setInfoCopy(data);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          handleClickData();
          setLoading(false);
        });
    }
    setError(errorHandler);
  };

  const cancel = () => {
    setDisabledData(true);
    setInfo(infoCopy);
  };

  const handleClickData = () => {
    setDisabledData(!disabledData);
  };

  const handleChangeInfo = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfo({ ...info, [name]: value });
  };

  const listGoals = goal.map((goals, index) =>
    <li key={index} className="list-group-item d-flex bd-highlight">
      {goals}
    </li>
  )
  console.log("goal.goals", goal.goals)

  return (
    <div className="customer-dashboard-container col-10 offset-md-1">
      <div className=" d-flex justify-content-center flex-wrap mt-3">
        <div className="customer-name d-flex align-items-center">
          <img src={store.loggedUser.avatar} className="rounded-circle m-3" />
          <h3 className="customer-dashboard-h3 m-3">{`Hello, ${store.loggedUser.first_name}`}</h3>
        </div>
        <div className="d-flex flex-column flex-md-row gap-2 justify-content-center align-content-center">
          <Link
            className="customer-dashboard-button d-flex flex-column m-3 p-3"
            to="/book/training"
          >
            <i className="fas fa-dumbbell button-icon"></i>
            <span className="button-text mt-3">Book Training</span>
          </Link>
          <Link
            className="customer-dashboard-button d-flex flex-column m-3 p-3"
            to="/book/physiotherapy"
          >
            <i className="fas fa-spa button-icon"></i>
            <span className="button-text mt-3">Book Physiotherapy</span>
          </Link>
          <Link
            className="customer-dashboard-button d-flex flex-column m-3 p-3"
            to="/message/customer"
          >
            <i className="far fa-comment button-icon"></i>
            <span className="button-text mt-3">Messages</span>
          </Link>
          <Link
            className="customer-dashboard-button d-flex flex-column m-3 p-3"
            to="/account"
          >
            <i className="far fa-file-alt button-icon"></i>
            <span className="button-text mt-3">User profile</span>
          </Link>
        </div>
      </div>
      <div className="col-10 offset-md-1">
        <h3 className="customer-dashboard-h3 mt-3">My appointments</h3>
        <Calendar
          className="mt-3"
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
          defaultView="agenda"
          min={new Date(0, 0, 0, 7, 0, 0)}
          max={new Date(0, 0, 0, 21, 0, 0)}
          style={{ height: 400 }}
          eventPropGetter={(event, start, end, isSelected) => ({
            event,
            start,
            end,
            isSelected,
            style: { backgroundColor: "#0a3545" },
          })}
        />
      </div>
      <div className="col-10 offset-md-1">
        <h3 className="customer-dashboard-h3 mt-3">My goals</h3>

        <div className="input-group col-sm-9">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setNewGoal(e.target.value)}
            name="goals"
          />
          <ul className="list-group list-group-flush container">
            {listGoals}
          </ul>
        </div>

        <div className="input-group col-sm-9">
          <input
            type="text"
            className="form-control"
            onChange={handleChangeInfo}
            defaultValue={info.goals}
            name="goals"
            disabled={disabledData}
          />
          {error.goals != "" ? (
            <p className="text-danger mt-3 w-100">{error.goals}</p>
          ) : null}
        </div>
        <h3 className="customer-dashboard-h3 mt-3">My medical history</h3>
        <div className="input-group col-sm-9">
          <textarea
            type="text"
            className="form-control"
            onChange={handleChangeInfo}
            defaultValue={info.medical_history}
            name="medical_history"
            disabled={disabledData}
          />
          {error.medical_history != "" ? (
            <p className="text-danger mt-3 w-100">{error.medical_history}</p>
          ) : null}
        </div>
        <div className="container p-2 mx-1 mb-2">
          <div className="row d-flex">
            {disabledData ? (
              <button
                type="button"
                className="col-2 account-button mt-3"
                onClick={handleClickData}
              >
                Edit
              </button>
            ) : (
              <div className="row">
                <button
                  type="button"
                  className="col-2 account-button mt-3 float-right"
                  onClick={cancel}
                >
                  Cancel
                </button>
                {loading == true ? (
                  <Spinner />
                ) : (
                  <button
                    type="button"
                    className="col-2 account-button m-3 float-right"
                    onClick={update}
                  >
                    Save
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
