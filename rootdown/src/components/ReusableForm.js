import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Drink Name' />
        <input
          type='text'
          name='price'
          placeholder='Price per pint' />
        <textarea
          name='description'
          placeholder='Drink description' />
        <input
          type='text'
          name='pints'
          placeholder='Available pints' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;