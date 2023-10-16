import CancelButton from "../UI/CancelButton";
import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [validationText, setValidationText] = useState("");
  const [isValidTitle, setIsValidTitle] = useState(false);

  // const [isValidPrice, setIsValidPrice] = useState(false);

  // const buttonWrapperClass = () => {
  //   if (!showForm) {
  //     return "justify-content: center";
  //   }
  // };

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

      // if (parseInt(value) < 50) {
      //   setIsValidPrice(false);
      // } else {
      //   setIsValidPrice(true);
      // }
    } else {
      setEnteredDate(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
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
            {/* {!isValidPrice && <p className="red">Minimum price is 50$!</p>} */}
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

        <div className={`button-wrapper`}>
          <div className="new-expense__actions ">
            <button type="submit">Add expense</button>
          </div>

          <div className="new-expense__close" onClick={props.onCloseForm}>
            <CancelButton type="button">Cancel</CancelButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
