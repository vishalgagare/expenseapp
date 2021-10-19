import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isAddingExense, setAddingExpense] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAddingExpense(false);
  };
  const onAddingExpenseHandler = () => {
    setAddingExpense(true);
  };
  const onStopExpenseHandler = () => {
    setAddingExpense(false);
  };

  if (isAddingExense) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onStopExpense={onStopExpenseHandler}
        />
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <button onClick={onAddingExpenseHandler}>Add New Expense</button>
      </div>
    );
  }
};

export default NewExpense;
