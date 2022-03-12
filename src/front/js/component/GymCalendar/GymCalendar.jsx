import React, { useState, useContext, useEffect } from "react";
import "./gymcalendar.css";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getUsers, getAppointments } from "../../service/gymcalendar.js";
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

const events = [
  {
    title: "local",
    start: new Date(2022, 2, 10, 10, 17),
    end: new Date(2022, 2, 10, 10, 17),
  },
];

const GymCalendar = () => {
  const { store, actions } = useContext(Context);
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);
  const [loading, setLoading] = useState(false);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  const getAllAppointments = () => {
    setLoading(true);
    getAppointments()
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        actions.setAppointments(data);
        const start = new Date(store.appointments[0].start);
        const end = new Date(store.appointments[0].end);
        events.push({ title: "1 back", start: start, end: end });
        const start2 = new Date(store.appointments[1].start);
        const end2 = new Date(store.appointments[1].end);
        events.push({ title: "2 back", start: start2, end: end2 });
        const start3 = new Date(store.appointments[2].start);
        const end3 = new Date(store.appointments[2].end);
        events.push({ title: "3 back", start: start3, end: end3 });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getAllTrainers = () => {
    setLoading(true);
    getUsers("trainer")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        actions.setTrainers(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getAllPhysios = () => {
    setLoading(true);
    getUsers("physio")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        actions.setPhysios(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllAppointments();
    getAllTrainers();
    getAllPhysios();
  }, []);

  return (
    <div className="calendar-container d-flex flex-column mt-3 mb-3 p-3 col-12 col-md-6 col-xs-12">
      <h1 className="calendar-h1">Calendar</h1>
      <input
        type="text"
        className="calendar-input mb-3 col-md-7 col-xs-12 p-3"
        placeholder="Add Title"
        value={newEvent.title}
        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
      />
      <div className="calendar-event d-flex">
        <DatePicker
          placeholderText="Start Date"
          className="calendar-datepicker p-3"
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="LLL"
        />
        <DatePicker
          placeholderText="End Date"
          className="calendar-datepicker p-3"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="LLL"
        />
      </div>
      <button className="calendar-button mt-3 mb-3" onClick={handleAddEvent}>
        Add Event
      </button>
      <Calendar
        className="mt-3"
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default GymCalendar;
