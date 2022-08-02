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
    return;
  };
  const emailChangeHandler = (e) => {
    setEmailInput(e.target.value);
  };
  return (
    <div className={classes["main-container"]}>
      <form className={classes.container} onSubmit={submitHandler}>
        <input
          type="email"
          placeholder="Email Address"
          className={`${classes.input} `}
          onChange={emailChangeHandler}
        />
        <button
          className={classes["submit-button"]}
          type="submit"
          onClick={submitHandler}
        >
          Submit
        </button>
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
