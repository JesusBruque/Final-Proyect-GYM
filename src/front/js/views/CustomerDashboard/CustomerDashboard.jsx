import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./customerdashboard.css";
import { getUser, getAppointments } from "../../service/customerdashboard.js";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";

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
  const [user, setUser] = useState({});
  const [allEvents, setAllEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const showAppointments = (appointments) => {
    const events = [];
    for (let i = 0; i < appointments.length; i++) {
      let start = new Date(appointments[i].start);
      let end = new Date(appointments[i].end);
      events.push({ start: start, end: end });
    }
    setAllEvents(events);
  };

  useEffect(() => {
    setLoading(true);
    getUser()
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      })
      .catch((err) => console.log(err));

    getAppointments()
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("asi viene del back", data);
        showAppointments(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="customer-dashboard-container col-10 offset-md-1">
      <div className=" d-flex justify-content-center flex-wrap mt-3">
        <div className="customer-name d-flex align-items-center">
          <img src={user.avatar} className="rounded-circle m-3" />
          <h3 className="customer-dashboard-h3 m-3">{`Hello, ${user.first_name}`}</h3>
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
    </div>
  );
};

export default CustomerDashboard;
