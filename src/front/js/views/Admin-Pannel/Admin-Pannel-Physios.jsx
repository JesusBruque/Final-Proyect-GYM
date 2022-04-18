import React, { useEffect, useState } from "react";
import { getAllPhysios } from "../../service/physios.js";
import { useHistory } from "react-router-dom";
import Spinner from "../../component/Spinner.jsx";

import "./Admin-Pannel-Styles/Admin-Pannel-Physios.css";

const AdminPannelPhysio = () => {
  const history = useHistory();
  const [physios, setPhysios] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    getAllPhysios()
      .then((res) => res.json())
      .then((data) => setPhysios(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {
        loading == true ? <div className="d-flex justify-content-center mt-3"><Spinner /></div> :
          <div>
            <div className="d-flex justify-content-center mt-3">
              <h1 className="title-pannel">Physio list</h1>
            </div>
            <table className="table table-users my-3 mx-auto p-auto">
              <thead>
                <tr>
                  <th></th>
                  <th scope="col">Id</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">email</th>
                </tr>
              </thead>
              <tbody>
                {physios.map((physio) => {
                  return (
                    <tr key={physio.id}>
                      <td className="td-user">
                        <img
                          src={physio.avatar}
                          className="avatar-size rounded-circle me-3"
                        />
                      </td>
                      <td className="td-user">{physio.id}</td>
                      <td className="td-user">{physio.first_name}</td>
                      <td className="td-user">{physio.last_name}</td>
                      <td className="td-user">{physio.email}</td>
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

export default AdminPannelPhysio;
