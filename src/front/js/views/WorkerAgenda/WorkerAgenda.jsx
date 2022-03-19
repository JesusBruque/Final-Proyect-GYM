import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./workeragenda.css";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { getAppointments } from "../../service/workeragenda.js";
import { Context } from "../../store/appContext.js";

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

const WorkerAgenda = () => {
  const history = useHistory();
  const { store, actions } = useContext(Context);
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
    getAppointments()
      .then((res) => {
        return res.json();
      })
      .then((data) => {
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
    <div className="calendar-container d-flex flex-column mt-3 mb-3 p-3 col-12 col-md-7 col-xs-12">
      <h1 className="calendar-h1 mb-3">Agenda</h1>
      <div className="calendar-event d-flex flex-column">
        <Calendar
          className="mt-3"
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
          defaultView="agenda"
          style={{ height: 400 }}
          eventPropGetter={(event, start, end, isSelected) => ({
            event,
            start,
            end,
            isSelected,
            style: { backgroundColor: "#0a3545" },
          })}
        />
        <button
          type="button"
          className="col-3 btn btn-secondary ml-3 mt-3"
          onClick={() => history.goBack()}
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default WorkerAgenda;
