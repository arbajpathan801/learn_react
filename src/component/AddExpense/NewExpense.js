// import Form from "./ExpenseForm";
import './NewExpense.css'
import React, { useState } from "react";
import ExpneseFrom from './ExpenseForm';


function NewExpense (props){

     const [isEditing,setIsEditing]= useState (false);

const onSaveExpenseData=(enteredExpenseData) =>{
    const expenseData={
        id: Math.random().toString(),
        ...enteredExpenseData
        
    }
    
    props.onAdd(expenseData)
    setIsEditing(false)
}
const startEditingHandler =() => {
    setIsEditing(true)
}
const  cancleHandeler= () => {
    setIsEditing(false)
}
    return (
        <div className='new-expense'>
           {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
          {isEditing && <ExpneseFrom onSaveExpense={onSaveExpenseData} onCancle={cancleHandeler} />}
           
        </div>
    );
}
export default NewExpense;