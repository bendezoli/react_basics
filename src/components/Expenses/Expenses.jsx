import { useState } from "react";
import "./Expenses.css";
import PropTypes from "prop-types";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";

const Expenses = ({ data }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = data.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={filterChangeHandler} />

        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};
export default Expenses;

Expenses.propTypes = {
  data: PropTypes.any.isRequired,
};
