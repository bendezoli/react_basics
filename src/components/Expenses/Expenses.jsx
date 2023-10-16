import { useState } from "react";
import "./Expenses.css";
import PropTypes from "prop-types";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ data }) => {
  const [filteredYear, setFilteredYear] = useState("All");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = data.filter((expense) => {
    if (filteredYear === "All" || filteredYear === "") {
      return expense;
    } else {
      return expense.date.getFullYear().toString() === filteredYear;
    }
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={filterChangeHandler} />
        <pre>{JSON.stringify(filteredExpenses.length, null, 2)}</pre>
        {filteredExpenses.length > 0 && (
          <ExpensesChart expenses={filteredExpenses} />
        )}
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

Expenses.propTypes = {
  data: PropTypes.array.isRequired,
};
