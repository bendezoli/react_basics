import Chart from "../Charts/Chart";

const ExpensesChart = (props) => {
  const chartDatapoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "MArch", value: 0 },
    { label: "April", value: 0 },
    { label: "May", value: 0 },
    { label: "June", value: 0 },
    { label: "July", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sept", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense in props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDatapoints[expenseMonth].value += expense.amount;
    console.log(chartDatapoints);
  }

  return <Chart dataPoints={chartDatapoints} />;
};
export default ExpensesChart;
