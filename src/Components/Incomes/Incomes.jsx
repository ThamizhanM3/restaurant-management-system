import React, {useState} from 'react'
import Navigation from '../Navigation/Navigation'
import './Incomes.css'
// import DatePicker from 'react-datepicker' 
import Button from '../Button/Button'
import { plus } from '../Utils/Icons'
// import IncomeItem from '../IncomeItem/IncomeItem'
// import { history, incomeData, totalIncome } from '../Utils/transactionData'
import { startersMenu } from '../Utils/foodItems'

function Form() {
    const [inputState, setInputState] = useState({
        name: '',
        price: '',
        category: '',
        description: '',
    })

    function addIncome(inputState){
        // incomeData.push(inputState)
        // history.unshift(inputState)
        // history.pop()
        // console.log(history)
        startersMenu.push(inputState)
    }

    const { name, price, date, category, description } = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        
        addIncome(inputState)
        setInputState({
            name: '',
            price: '',
            category: '',
            description: '',
        })
        // totalIncome.push(totalIncome[totalIncome.length - 1] + parseInt(amount))
        console.log(startersMenu)
    }

    return (
        <div className='Form' onSubmit={handleSubmit}>
            <div className="input-control">
                <input 
                    type="text" 
                    value={name}
                    name={'name'} 
                    placeholder="Product Name"
                    onChange={handleInput('name')}
                />
            </div>
            <div className="input-control">
                <input value={price}  
                    type="text" 
                    name={'price'} 
                    placeholder={'Product Price'}
                    onChange={handleInput('price')} 
                />
            </div>
            {/* <div className="input-control">
                <DatePicker 
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    onChange={(date) => {
                        setInputState({...inputState, date: date})
                    }}
                    dateFormat="dd/MM/yyyy"
                />
            </div> */}
            <div className="selects input-control">
                <select name="category" id="category" required>
                    <option value="" disabled>Select Option</option>
                    <option value="starters">Starters</option>
                    <option value="maincourse">Main Course</option>
                    <option value="drinks">Drinks</option>
                    <option value="desserts">Desserts</option>
                </select>
            </div>
            <div className="input-control">
                <textarea name="description" value={description} placeholder='Add A Reference' id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
            </div>
            <div className="submit-btn">
                <Button 
                    name={'Add Income'}
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

function Incomes() {
    return (
        <div className='Incomes'>
            <main>
                <Navigation />
                <div className="content">
                    <h1>Add Food</h1>
                    {/* <h2 className="total-income">Total Income: <span> {totalIncome[totalIncome.length - 1]} </span></h2> */}
                    <div className="income-content">
                        <div className="form-container">
                            <Form />
                        </div>
                        {/* <div className="incomes">
                            {incomeData.map((income) => {
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
                        </div> */}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Incomes 
