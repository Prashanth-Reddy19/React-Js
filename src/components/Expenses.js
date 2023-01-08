import { useState } from 'react';
// import Card from './Card';

import './Expenses.css';
import ExpensesFilter from './NewExpense/ExpensesFilter';
import ExpensesList from './NewExpense/ExpensesList';



function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filetrChangeHandler = selectedYear => {
        setFilteredYear(selectedYear) 
    }

    const filteredExpnses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
      });

    return (
        <div className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filetrChangeHandler} />
           <ExpensesList items={filteredExpnses}/>
            
        </div>
    )
}

export default Expenses