import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const expenseDataBus = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };

    props.onSaveExpenseDataHandler(expenseData);
  };

  const handleFormAppearance = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div
      className="new-expense"
      style={!showForm ? { display: "flex", justifyContent: "center" } : {}}
    >
      {!showForm && (
        <div className="new-expense__actions ">
          <button onClick={handleFormAppearance}>Add expense</button>
        </div>
      )}

      {showForm && (
        <ExpenseForm
          onCloseForm={closeForm}
          onSaveExpenseData={expenseDataBus}
        />
      )}
    </div>
  );
};

export default NewExpense;
