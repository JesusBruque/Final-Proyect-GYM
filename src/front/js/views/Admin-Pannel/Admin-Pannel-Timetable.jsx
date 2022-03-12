import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./Admin-Pannel-Styles/Admin-Pannel-Timetable.css";

const AdminPannelTimetable = () => {
  return (
    <div>
      <button type="button" className="btn btn-exit col-md-8 offset-md-2 mt-3">
        <Link to="/admin/menu">
          <i className="fas fa-arrow-alt-circle-left"></i>Atrás
        </Link>
      </button>
    </div>
  );
};

export default AdminPannelTimetable;
