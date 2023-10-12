import "./Expenses.css";
import PropTypes from "prop-types";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = ({ data }) => {
  return (
    <Card className="expenses">
      {data &&
        data.map((expenseItem, expenseIndex) => (
          <ExpenseItem data={expenseItem} key={expenseIndex}></ExpenseItem>
          // <pre>{JSON.stringify(expenseItem, null, 2)}</pre>
        ))}
    </Card>
  );
};
export default Expenses;

Expenses.propTypes = {
  data: PropTypes.any.isRequired,
};
