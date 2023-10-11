import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const [validity, setValidity] = useState("");

  // with one state
  // call: userInput.enteredTitle
  // u have to update the all values otherwise the data will be lost
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    if (event.target.value.length > 3) {
      setValidity("Valid field");
    } else {
      setValidity("Invalid filed");
    }
    // setUserInput({
    // ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // keeping the previous state + when you are depending on previous state
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  return (
    <div className="new-expense">
      {/* <p>{userInput.enteredTitle}</p> */}
      <p>{enteredTitle}</p>
      <p>{enteredAmount}</p>
      <p>{enteredDate}</p>
      <form action="">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="">Title</label>
            <input type="text" onChange={titleChangeHandler} />
            <p>{validity}</p>
          </div>

          <div className="new-expense__control">
            <label htmlFor="">Amount</label>
            <input
              type="number"
              min="0.01s"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>

          <div className="new-expense__control">
            <label htmlFor="">Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              onChange={dateChangeHandler}
            />
          </div>
        </div>

        <div className="new-expense__actions">
          <button type="submit">Add expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
