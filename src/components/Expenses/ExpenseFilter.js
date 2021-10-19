import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const yearChangedHandler = (event) => {
    props.onFilterChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by Year</label>
        <select value={props.selectedFilter} onChange={yearChangedHandler}>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
