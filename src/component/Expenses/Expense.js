import "./expense.css";
import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../AddExpense/ExpenseFilter";


const Expense = (props) => {

  const [fiteredYear, setFilteredYear] = useState("2023");
  const filterOnChange = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpense = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === fiteredYear
  })
  let expenseContext = <p> Expense not found </p>;

  if (filteredExpense.length > 0) {
    expenseContext = filteredExpense.map((expense, index) =>

      <ExpenseItem
        key={index}
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
        location={expense.location}
        id={expense.id}
      />
    )
  }

  return (
    <Card className="expense">
      <ExpenseFilter selected={fiteredYear} onChangeFilter={filterOnChange} />
      {expenseContext}
    </Card>
  );
};

export default Expense;
