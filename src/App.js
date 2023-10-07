import Expenses from './component/Expenses/Expense'
import React from "react";

const App = () => {
  const initialexpenses = [
    {
      id: 'e1',
      date: new Date(2023, 8, 12),
      title: 'Car Insurance',
      LocationofExpenditure: 'Mumbai',
      amount: 270
    },
    {
      id: 'e2',
      date: new Date(2023, 3, 24),
      title: 'Mobile Recharge',
      LocationofExpenditure: 'Goa',
      amount: 90
    },
    {
      id: 'e3',
      date: new Date(2023, 0, 6),
      title: 'Tv Bill',
      LocationofExpenditure: 'Village',
      amount: 98
    },
    {
      id: 'e4',
      date: new Date(2023, 3, 4),
      title: 'School Fees',
      LocationofExpenditure: 'Punjab',
      amount: 1200
    },
    {
      id: 'e5',
      date: new Date(2023, 8, 5),
      title: 'New Phone',
      LocationofExpenditure: 'Dubai',
      amount: 3500
    },
    {
      id: 'e6',
      date: new Date(2023, 8, 9),
      title: 'Driver',
      LocationofExpenditure: 'Hydrabad',
      amount: 1000
    },
    {
      id: 'e7',
      date: new Date(2023, 5, 10),
      title: 'Milk',
      LocationofExpenditure: 'Chenai',
      amount: 20
    },
    {
      id: 'e8',
      date: new Date(2023, 6, 13),
      title: 'House Rent',
      LocationofExpenditure: 'Pune',
      amount: 520
    },
    {
      id: 'e9',
      date: new Date(2023, 8, 25),
      title: 'Bike Insurance',
      LocationofExpenditure: 'Delhi',
      amount: 252
    }
  ];

  return (
    <div >
      <h1 >let's get started</h1>
      <Expenses items={initialexpenses}
      />
    </div>
  );
}

export default App;
