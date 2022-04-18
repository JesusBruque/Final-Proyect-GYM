import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  getGroupClasses,
  joinGroupClasse,
} from "../../service/bookgroupclasse.js";
import { Context } from "../../store/appContext.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const BookGroupClasse = () => {
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const [allEvents, setAllEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const showClasses = (classes) => {
    const events = [];
    for (let i = 0; i < classes.length; i++) {
      let id = classes[i].id;
      let start = new Date(classes[i].start);
      let end = new Date(classes[i].end);
      let title = ` — ${classes[i].title} with ${classes[i].worker.first_name} ${classes[i].worker.last_name} ➟ Registered ${classes[i].enrollees} of ${classes[i].quota}`;
      events.push({ id: id, start: start, end: end, title: title });
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

  useEffect(() => {
    getAllGroupClasses();
  }, []);

  const addCustomerTo = async (groupClasse) => {
    try {
      setLoading(true);
      const res = await joinGroupClasse(groupClasse);
      const data = await res.json();
      if (data === "Full classe") {
        toast.error("Sorry, this class is already full.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else if (data === "Already enrolled") {
        toast.info("You are already enrolled in this class!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else if (data) {
        toast.success("You have joined the group class", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        getAllGroupClasses();
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSelected = (event) => {
    let groupClasse = { classe_id: event.id };
    addCustomerTo(groupClasse);
  };

  return (
    <div className="calendar-container d-flex flex-column mt-3 mb-3 p-3 col-12 col-md-7 col-xs-12">
      <h1 className="calendar-h1 mb-3">Group Classes</h1>
      <div className="calendar-event d-flex flex-column">
        <Calendar
          className="mt-3"
          localizer={localizer}
          events={allEvents}
          onSelectEvent={handleSelected}
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
        <ToastContainer />
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

export default BookGroupClasse;
