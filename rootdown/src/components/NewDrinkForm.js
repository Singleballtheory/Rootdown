import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewDrinkForm(props) {

  function handleNewDrinkFormSubmission(event) {
    event.preventDefault();
    props.onNewDrinkCreation({name: event.target.name.value, price: event.target.price.value, description: event.target.description.value, pints: event.target.pints.value, id: v4()});
  }
  
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewDrinkFormSubmission}
        buttonText="Add new!" />
    </React.Fragment>
  );
}

NewDrinkForm.propTypes = {
  onNewDrinkCreation: PropTypes.func
};

export default NewDrinkForm;