import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./UserForm.module.css";
import Button from "../UI/Button";

const UserForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();

    // check for empty input
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    // check for negative age
    if (+enteredAge < 0) {
      return;
    }

    // lifting the state up
    props.onAddUser(enteredName, enteredAge, Math.random().toString());
    // clearing the input
    setEnteredAge("");
    setEnteredName("");
  };

  const enteredNameHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const enteredAgeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='name'>User Name</label>
        <input
          type='text'
          id='name'
          // value will reflect the current state of the name
          value={enteredName}
          onChange={enteredNameHandler}
        />
        <label htmlFor='age'>Age (years)</label>
        <input
          type='number'
          id='age'
          // value will reflect the current state of the age
          value={enteredAge}
          onChange={enteredAgeHandler}
        />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default UserForm;
