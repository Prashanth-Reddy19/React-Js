import { useState } from 'react';
// import Card from './Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './NewExpense/ExpensesFilter';



function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState(2020)

    const filetrChangeHandler = selectedYear => {
        setFilteredYear(selectedYear) 
    }
    return (
        <div className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filetrChangeHandler} />
            {props.items.map((expense) => (
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