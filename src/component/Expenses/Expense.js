import './expense.css';
import React from "react";
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'

const Expense = ({ items }) => {
    return <Card className='expense'>
        {items.map((expense) => (
            <ExpenseItem key={expense.id}
            date={expense.date}
                title={expense.title}
                amount={expense.amount}
                LocationofExpenditure={expense.LocationofExpenditure}
            />))}
    </Card>
}
export default Expense;