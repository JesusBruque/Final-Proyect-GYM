import React from "react";
import "./Admin-Pannel-Styles/Admin-Pannel-Menu.css";

const AdminPannelMenu = () => {
  return (
    <div className="btn-group-vertical">
      <button type="button" className="btn btn-danger">
        Customers
      </button>
      <button type="button" className="btn btn-warning">
        Trainers
      </button>
      <button type="button" className="btn btn-success">
        Physio
      </button>
      <button type="button" className="btn btn-warning">
        Notifications
      </button>
      <button type="button" className="btn btn-success">
        Timetable
      </button>
    </div>
  );
};

export default AdminPannelMenu;
