import "./ExpenseItem.css"
import React from "react";

const ExpenseDaitels = (props) => {
    return (
        <>
            <div className="expense-item__description">
                <h2> {props.title}</h2>

                <h2>{props.location}</h2>
            </div>
            <div className="expense-item__price">${props.amount}</div>
            
        </>
    )
}
export default ExpenseDaitels;