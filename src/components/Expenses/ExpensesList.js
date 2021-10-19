import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.expenselist.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses found</h2>;
  }
  if (props.expenselist.length > 0) {
    return (
      <ul className="expenses-list">
        {props.expenselist.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            created_date={expense.date}
          />
        ))}
        ;
      </ul>
    );
  }
};

export default ExpensesList;
