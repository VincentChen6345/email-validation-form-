import React, { useState } from "react";
import classes from "./App.module.css";

function App() {
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [emailInput, setEmailInput] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(emailInput);
    if (emailInput.trim().length === 0 || !emailInput.includes("@")) {
      setEmailIsValid(false);
      console.log(emailIsValid);

      return;
    }
    setEmailInput("");
    return;
  };
  const emailChangeHandler = (e) => {
    setEmailIsValid(true);
    setEmailInput(e.target.value);
  };

  return (
    <div className={classes["main-container"]}>
      <form className={classes.container} onSubmit={submitHandler}>
        <input
          type="email"
          placeholder="Email Address"
          className={`${classes.input} ${!emailIsValid && classes.invalid}`}
          //the logical AND operator (&&) returns the first falsy value , or the last operand if they are all truthy
          onChange={emailChangeHandler}
          value={emailInput}
        />
        <button
          className={classes["submit-button"]}
          type="submit"
          onClick={submitHandler}
        >
          Submit
        </button>
        <span
          className={`${classes.instructions} ${
            emailIsValid ? classes.hidden : ""
          }`}
        >{`${
          emailInput.trim().length === 0
            ? "Please enter email address"
            : "Email address should include @ "
        }`}</span>
      </form>
    </div>
  );
}

export default App;

/*Actions*/
/*
1. Revise how to dynamically style css modules
2. add red background , red outline to input field when invalid
3. add relevant placeholder text based on what caused it to be invalid */
