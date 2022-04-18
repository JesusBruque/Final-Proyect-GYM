import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getUser, updateUser } from "../../service/account.js";
import Spinner from "../../component/Spinner.jsx";
import { ToastContainer, toast, Flip } from 'react-toastify';

import "./account.css";

const Account = () => {
  const history = useHistory();
  const initialState = {
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
    role_id: "",
    avatar: "",
  };

  const [user, setUser] = useState(initialState);
  const [userCopy, setUserCopy] = useState(initialState);
  const [disabledData, setDisabledData] = useState(true);
  const [error, setError] = useState(initialState);
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUser()
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setUserCopy(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const update = () => {
    setLoading(true);
    const errorHandler = { ...initialState };
    if (user.first_name.length === 0) {
      errorHandler.first_name = "First Name can't be empty";
    }

    if (user.last_name.length === 0) {
      errorHandler.last_name = "Last Name can't be empty";
    }

    if (user.phone.length !== 9) {
      errorHandler.phone = "Invalid Phone Number";
    }

    const regex =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(user.email)) {
      errorHandler.email = "Invalid Format Email";
    } else if (user.email.length === 0) {
      errorHandler.email = "Email can't be empty";
    }

    if (
      errorHandler.email === "" &&
      errorHandler.first_name === "" &&
      errorHandler.last_name === "" &&
      errorHandler.phone === ""
    ) {
      const form = new FormData();
      if (file !== "") {
        form.append("avatar", file);
      }

      form.append("first_name", user.first_name);
      form.append("last_name", user.last_name);
      form.append("phone", user.phone);
      form.append("email", user.email);

      updateUser(form)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          setUserCopy(data);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          handleClickData();
          setLoading(false);
          toast.success('Account information update succesfully', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,

          });
        });
    }
    setError(errorHandler);
  };

  const cancel = () => {
    setDisabledData(true);
    setUser(userCopy);
  };

  const handleClickData = () => {
    setDisabledData(!disabledData);
  };

  const handleChangeUser = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleChangeFiles = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setUser({ ...user, avatar: reader.result });
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="container mt-3">
      <div className="d-flex flex-column justify-content-center">
        <div className="row d-flex flex-column justify-content-center">
          <div className="col-md-6">
            <div className="card card-data d-flex flex-column">
              <div className="col-3 ms-3 d-flex justify-content-between pt-3 pb-3">
                <img src={user.avatar} className="rounded-circle my-2" />
                <div className="btn-holder m-auto p-auto">
                  {disabledData ? (
                    <span></span>
                  ) : (
                    <div id="div_file">
                      <p id="texto" className="ms-3 p-3">
                        Change Profile Picture
                      </p>
                      <input
                        type="file"
                        id="btn_enviar"
                        onChange={handleChangeFiles}
                        accept="image/png, image/gif, image/jpeg"
                      />
                    </div>
                  )}
                </div>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item account-list mt-2">
                  <div className="row">
                    <div className="col">
                      <h6 className="mb-0">First Name</h6>
                    </div>
                    <div className="input-group col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        onChange={handleChangeUser}
                        defaultValue={user.first_name}
                        name="first_name"
                        disabled={disabledData}
                      />
                      {error.first_name != "" ? (
                        <p className="text-danger m-2 mt-3 w-100">
                          {error.first_name}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </li>
                <li className="list-group-item account-list mt-2">
                  <div className="row">
                    <div className="col">
                      <h6 className="mb-0">Last Name</h6>
                    </div>
                    <div className="input-group col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        onChange={handleChangeUser}
                        defaultValue={user.last_name}
                        name="last_name"
                        disabled={disabledData}
                      />
                      {error.last_name != "" ? (
                        <p className="text-danger m-2 mt-3 w-100">
                          {error.last_name}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </li>
                <li className="list-group-item account-list mt-2">
                  <div className="row">
                    <div className="col">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="input-group col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        onChange={handleChangeUser}
                        defaultValue={user.phone}
                        name="phone"
                        disabled={disabledData}
                      />
                      {error.phone != "" ? (
                        <p className="text-danger m-2 mt-3 w-100">
                          {error.phone}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </li>
                <li className="list-group-item account-list mt-2 mb-2">
                  <div className="row">
                    <div className="col">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="input-group col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        onChange={handleChangeUser}
                        defaultValue={user.email}
                        name="email"
                        disabled={disabledData}
                      />
                      {error.email != "" ? (
                        <p className="text-danger m-2 mt-3 w-100">
                          {error.email}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </li>
              </ul>
              <div className="container p-2 mx-2 mb-2">
                <div className="row d-flex">
                  {disabledData ? (
                    <button
                      type="button"
                      className="col-3 account-button m-3"
                      onClick={handleClickData}
                    >
                      Edit
                    </button>
                  ) : (
                    <div className="row">
                      <button
                        type="button"
                        className="col-3 account-button m-3 float-right"
                        onClick={cancel}
                      >
                        Cancel
                      </button>
                      {loading == true ? (
                        <Spinner />
                      ) : (
                        <button
                          type="button"
                          className="col-3 account-button m-3 float-right"
                          onClick={update}
                        >
                          Save
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <ToastContainer transition={Flip} />
          <div className="col-md-6">
            <button
              type="button"
              className="col-3 btn btn-outline-light ml-3 mt-3"
              onClick={() => history.goBack()}
            >
              Go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
