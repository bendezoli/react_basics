import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const [validity, setValidity] = useState("");
  const [isValid, setIsValid] = useState(false);

  // REFACTOR
  const changeHandler = (type, value) => {
    if (type === "title") {
      setEnteredTitle(value);

      if (value.length > 3) {
        setValidity("Valid field!");
        setIsValid(true);
      } else {
        setValidity("Invalid field!");
        setIsValid(false);
      }
    } else if (type === "amount") {
      setEnteredAmount(value);
    } else {
      setEnteredDate(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="">Title</label>
            <input
              type="text"
              onChange={(event) => {
                changeHandler("title", event.target.value);
              }}
            />
            <p className={isValid ? "green" : "red"}>{validity}</p>
          </div>

          <div className="new-expense__control">
            <label htmlFor="">Amount</label>
            <input
              type="number"
              min="0.01s"
              step="0.01"
              onChange={(event) => {
                changeHandler("amount", event.target.value);
              }}
            />
          </div>

          <div className="new-expense__control">
            <label htmlFor="">Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              onChange={(event) => {
                changeHandler("date", event.target.value);
              }}
            />
          </div>
        </div>

        <div className="new-expense__actions ">
          <button type="submit" className={!isValid ? "disable" : ""}>
            Add expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
