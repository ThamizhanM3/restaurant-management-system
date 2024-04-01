import React from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

const Form = () => {
    return (
        <div className='Form' onSubmit={() => {return}}>
            <div className="input-control">
                <input type="text" name="title" id="" placeholder='Salary Title' />
            </div>
            <div className="input-control">
                <input type="text" name="amount" id="" placeholder='Salary Amount' />
            </div>
            <div className="input-control">
                <DatePicker id='date' placeholderText='Enter a Date' dateFormat="dd/MM/yyyy" />
            </div>
            <div className="selects input-control">
                <select name="category" id="category">
                    <option value="" disabled>Select Option</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Investments</option>
                    <option value="stocks">Stocks</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="bank">Bank</option>
                    <option value="youtube">Youtube</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="submit-btn">
                <button type='submit'>Add Income</button>
            </div>
        </div>
    )
}

export default Form
