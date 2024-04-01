import React, {useState} from 'react'
import Navigation from '../Navigation/Navigation';
import IncomeItem from '../IncomeItem/IncomeItem';
import { expenseData, history, totalExpense } from '../Utils/transactionData';
import DatePicker from 'react-datepicker';
import Button from '../Button/Button';
import { plus } from '../Utils/Icons';
import "./Expenses.css"

function Form() {
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
        type: 'expense'
    })

    function addExpense(inputState){
        expenseData.push(inputState)
        history.unshift(inputState)
        history.pop()
        console.log(inputState)
    }
    const { title, amount, date, category,description } = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        addExpense(inputState)
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
        totalExpense.push(totalExpense[totalExpense.length - 1] + parseInt(amount))
    }

    return (
        <div className='Form' onSubmit={handleSubmit}>
            <div className="input-control">
                <input 
                    type="text" 
                    value={title}
                    name={'title'} 
                    placeholder="Expense Title"
                    onChange={handleInput('title')}
                />
            </div>
            <div className="input-control">
                <input value={amount}  
                    type="text" 
                    name={'amount'} 
                    placeholder={'Expense Amount'}
                    onChange={handleInput('amount')} 
                />
            </div>
            <div className="input-control">
                <DatePicker 
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                        setInputState({...inputState, date: date})
                    }}
                />
            </div>
            <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value="" disabled >Select Option</option>
                    <option value="education">Education</option>
                    <option value="groceries">Groceries</option>
                    <option value="health">Health</option>
                    <option value="subscriptions">Subscriptions</option> 
                    <option value="takeaways">Takeaways</option>
                    <option value="clothing">Clothing</option>  
                    <option value="travelling">Travelling</option>  
                    <option value="other">Other</option>  
                </select>
            </div>
            <div className="input-control">
                <textarea name="description" value={description} placeholder='Add A Reference' id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
            </div>
            <div className="submit-btn">
                <Button 
                    name={'Add Expense'}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent'}
                    color={'#fff'}
                    onClick={handleSubmit} 
                />
            </div>
        </div>
    )
}


function Expenses() {
    return (
        <div className='Expenses'>
            <main>
                <Navigation />
                <div className="content">
                    <h1>Expenses</h1>
                    <h2 className="total-income">Total Expense: <span>{totalExpense[totalExpense.length - 1]}</span></h2>
                    <div className="income-content">
                        <div className="form-container">
                            <Form />
                        </div>
                        <div className="incomes">
                            {expenseData.map((income) => {
                                const {_id, title, amount, date, category, description, type} = income;
                                return <IncomeItem
                                    key={_id}
                                    id={_id} 
                                    title={title} 
                                    description={description} 
                                    amount={amount} 
                                    date={date} 
                                    type={type}
                                    category={category} 
                                    indicatorColor="var(--color-green)" 
                                />
                            })}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Expenses
