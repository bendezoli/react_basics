import "./Expenses.css";
import PropTypes from "prop-types";
import ExpenseItem from "./ExpenseItem";

const Expenses = ({ data }) => {
  return (
    <div className="expenses">
      {data &&
        data.map((expenseItem, expenseIndex) => (
          <ExpenseItem data={expenseItem} key={expenseIndex}></ExpenseItem>
          //   <pre>{JSON.stringify(expenseItem, null, 2)}</pre>
        ))}
    </div>
  );
};
export default Expenses;

Expenses.propTypes = {
  data: PropTypes.any.isRequired,
};
