import { useState } from 'react';
// import Card from './Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './NewExpense/ExpensesFilter';



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
            {filteredExpnses.map((expense) => (
                <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}/>

            ))}
            
        </div>
    )
}

export default Expenses