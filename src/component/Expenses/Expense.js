import "./expense.css";
import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "../AddExpense/ExpenseFilter";
import Expenselist from "../AddExpense/Expenselist";
import ExpensesChart from "./ExpensesChart";

const Expense = (props) => {

  const [fiteredYear, setFilteredYear] = useState("2023");
  const filterOnChange = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpense = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === fiteredYear
  })
  
  return (
    <Card className="expense">
      <ExpenseFilter selected={fiteredYear} onChangeFilter={filterOnChange} />
      <ExpensesChart expenses={filteredExpense}/>
      <Expenselist filteredItem={filteredExpense}/>
    </Card>
  );
};

export default Expense;
