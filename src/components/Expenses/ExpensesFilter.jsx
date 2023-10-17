import React, { useState, useRef } from "react";
import "./ExpensesFilter.css";
import ErrorModal from "../UI/ErrorModal"; // Update the import statement

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  const [isOn, setOnOFF] = useState(false);

  const turnOnOFF = () => {
    setOnOFF((isOn) => !isOn);
    console.log("clicked");
  };

  const btnLbl = useRef();
  console.log(btnLbl);

  return (
    <div className="expenses-filter">
      <button ref={btnLbl} onClick={turnOnOFF}>
        Teleporting modal test
      </button>
      {isOn && <ErrorModal closeModal={turnOnOFF} />}
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={dropdownChangeHandler}>
          <option value="All">All</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
