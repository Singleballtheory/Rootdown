import React from "react";
import PropTypes from "prop-types";

function Drink(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenDrinkClicked(props.id)}>
        <h2>
          {props.name} - {props.price}
        </h2>
        <p>{props.description}</p>
        <p>{props.pints}</p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Drink.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  pints: PropTypes.number,
  id: PropTypes.string,
  whenDrinkClicked: PropTypes.func
};

export default Drink;