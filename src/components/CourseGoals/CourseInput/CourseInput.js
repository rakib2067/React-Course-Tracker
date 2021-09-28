import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.invalid ? "red" : "black")};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    border-color: ${(props) => (props.invalid ? "red" : "black")};
    background-color: ${(props) => (props.invalid ? "#ffd7d7" : "white")};
  }

  & input:focus {
    outline: none;
    background: ${(props) => (props.invalid ? "#ffd7d7" : "#fad0ec")};
    border-color: ${(props) => (props.invalid ? "red" : "#8b005d")};
  }
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [invalid, setInvalid] = useState(false);
  const goalInputChangeHandler = (event) => {
    if (enteredValue.trim().length > 0) {
      setInvalid(false);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    if (enteredValue.trim().length === 0) {
      event.preventDefault();
      setInvalid(true);
      return;
    }
    setInvalid(false);
    event.preventDefault();
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={invalid}>
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
