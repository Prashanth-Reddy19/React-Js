import React from 'react';
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  const addExpenseHandler=expense =>{
    console.log('In App.js')
    console.log(expense)
  }
  return (
    <div>
      <h2>Expesne Form</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
    </div>
  )
}
  

export default App 