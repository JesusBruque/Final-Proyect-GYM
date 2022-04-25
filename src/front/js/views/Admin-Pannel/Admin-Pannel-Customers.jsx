import React, { useEffect, useState } from "react";
import { getAllCustomers, getCustomerInfo } from "../../service/customers.js";
import { Link, useHistory } from "react-router-dom";
import Spinner from "../../component/Spinner.jsx";

import "./Admin-Pannel-Styles/Admin-Pannel-Customers.css";

const AdminPannelCustomers = () => {

  const [customers, setCustomers] = useState([]);
  const [infos, setInfos] = useState({});
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setLoading(true)
    getAllCustomers()
      .then((res) => res.json())
      .then((data) => setCustomers(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const getInfo = (id) => {
    getCustomerInfo(id)
      .then((res) => res.json())
      .then((data) => setInfos(data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      {
        loading == true ? <div className="d-flex justify-content-center mt-3"><Spinner /></div> :
          <div>
            <div className="d-flex justify-content-center mt-3">
              <h1 className="title-pannel">Customers</h1>
            </div>
            <table className="table table-users my-3 mx-auto p-auto">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>

                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => {
                  return (
                    <tr onClick={() => getInfo(customer.id)} key={customer.id}>
                      <td className="td-user">
                        <Link className="profile-link" to={`/info?id=${customer.id}`}>
                          <img
                            src={customer.avatar}
                            className="avatar-size rounded-circle me-3"
                          />
                        </Link>
                      </td>
                      <td className="td-user">{customer.id}</td>
                      <td className="td-user">{customer.first_name}</td>
                      <td className="td-user">{customer.last_name}</td>
                      <td className="td-user">{customer.email}</td>

                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="col-2 btn btn-outline-light mt-3"
                onClick={() => history.goBack()}
              >
                Back
              </button>
            </div>
          </div>
      }
    </>
  );
};

export default AdminPannelCustomers;
