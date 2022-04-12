import React, { useEffect, useState } from "react";
import { customerInfo, getGoals, updateCustomerInfo } from "../../service/customerInfo.js";
import { useHistory } from "react-router-dom";
import "./customerInfo.css";
import Spinner from "../../component/Spinner.jsx";

const CustomerInfo = () => {

    const url = new URLSearchParams(window.location.search);
    const id = url.get("id");
    const history = useHistory();
    const initialState = {
        medical_history: ""
    }
    const [info, setInfo] = useState(initialState);
    const [infoCopy, setInfoCopy] = useState(initialState);
    const [goals, setGoals] = useState([]);
    const [disabledData, setDisabledData] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(initialState);

    useEffect(() => {
        setLoading(true);
        customerInfo(id)
            .then((res) => res.json())
            .then((data) => {
                setInfo(data)
                setInfoCopy(data)
                console.log("info", data)
            })
            .catch((error) => console.log(error));

        getGoals(id)
            .then((res) => res.json())
            .then((data) => {
                setGoals(data)
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const handleClickData = () => {
        setDisabledData(!disabledData);
    };

    const cancel = () => {
        setDisabledData(true);
        setInfo(infoCopy);
    };

    const handleChangeInfo = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInfo({ ...info, [name]: value });
    };

    const updateInfo = () => {
        setLoading(true);

        const errorHandler = { ...initialState };

        if (info.medical_history.length === 0) {
            errorHandler.medical_history = "Medical history can't be empty";
        }

        if (errorHandler.medical_history === "") {
            console.log("info", info)
            updateCustomerInfo(info)
                .then((res) => res.json())
                .then((data) => {
                    setInfo(data);
                    setInfoCopy(data);
                })
                .catch((err) => console.log(err))
                .finally(() => {
                    handleClickData();
                    setLoading(false);
                });
        }
        setError(errorHandler);
    };

    return (
        <div className="container m-auto row justify-content-around">
            <div className="col-md-6">
                <div className="card card-data d-flex flex-column">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item account-list my-2">
                            <div className="row">
                                <div className="col">
                                    <h6 className="mb-0">Goals</h6>
                                </div>
                                <div className="cont-goals input-group col-sm-9">
                                    <ul className="list-group list-group-flush container px-0">
                                        {goals.map((goal, index) =>
                                            <li key={index} className="list-goal list-group-item d-flex bd-highlight">
                                                {goal.goals}

                                            </li>)}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>



            <div className="col-md-6">
                <div className="card card-data d-flex flex-column">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item account-list my-2">
                            <div className="row">
                                <div className="col">
                                    <h6 className="mb-0">Medical History</h6>
                                </div>
                                <div className="input-group col-sm-9">
                                    <textarea
                                        type="text"
                                        onChange={handleChangeInfo}
                                        className="med-text form-control"
                                        defaultValue={info.medical_history}
                                        name="medical_history"
                                        disabled={disabledData}
                                    />
                                    {error.medical_history != "" ? (
                                        <p className="text-danger mt-3 w-100">{error.medical_history}</p>
                                    ) : null}
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="row d-flex flex-row-reverse">
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
                                    className="col-3 account-button m-1 float-right"
                                    onClick={cancel}
                                >
                                    Cancel
                                </button>
                                {loading == true ? (
                                    <Spinner />
                                ) : (
                                    <button
                                        type="button"
                                        className="col-3 account-button m-1 float-right"
                                        onClick={updateInfo}
                                    >
                                        Save
                                    </button>
                                )}
                            </div>
                        )}
                    </div>

                </div>
            </div>
            <div className="col-md-3 mt-3">
                <button
                    type="button"
                    className="col-12 btn btn-outline-light my-1 "
                    onClick={() => history.goBack()}
                >
                    Go back
                </button>
            </div>
        </div>


    )
}

export default CustomerInfo;