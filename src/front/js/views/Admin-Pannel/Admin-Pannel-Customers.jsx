import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Admin-Pannel-Styles/Admin-Pannel-Customers.css";
import { Context } from "../../store/appContext.js";
import {getAllCustomers} from "../../Service/Customers.js"

const AdminPannelCustomers = () => {
  const {store, actions} = useContext(Context);
	const getFetchAll = async() => {
		const customers = await getAllCustomers()
		const customersJson = await customers.json()
		console.log(customersJson)
		actions.setCustomers(customersJson.results)
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
          <tr>
          <div className="row-1">{store.customers.map(first_name, last_name)}</div>
          </tr>
        </tbody>
      </table>
      <button type="button" className="btn btn-exit col-md-8 offset-md-2">
        <Link to="/admin/menu">
          <i class="fas fa-arrow-alt-circle-left"></i>Atrás
        </Link>
      </button>
    </div>
  );
};

export default AdminPannelCustomers;
