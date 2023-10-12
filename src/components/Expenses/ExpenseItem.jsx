import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import PropTypes from "prop-types";
const ExpenseItem = ({ data }) => {
  return (
    <li>
      <Card className="expense-item">
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <ExpenseDate date={data.date} />
        <div className="expense-item__description">
          <h2>{data.title}</h2>
          <div className="expense-item__price">${data.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;

ExpenseItem.propTypes = {
  data: PropTypes.any.isRequired,
};
