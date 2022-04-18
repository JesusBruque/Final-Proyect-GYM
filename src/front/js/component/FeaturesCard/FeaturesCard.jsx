import React from "react";
import PropTypes from "prop-types";
import "./featurescard.css";

export const FeaturesCard = (props) => {
  return (
    <div className="col-12 col-lg-4 mb-4">
      <div className="border-0">
        <div className="text-center py-2">
          <img src={props.icon} className="features-icon"></img>
        </div>
        <div className="features-body text-center p-0 pt-2">
          <h5>{props.title}</h5>
          <p className="features-text text-center mx-2">{props.text}</p>
        </div>
      </div>
    </div>
  );
};

FeaturesCard.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};
