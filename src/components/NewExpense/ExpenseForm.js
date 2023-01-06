import React , { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = () => {
    const[enteredTitle,setEnteredTitle] =useState('');
    const[enterAmount,setEnterAmount]=useState('');
    const[enterDate,setEnterDate]=useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler=(event) => {
        setEnterAmount(event.target.value)
    }
    const dateChangeHandler=(event) => {
        setEnterDate(event.target.value)
    }
    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} />

                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />

                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2020-10-02' max='2023-01-10' onChange={dateChangeHandler} />

                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={() => console.log('new-expense__controls')}>Add Expense</button>

            </div>
        </form>
    )
}
export default ExpenseForm;