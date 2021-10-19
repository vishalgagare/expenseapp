import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import ExpensesList from "./ExpensesList";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filtered_items = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedFilter={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpenseChart items={filtered_items} />
      <ExpensesList expenselist={filtered_items} />
    </Card>
  );
}

export default Expenses;
