import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("50");
  const [enteredDate, setEnteredDate] = useState("");

  const [validationText, setValidationText] = useState("");
  const [isValidTitle, setIsValidTitle] = useState(false);
  const [isValidDate, setIsValidDate] = useState(false);
  const [isValidPrice, setIsValidPrice] = useState(true);

  // REFACTOR
  const changeHandler = (type, value) => {
    if (type === "title") {
      setEnteredTitle(value);

      if (value.length > 3) {
        setValidationText("Valid field!");
        setIsValidTitle(true);
      } else {
        setValidationText("Invalid field! Minim 3 characters!");
        setIsValidTitle(false);
      }
    } else if (type === "amount") {
      setEnteredAmount(value);

      if (parseInt(value) < 50) {
        setValidationText("Minimum price is 50$");
        setIsValidPrice(false);
      }
    } else {
      setEnteredDate(value);

      if (value) {
        setIsValidDate(true);
      } else {
        setIsValidDate(false);
      }
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="">Title</label>
            <input
              type="text"
              minLength="3"
              required
              value={enteredTitle}
              onChange={(event) => {
                changeHandler("title", event.target.value);
              }}
            />
            <p className={isValidTitle ? "green" : "red"}>{validationText}</p>
          </div>

          <div className="new-expense__control">
            <label htmlFor="">Amount</label>
            <input
              type="number"
              min="50"
              step="0.01"
              required
              value={enteredAmount}
              onChange={(event) => {
                changeHandler("amount", event.target.value);
              }}
            />
            {!isValidPrice && <p className="red">Minimum price is 50$!</p>}
          </div>

          <div className="new-expense__control">
            <label htmlFor="">Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              required
              value={enteredDate}
              onChange={(event) => {
                changeHandler("date", event.target.value);
              }}
            />
          </div>
        </div>

        <div className="new-expense__actions ">
          <button type="submit" className={!isValidDate ? "disable" : ""}>
            Add expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
