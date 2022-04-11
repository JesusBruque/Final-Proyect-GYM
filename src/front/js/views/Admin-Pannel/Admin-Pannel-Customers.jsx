import React, { useEffect, useState } from "react";
import { getAllCustomers, getCustomerInfo } from "../../service/customers.js";
import CustomerInfo from "../../component/CustomerInfo.jsx";
import { Link, useHistory } from "react-router-dom";
import "./Admin-Pannel-Styles/Admin-Pannel-Customers.css";
import Spinner from "../../component/Spinner.jsx";

const AdminPannelCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [infos, setInfos] = useState({});
  const [loading, setLoading] = useState(false);
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
  const history = useHistory();

  return (
    <>
      {
        loading == true ? <div className="d-flex justify-content-center mt-3"><Spinner /></div> :
          <div>
            <div className="d-flex justify-content-center mt-3"><h1 className="title-pannel">Lista de usuarios</h1></div>
            <table className="table table-users my-3 mx-auto p-auto">
              <thead>
                <tr>
                  <th scope="col">Avatar</th>
                  <th scope="col">Id</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellidos</th>
                  <th scope="col">email</th>

                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => {
                  return (
                    <tr onClick={() => getInfo(customer.id)} key={customer.id}>
                      <th className="th-user"><Link className="profile-link" to={`/info?id=${customer.id}`}><img
                        src={customer.avatar}
                        className="avatar-size rounded-circle me-3"
                      /></Link></th>
                      <td className="td-user">{customer.id}</td>
                      <td className="td-user">{customer.first_name}</td>
                      <td className="td-user">{customer.last_name}</td>
                      <td className="td-user">{customer.email}</td>

                    </tr>
                  );
                })}
              </tbody>
            </table>
            {/* <CustomerInfo props={infos} /> */}
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="col-2 btn btn-outline-light mt-3"
                onClick={() => history.goBack()}
              >
                Atrás
              </button>
            </div>
          </div>
      }
    </>
  );
};

export default AdminPannelCustomers;
