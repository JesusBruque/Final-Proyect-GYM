import React, { useEffect, useState } from "react";
import { getAllCustomers } from "../../service/customers.js";
import { Link, Redirect } from "react-router-dom";
import "./Admin-Pannel-Styles/Admin-Pannel-Customers.css";
import { Context } from "../../store/appContext.js";

const AdminPannelCustomers = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    getAllCustomers()
      .then((res) => res.json())
      .then((data) => setCustomers(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <i className="fas fa-user-friends"></i>
            </th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellidos</th>
            <th scope="col">email</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => {
            return (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.first_name}</td>
                <td>{customer.last_name}</td>
                <td>{customer.email}</td>
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

export default AdminPannelCustomers;
