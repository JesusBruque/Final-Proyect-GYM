import React, { useEffect, useState } from "react";
import { getAllPhysios } from "../../service/physios.js";
import { Link, Redirect } from "react-router-dom";
import "./Admin-Pannel-Styles/Admin-Pannel-Physios.css";

const AdminPannelPhysio = () => {
  const [physios, setPhysios] = useState([]);
  useEffect(() => {
    getAllPhysios()
      .then((res) => res.json())
      .then((data) => setPhysios(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <i className="fas fa-spa"></i>
            </th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellidos</th>
            <th scope="col">email</th>
          </tr>
        </thead>
        <tbody>
          {physios.map((physio) => {
            return (
              <tr key={physio.id}>
                <td>{physio.id}</td>
                <td>{physio.first_name}</td>
                <td>{physio.last_name}</td>
                <td>{physio.email}</td>
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

export default AdminPannelPhysio;
