import React, { useState } from "react";
import "./ExpenseForm.css";
import "./input.css";
import Table from "./table";
// import showForm from "./ShowForm";
function ExpenseForm() {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");

  const [inputarr, setInputArr] = useState([]);
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const onChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  // const titleHandler = (e) => {
  //   setEnteredTitle(e.target.value);
  //   // setUserInput({
  //   //   ...userInput,
  //   //   enteredTitle:e.target.value
  //   // })
  //   // setUserInput((prevState) => {
  //   //   return {
  //   //     ...prevState,
  //   //     enteredTitle:e.target.value
  //   //   }
  //   // })
  // };
  // const amountHandler = (e) => {
  //   setEnteredAmount(e.target.value);
  //   // setUserInput({
  //   //   ...userInput,
  //   //   enteredAmount:e.target.value
  //   // })
  //   // setUserInput((prevState) => {
  //   //   return {
  //   //     ...prevState,
  //   //     enteredAmount:e.target.value
  //   //   }
  //   // })
  // };
  // const dateHandler = (e) => {
  //   setEnteredDate(e.target.value);
  //   // setUserInput({
  //   //   ...userInput,
  //   //   enteredDate:e.target.value
  //   // })
  //   // setUserInput((prevState) => {
  //   //   return {
  //   //     ...prevState,
  //   //     enteredDate:e.target.value
  //   //   }
  //   // })
  // };
  let { enteredTitle, enteredAmount, enteredDate } = userInput;
  const submitHandler = (e) => {
    e.preventDefault();
    const newInputarr = [
      ...inputarr,
      { enteredTitle, enteredAmount, enteredDate },
    ];
    setInputArr(newInputarr);

    //  console.log (inputarr)
    console.log(newInputarr);

    setUserInput({ enteredTitle: "", enteredAmount: "", enteredDate: "" });
    // setEnteredTitle('');
    // setEnteredAmount('')
    // setEnteredDate('')
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              name="enteredTitle"
              autoComplete="off"
              placeholder="Inter Title"
              value={userInput.enteredTitle}
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              name="enteredAmount"
              // min="0.01"
              // step="10"
              placeholder="Inter Amount"
              autoComplete="off"
              value={userInput.enteredAmount}
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              name="enteredDate"
              min="2022-01-01"
              max={new Date()}
              autoComplete="off"
              value={userInput.enteredDate}
              onChange={onChangeHandler}
              required
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit"> Add Expense</button>
        </div>
      </form>
      <Table inputarr={inputarr} />
    </div>
  );
}

export default ExpenseForm;
