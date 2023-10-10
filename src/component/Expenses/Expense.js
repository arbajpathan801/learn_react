import "./expense.css";
import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

const Expense = ({ items }) => {
  return(
  <Card className="expense">
    {items.map((expense) => {
      return (
        <div id={expense.id}>
          <ExpenseItem
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
            LocationofExpenditure={expense.LocationofExpenditure}
            id={expense.id}
          />
        </div>
      );
    })}
  </Card>
)};

export default Expense;
