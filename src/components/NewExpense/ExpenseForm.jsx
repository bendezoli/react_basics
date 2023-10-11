import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <div className="new-expense">
      <form action="">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="">Title</label>

            <input type="text" />
          </div>

          <div className="new-expense__control">
            <label htmlFor="">Amount</label>
            <input type="number" min="0.01s" step="0.01" />
          </div>

          <div className="new-expense__control">
            <label htmlFor="">Date</label>
            <input type="date" min="2019-01-01" step="2023-12-31" />
          </div>
        </div>

        <div className="new-expense__actions">
          <button type="submit">Add expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
