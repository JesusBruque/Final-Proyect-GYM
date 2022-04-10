import React, { useEffect, useState, useContext } from "react";
import { customerInfo, getGoals, getUsers } from "../../service/customerInfo.js";
import { Context } from "../../store/appContext.js";
import "./customerInfo.css";

const CustomerInfo = () => {

    const { store, actions } = useContext(Context);

    const [info, setInfo] = useState({});
    const [infoCopy, setInfoCopy] = useState({});
    const [goals, setGoals] = useState([]);
    const [disabledData, setDisabledData] = useState(true);


    useEffect(() => {

        customerInfo(9000)
            .then((res) => res.json())
            .then((data) => {
                setInfo(data)
                setInfoCopy(data)
                console.log("info", data)
            })
            .catch((error) => console.log(error));

        getGoals(9000)
            .then((res) => res.json())
            .then((data) => {
                setGoals(data)
                console.log("goals", data)

            })
            .catch((err) => console.log(err))
    }, []);

    const getAllCustomers = () => {
        getUsers("customer")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                actions.setCustomers(data);
            })
            .catch((err) => {
                console.log(err);
            })
    };

    const handleClickData = () => {
        setDisabledData(!disabledData);
    };

    const cancel = () => {
        setDisabledData(true);
        setInfo(infoCopy);
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
                                <div className="input-group col-sm-9">
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        // defaultValue={info.goals}
                                        name="goals"
                                        disabled={true}
                                    />
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
                                        className="form-control"
                                        // defaultValue={info.medical_history}
                                        name="medical_history"
                                        disabled={true}
                                    />
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