
import ExpenseDate from './ExpenseDate';
import './Expenseitem.css';

function ExpenseItem(props) {

    const clickHandler= () =>{
        console.log('Deleted');
    }
    

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date} />
           
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Delete Expense</button>
            
           
        
        </div>
    )
}

export default ExpenseItem