import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './Expenseitem.css';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.amount)



    const clickHandler = () => {
        setTitle('$100')
        console.log(setTitle)

    }


    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date} />

            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Expenses</button>



        </div>
    )
}

export default ExpenseItem