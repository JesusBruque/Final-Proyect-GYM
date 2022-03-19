import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./booktraining.css";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  getTrainers,
  getAppointments,
  addAppointment,
} from "../../service/booktraining.js";
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

const BookTraining = () => {
  const history = useHistory();
  const emptyAppointment = { title: "", start: "", end: "", worker_id: "" };
  const { store, actions } = useContext(Context);
  const [newAppointment, setNewAppointment] = useState(emptyAppointment);
  const [allEvents, setAllEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleBookAppointment() {
    setLoading(true);
    addAppointment(newAppointment)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
        setAllEvents([...allEvents, newAppointment]);
        setNewAppointment(emptyAppointment);
      });
  }

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

  const getAllTrainers = () => {
    setLoading(true);
    getTrainers()
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

  useEffect(() => {
    getAllTrainers();
  }, []);

  const handleSelect = (e) => {
    getAppointmentsOf(e.target.value);
    setNewAppointment({ ...newAppointment, worker_id: e.target.value });
  };

  return (
    <div className="calendar-container d-flex flex-column mt-3 mb-3 p-3 col-12 col-md-7 col-xs-12">
      <h1 className="calendar-h1 mb-3">Book Training</h1>
      <select
        className="book-input ps-3 mb-3"
        onChange={handleSelect}
        defaultValue="select"
      >
        <option disabled value="select">
          Choose trainer
        </option>
        {store.trainers.map((trainer) => (
          <option
            value={trainer.id}
            key={trainer.id}
          >{`${trainer.first_name} ${trainer.last_name}`}</option>
        ))}
      </select>
      <div className="calendar-event d-flex flex-column">
        <DatePicker
          placeholderText="Start Date"
          className="book-datepicker p-3"
          selected={newAppointment.start}
          onChange={(start) => setNewAppointment({ ...newAppointment, start })}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
        />
        <DatePicker
          placeholderText="End Date"
          className="book-datepicker p-3 mt-3"
          selected={newAppointment.end}
          onChange={(end) => setNewAppointment({ ...newAppointment, end })}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
        />
        <button
          className="book-button mt-3 mb-3"
          onClick={handleBookAppointment}
        >
          Book now!
        </button>
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

export default BookTraining;
