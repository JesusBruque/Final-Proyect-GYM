import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./customerdashboard.css";
import { Context } from "../../store/appContext.js";
import {
  getUser,
  getAppointments,
  getClasses,
  getGoals,
  deleteGoals,
  createGoal,
} from "../../service/customerdashboard.js";
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
  const { store, actions } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [goals, setGoals] = useState([]);
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
    const myEvents = store.events;
    actions.setEvents(myEvents.concat(events));
  };

  const showGroupClasses = (classes) => {
    const groupclasses = [];
    for (let i = 0; i < classes.length; i++) {
      let start = new Date(classes[i].start);
      let end = new Date(classes[i].end);
      let title =
        classes[i].title +
        " with " +
        classes[i].worker.first_name +
        " " +
        classes[i].worker.last_name;
      groupclasses.push({ start: start, end: end, title: title });
    }
    const myEvents = store.events;
    actions.setEvents(myEvents.concat(groupclasses));
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

    actions.setEvents([]);
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

    getClasses()
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        showGroupClasses(data);
      })
      .catch((err) => {
        console.log(err);
      });

    getAllGoals();
  }, []);

  const getAllGoals = () => {
    getGoals()
      .then((res) => res.json())
      .then((data) => {
        setGoals(data);
      })
      .catch((err) => console.log(err));
  };

  const handleClickGoal = () => {
    const goal = {
      goals: newGoal,
    };
    if (newGoal.length > 1) {
      createGoal(goal)
        .then(() => setNewGoal(""))
        .catch((err) => console.log(err))
        .finally(() => getAllGoals());
    }
  };

  const goalsDelete = (id) => {
    const idGoal = {
      id: id,
    };
    deleteGoals(idGoal)
      .then((res) => res.json())
      .catch((err) => console.log(err))
      .finally(() => {
        getAllGoals();
      });
  };

  return (
    <div className="customer-dashboard-container col-10 offset-md-1">
      <div className="d-flex justify-content-center flex-wrap mt-3">
        <div className="customer-name d-flex align-items-center">
          <img src={store.loggedUser.avatar} className="rounded-circle m-3" />
          <h3 className="customer-dashboard-h3 m-3">{`Hello, ${store.loggedUser.first_name}`}</h3>
        </div>
        <div className="d-flex flex-column flex-md-row gap-1 justify-content-center align-content-center">
          <Link
            className="icons customer-dashboard-button d-flex flex-column m-3 p-3"
            to="/book/training"
          >
            <i className="fas fa-dumbbell button-icon"></i>
            <span className="button-text mt-3">Book Training</span>
          </Link>
          <Link
            className="icons customer-dashboard-button d-flex flex-column m-3 p-3"
            to="/book/physiotherapy"
          >
            <i className="fas fa-spa button-icon"></i>
            <span className="button-text mt-3">Book Physiotherapy</span>
          </Link>
          <Link
            className="icons customer-dashboard-button d-flex flex-column m-3 p-3"
            to="/book/group-classe"
          >
            <i className="fas fa-users button-icon"></i>
            <span className="button-text mt-3">Book Group Classe</span>
          </Link>
          <Link
            className="icons customer-dashboard-button d-flex flex-column m-3 p-3"
            to="/message/customer"
          >
            <i className="far fa-comment button-icon"></i>
            <span className="button-text mt-3">Messages</span>
          </Link>
          <Link
            className="icons customer-dashboard-button d-flex flex-column m-3 p-3"
            to="/account"
          >
            <i className="fas fa-user button-icon"></i>
            <span className="button-text mt-3">User profile</span>
          </Link>
        </div>
      </div>
      <div className="col-10 offset-md-1">
        <h3 className="customer-dashboard-h3 mt-3">My appointments</h3>
        <Calendar
          className="mt-3"
          localizer={localizer}
          events={store.events}
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

        <div className="d-flex col-sm-9">
          <input
            type="text"
            placeholder="Write your goals"
            className="input-goal mb-2 col-12 p-2"
            onChange={(e) => setNewGoal(e.target.value)}
            value={newGoal}
            name="goals"
          />
          <div className="col-4">
            <button
              type="button"
              className="goal-button p-2 ms-3"
              onClick={handleClickGoal}
            >
              Submit
            </button>
          </div>
        </div>
        <ul className="list-group list-group-flush container px-0">
          {goals.map((goal, index) => (
            <li
              key={index}
              className="li-goal list-group-item d-flex bd-highlight ps-2 pe-0 "
            >
              {goal.goals}
              <i
                className="icon far fa-trash-alt p-2 bd-highlight my-1"
                onClick={() => goalsDelete(goal.id)}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomerDashboard;
