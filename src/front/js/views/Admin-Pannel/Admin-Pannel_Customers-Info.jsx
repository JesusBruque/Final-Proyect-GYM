import React, { useEffect, useState } from "react";
import { getAllCustomers } from "../../service/customers.js";
import { getCustomerInfo } from "../../service/getcustomerinfo.js";
import { Link } from "react-router-dom";
import "./Admin-Pannel-Styles/Admin-Pannel-Customers.css";
import { Context } from "../../store/appContext.js";

const AdminPannelCustomerInfo = () => {
  const [customers, setCustomers] = useState([]);
  const [customerInfo, setCustomerInfo] = useState([]);
  useEffect(() => {
    getAllCustomers()
      .then((res) => res.json())
      .then((data) => setCustomers(data))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    getCustomerInfo()
      .then((res) => res.json())
      .then((data) => setCustomerInfo(data))
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
            <th scope="col">goals</th>
            <th scope="col">Medical History</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => {
            return (
              <tr key={info.id}>
                <td>{goals.id}</td>
                <td>{medical_history.id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button type="button" className="btn btn-exit col-md-8 offset-md-2">
        <Link to="/admin/menu">
          <i className="fas fa-arrow-alt-circle-left"></i>Back
        </Link>
      </button>
    </div>
  );
};

export default AdminPannelCustomerInfo;
