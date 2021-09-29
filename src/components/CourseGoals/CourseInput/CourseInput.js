import React, { useState } from "react";
import styles from "./CourseInput.module.css";
import Button from "../../UI/Button/Button";

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
      <div
        className={`${styles["form-control"]} ${invalid ? styles.invalid : ""}`}
        invalid={invalid}
      >
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
