import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDaitels from "./ExpenseDaitels";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import "./Expense";

const ExpenseItem = (props) => {
  // return React.createElement(Card, { className: "expense-item" },
  //   React.createElement(ExpenseDate, { date: props.date }),
  //   React.createElement(ExpenseDaitels, { location: props.LocationofExpenditure ,title: props.title , amount: props.amount}
  //     ))
  // console.log ((props))
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);
  const clickHandler = async () => {
    setTitle("Changed!!!");
    setAmount(100);
  };
  const deleteHandler = () => {
    console.log (props.id)
     document.getElementById(props.id).remove();
    // console.log (li)
  };

  return (
    <div id={props.id}>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDaitels
          title={title}
          location={props.LocationofExpenditure}
          amount={amount}
          // id={props.id}
        />
        <span className="Handler" onClick={clickHandler}>
          Update
        </span>
        <span className="Handler" onClick={() => deleteHandler()}>
          Delete
        </span>
      </Card>
    </div>
  );
};
export default ExpenseItem;
