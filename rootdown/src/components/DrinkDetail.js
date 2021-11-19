import React from "react";
import PropTypes from "prop-types";
import Drink from "./Drink";

function DrinkDetail(props) {
  const { drink } = props;

  return (
    <React.Fragment>
      <h1>{drink.name}</h1>
      <p>{drink.description}</p>
      <p>
        Price per pint: <em>{drink.price}</em>
      </p>
      <p>Available pints: {drink.pints}</p>
      <hr />
      <button onClick={props.onClickingPurchase}>Purchase a Pint</button>
      <button onClick={props.onClickingRestock}>Tap a new Keg</button>
      <hr />
    </React.Fragment>
  );
}

DrinkDetail.propTypes = {
  drink: PropTypes.object,
  onClickingPurchase: PropTypes.func,
  onClickingRestock: PropTypes.func
};

export default DrinkDetail;