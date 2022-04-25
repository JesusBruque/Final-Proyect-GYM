import React, { useEffect, useState } from "react";
import { getAllTrainers } from "../../service/trainers.js";
import { useHistory } from "react-router-dom";
import Spinner from "../../component/Spinner.jsx";

import "./Admin-Pannel-Styles/Admin-Pannel-trainers.css";

const AdminPannelTrainers = () => {
  const history = useHistory();
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    getAllTrainers()
      .then((res) => res.json())
      .then((data) => setTrainers(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {
        loading == true ? <div className="d-flex justify-content-center mt-3"><Spinner /></div> :
          <div>
            <div className="d-flex justify-content-center mt-3">
              <h1 className="title-pannel">Trainers</h1>
            </div>
            <table className="table table-users my-3 mx-auto p-auto">
              <thead>
                <tr>
                  <th></th>
                  <th scope="col">Id</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
                {trainers.map((trainer) => {
                  return (
                    <tr key={trainer.id}>
                      <td className="td-user">
                        <img
                          src={trainer.avatar}
                          className="avatar-size rounded-circle me-3"
                        />
                      </td>
                      <td className="td-user">{trainer.id}</td>
                      <td className="td-user">{trainer.first_name}</td>
                      <td className="td-user">{trainer.last_name}</td>
                      <td className="td-user">{trainer.email}</td>
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

export default AdminPannelTrainers;
