import React from "react";
import "./Expenselist.css";
import ExpenseItem from "../Expenses/ExpenseItem";

const Expenselist = (props) => {
 
  if (props.filteredItem.length === 0) {
    return <h2 className="expenses-list__fallback"> Expense not found</h2>;
  }
  if (props.filteredItem.length === 1) {
    return (
      <ul className="expenses-list">
        {props.filteredItem.map((expense, index) => (
          <ExpenseItem
            key={index}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
            location={expense.location}
            id={expense.id}
          />
        ))}
        <h2 className="expenses-list__fallback">
          Only single Expense here. Please add more...
        </h2>
      </ul>
    );
  }
  return (
    <ul className="expenses-list">
      {props.filteredItem.map((expense, index) => (
        <ExpenseItem
          key={index}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
          location={expense.location}
          id={expense.id}
        />
      ))}
    </ul>
  );
};
export default Expenselist;
