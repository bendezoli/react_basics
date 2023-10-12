import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {/* <pre>{JSON.stringify(props.items, null, 2)}</pre> */}
      {props.items.map((expense) => (
        <ExpenseItem key={expense.id} data={expense} />
      ))}
    </ul>
  );
};

export default ExpensesList;
