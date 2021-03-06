import React from "react";
import Drink from "./Drink";
import PropTypes from "prop-types";

function DrinkList(props) {

  return (
    <React.Fragment>
      <hr />
      {props.drinkList.map((drink) =>
        <Drink
          whenDrinkClicked={props.onDrinkSelection}
          name={drink.name}
          price={drink.price}
          description={drink.description}
          pints={drink.pints}
          id={drink.id}
          key={drink.id}
        />
      )}
    </React.Fragment>
  );
}

DrinkList.propTypes = {
  drinkList: PropTypes.array,
  onDrinkSelection: PropTypes.func
};

export default DrinkList;