import React, { useEffect, useState } from "react";
import { getCustomerInfo } from "../service/customers.js";
import { Context } from "../store/appContext.js";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";

const CustomerInfo = (props) => {
  console.log("estos son los putos props", props);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <i className="fas fa-bullseye"></i>
            </th>
            <th scope="col">Metas</th>
            <th scope="col">Historial Médico</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.props.id}</td>
            <td>{props.props.goals}</td>
            <td>{props.props.medical_history}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

CustomerInfo.propTypes = {
  id: PropTypes.number,
  goals: PropTypes.string,
  medical_history: PropTypes.string,
};

export default CustomerInfo;
