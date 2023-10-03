import React from "react";
import Card from "../UI/Card";
import ExpenseDaitels from "./ExpenseDaitels";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  // return React.createElement(Card, { className: "expense-item" },
  //   React.createElement(ExpenseDate, { date: props.date }),
  //   React.createElement(ExpenseDaitels, { location: props.LocationofExpenditure ,title: props.title , amount: props.amount}
  //     ))
const clickHandler= () => {
  console.log (console.log ("Clicked!!!"))
}

function deleteHandler () {
console.log ('Expense deleted')
}

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDaitels title={props.title}
        location={props.LocationofExpenditure}
        amount={props.amount} />
        <button onClick={clickHandler}>Click Me</button>
       <button onClick={deleteHandler}>Delete Expense</button>

    </Card>
  );
}
export default ExpenseItem;
