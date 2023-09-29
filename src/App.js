import ExpenseItem from './component/ExpenseItem'
import './App.css';


function App() {
  const expenses = [
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
    <div>
      <h1 className='header'>ExpenseItems</h1>

      {expenses.map((expense) => (

        <ExpenseItem date={expense.date}
          title={expense.title}
          amount={expense.amount}
          LocationofExpenditure={expense.LocationofExpenditure}
        />
      )
      )}
    </div>
  );
}

export default App;
