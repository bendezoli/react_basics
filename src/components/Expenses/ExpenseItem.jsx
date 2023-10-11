import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import PropTypes from "prop-types";
const ExpenseItem = ({ data }) => {
  const [title, setTitle] = useState(data.title);
  console.log("function called");
  const updateTitle = () => {
    setTitle("Title updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={data.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${data.amount}</div>
        <button onClick={updateTitle}>Change date</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;

ExpenseItem.propTypes = {
  data: PropTypes.any.isRequired,
};
