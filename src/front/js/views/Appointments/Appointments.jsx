import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./appointments.css";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { getUsers, getAppointments } from "../../service/appointments.js";
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

const Appointments = () => {
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

  const getAppointmentsOf = (id) => {
    setLoading(true);
    getAppointments(id)
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
  };

  const getAllWorkers = async () => {
    try {
      setLoading(true);
      const restrainer = await getUsers("trainer");
      const datatrainer = await restrainer.json();
      const resphysio = await getUsers("physio");
      const dataphysio = await resphysio.json();
      let workers = datatrainer.concat(dataphysio);
      actions.setWorkers(workers);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllWorkers();
  }, []);

  const handleSelect = (e) => {
    getAppointmentsOf(e.target.value);
  };

  return (
    <div className="calendar-container d-flex flex-column mt-3 mb-3 p-3 col-12 col-md-7 col-xs-12">
      <h1 className="calendar-h1 mb-3">Appointments</h1>
      <select
        className="calendar-input ps-3 mb-3"
        onChange={handleSelect}
        defaultValue="select"
      >
        <option disabled value="select">
          Select professional
        </option>
        {store.workers.map((worker) => (
          <option
            value={worker.id}
            key={worker.id}
          >{`${worker.first_name} ${worker.last_name}`}</option>
        ))}
      </select>
      <div className="calendar-event d-flex flex-column">
        <Calendar
          className="mt-3"
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
          defaultView="week"
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
        <button
          type="button"
          className="col-3 btn btn-outline-light ml-3 mt-3"
          onClick={() => history.goBack()}
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default Appointments;
