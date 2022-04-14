import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import {
  getGroupClasses,
  addGroupClasse,
  getUsers,
} from "../../service/adminpannelgroupclasses.js";
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

const AdminPannelGroupClasses = () => {
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const [allEvents, setAllEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const emptyClasse = {
    title: "",
    start: "",
    end: "",
    worker_id: "",
    quota: "",
  };
  const [newClasse, setNewClasse] = useState(emptyClasse);

  const showClasses = (classes) => {
    const events = [];
    for (let i = 0; i < classes.length; i++) {
      let start = new Date(classes[i].start);
      let end = new Date(classes[i].end);
      let title = ` — ${classes[i].title} with ${classes[i].worker.first_name} ${classes[i].worker.last_name} ➟ Registered ${classes[i].enrollees} of ${classes[i].quota}`;
      events.push({ start: start, end: end, title: title });
    }
    setAllEvents(events);
  };

  const getAllGroupClasses = async () => {
    try {
      setLoading(true);
      const res = await getGroupClasses();
      const data = await res.json();
      actions.setClasses(data);
      showClasses(store.classes);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
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
    getAllGroupClasses();
    getAllWorkers();
  }, []);

  function handleAddClasse() {
    setLoading(true);
    addGroupClasse(newClasse)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
        getAllGroupClasses();
        setNewClasse(emptyClasse);
      });
  }

  const handleSelect = (e) => {
    setNewClasse({ ...newClasse, worker_id: e.target.value });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewClasse({ ...newClasse, [name]: value });
  };

  return (
    <div className="calendar-container d-flex flex-column mt-3 mb-3 p-3 col-12 col-md-7 col-xs-12">
      <h1 className="calendar-h1 mb-3">Group Classes</h1>
      <div className="calendar-event d-flex flex-column">
        <Calendar
          className="mt-3"
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
          defaultView="day"
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
        <div className="calendar-event d-flex flex-column">
          <h1 className="calendar-h1 mt-5">Add New Group Classe</h1>
          <label className="d-inline-flex my-2 fs-5 text-white">
            Name of the group classe (make it sound attractive!)
          </label>
          <input
            type="text"
            placeholder="Insert here the name"
            className="calendar-input ps-3 mb-3"
            name="title"
            onChange={handleChange}
          />
          <div className="d-flex gap-3">
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
            <input
              type="number"
              name="quota"
              placeholder="Insert the capacity of the group classe"
              className="calendar-input ps-3 mb-3"
              onChange={handleChange}
            />
          </div>
          <DatePicker
            placeholderText="Start Date"
            className="book-datepicker p-3"
            selected={newClasse.start}
            onChange={(start) => setNewClasse({ ...newClasse, start })}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
          />
          <DatePicker
            placeholderText="End Date"
            className="book-datepicker p-3 mt-3"
            selected={newClasse.end}
            onChange={(end) => setNewClasse({ ...newClasse, end })}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
          />
          <button className="book-button mt-3 mb-3" onClick={handleAddClasse}>
            Add group classe
          </button>
          <button
            type="button"
            className="col-3 btn btn-outline-light ml-3 mt-3"
            onClick={() => history.goBack()}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPannelGroupClasses;
