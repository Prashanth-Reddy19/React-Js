import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './Expenseitem.css';

function ExpenseItem(props) {
    const [amount, setAmount] = useState(props.amount)



    const clickHandler = () => {
        setAmount('100')
        console.log(setAmount)

    }


    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date} />

            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
            <button onClick={clickHandler}>Change Expenses</button>



        </div>
    )
}

export default ExpenseItem