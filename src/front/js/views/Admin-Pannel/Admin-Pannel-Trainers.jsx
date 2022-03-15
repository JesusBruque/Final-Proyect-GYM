import React, { useEffect, useState } from "react";
import { getAllTrainers } from "../../service/trainers.js";
import { Link, Redirect } from "react-router-dom";
import "./Admin-Pannel-Styles/Admin-Pannel-trainers.css";
import { AccordionButton } from "react-bootstrap";

const AdminPannelTrainers = (props) => {
  const [trainers, setTrainers] = useState([]);
  useEffect(() => {
    getAllTrainers()
      .then((res) => res.json())
      .then((data) => setTrainers(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>
              <i className="fas fa-dumbbell"></i>
            </th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {trainers.map((trainer) => {
            return (
              <tr key={trainer.id}>
                <td>{trainer.id}</td>
                <td>{trainer.first_name}</td>
                <td>{trainer.last_name}</td>
                <td>{trainer.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button type="button" className="btn btn-exit col-md-8 offset-md-2">
        <Link to="/admin/menu">
          <i className="fas fa-arrow-alt-circle-left"></i>Atrás
        </Link>
      </button>
    </div>
  );
};

export default AdminPannelTrainers;
