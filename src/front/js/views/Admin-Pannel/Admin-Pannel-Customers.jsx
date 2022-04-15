import React, { useEffect, useState } from "react";
import { getAllCustomers, getCustomerInfo } from "../../service/customers.js";
import CustomerInfo from "../../component/CustomerInfo.jsx";
import { Link, Redirect, useHistory } from "react-router-dom";
import "./Admin-Pannel-Styles/Admin-Pannel-Customers.css";
import { Context } from "../../store/appContext.js";

const AdminPannelCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [infos, setInfos] = useState({});
  useEffect(() => {
    getAllCustomers()
      .then((res) => res.json())
      .then((data) => setCustomers(data))
      .catch((error) => console.log(error));
  }, []);
  const getInfo = (id) => {
    getCustomerInfo(id)
      .then((res) => res.json())
      .then((data) => setInfos(data))
      .catch((error) => console.log(error));
  };
  const history = useHistory();
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <i className="fas fa-user-friends"></i>
            </th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">email</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => {
            return (
              <tr onClick={() => getInfo(customer.id)} key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.first_name}</td>
                <td>{customer.last_name}</td>
                <td>{customer.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <CustomerInfo props={infos} />
      <button
        type="button"
        className="btn btn-exit col-md-8 offset-md-2"
        onClick={() => history.goBack()}
      >
        <i className="fas fa-arrow-alt-circle-left"></i>Back
      </button>
    </div>
  );
};

export default AdminPannelCustomers;
