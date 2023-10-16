import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint, dataPointINdex) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
          key={dataPointINdex}
        />
      ))}
    </div>
  );
};

export default Chart;
