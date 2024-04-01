import React, { useState, useEffect } from 'react'
import "./FoodMenu.css"
import Avatar from '../../Images/Logog04.png'
import { Link } from 'react-router-dom'
import { foodNav } from '../Utils/menuItems'
import { cart, plus, signout } from '../Utils/Icons'
import Button from '../Button/Button'
import { billing } from '../Utils/billingDetails'
import FoodItem from '../FoodItem/FoodItem'
import CheckoutItem from '../CheckoutItem/CheckoutItem'
import Bill from '../Bill/Bill'
import { history, incomeData } from '../Utils/transactionData'
// import { maincourseMenu } from '../Utils/foodItems'

let TotalAmount = 0
export let foodOrdered = []
export let paying = 0
let customerDetails = {customerName: '', mobile: '', membership: '', description: ''}

let payable = 0
let i

function findTotal(){
    payable = 0
    for(i of foodOrdered){
        payable += i.price
    }
    paying = payable*2
    return payable
}

function displayNone(){
    document.getElementById("customer-details").style.display = "none"
    document.getElementById("starters").style.display = "none"
    document.getElementById("main-course").style.display = "none"
    document.getElementById("drinks").style.display = "none"
    document.getElementById("desserts").style.display = "none"
    document.getElementById("checkout").style.display = "none"
    document.getElementById("billing").style.display = "none"
}

export function displayCustomer(){
    console.log("Customer Details")
    displayNone()
    document.getElementById("customer-details").style.display = "flex"
}

export function displayStarters(){
    console.log("Display Starters")
    displayNone()
    document.getElementById("starters").style.display = "flex"
    if(foodOrdered.length>0){
        document.getElementById('foodCart').style.display = 'flex'
        document.getElementById("content").style.width = "65vw"
    }
}

export function displauMainCourse(){
    console.log("Display Main Course")
    displayNone()
    document.getElementById("main-course").style.display = "flex"
}

export function displayDrinks(){
    console.log("Display Drinks")
    displayNone()
    document.getElementById("drinks").style.display = "flex"
}

export function displayDesserts(){
    console.log("Display Desserts")
    displayNone()
    document.getElementById("desserts").style.display = "flex"
}

export function displayCheckout(){
    console.log("Display Checkout")
    displayNone()
    document.getElementById("checkout").style.display = "flex"
    document.getElementById('foodCart').style.display = 'none'; 
    document.getElementById('content').style.width = '78vw';
    if(foodOrdered.length==0){
        document.getElementById('bill').style.display = 'none'
        console.log("none")
        // document.getElementById("content").style.width = "65vw"
    }
    else{
        document.getElementById('bill').style.display = 'flex'

    }
}

export function displayBilling(){
    console.log("Display Billing")
    displayNone()
    document.getElementById("billing").style.display = "flex"
    document.getElementById('foodCart').style.display = 'none'; 
    document.getElementById('content').style.width = '78vw';
}

function handleSignOut(){
    window.location.href = "login"
}

const FoodMenu = () => {
    const [inputState, setInputState] = useState({
        customerName: '',
        amount: '',
        membership: '',
        mobile: '',
        description: '',
    })

    const removeItem = food => {
        foodOrdered.splice(foodOrdered.indexOf(food), 1)
        paying -= food.price
        console.log(paying)
    }

    function addIncome(inputState){
        billing.push(inputState)
        console.log(billing, "Billing")
    }

    const { customerName, amount, mobile, membership, description } = inputState;

    const handleInput = name => e => {
        customerDetails[name] =  e.target.value
        console.log(customerDetails)
        setInputState({...inputState, [name]: e.target.value})
    }

    const handleSubmit = e => {
        // e.preventDefault()
        
        // addIncome(inputState)
        console.log(billing)
        setInputState({
            customerName: '',
            amount: '',
            membership: '',
            mobile: '',
            description: '',
            orders: []
        })
        TotalAmount = 0
    }

    function addTransactionIncome(){
        incomeData.push({
            id: 'Employee',
            title: 'Employee ' + ' ' + billing[billing.length -1].customerName,
            description: 'Sales Income',
            type: 'income',
            amount: billing[billing.length -1].amount,
            category: 'salary',
            indicatorColor: "var(--color-green)"
        })

        history.push({
            id: 'Employee',
            title: 'Employee ' + ' ' + billing[billing.length -1].customerName,
            amount: billing[billing.length -1].amount,
            type: 'income'
        })
        console.log("history" + history)
    }

    function handleBills(){
        console.log(foodOrdered, "Billed")
        handleDelete()
    }

    function handleDelete(){
        foodOrdered = []
        customerDetails = {customerName: '', mobile: '', membership: '', description: ''}
        paying = 0
        addTransactionIncome()
        billing.push({
            customerName: '',
            orders: []
        })
        handleSubmit()
    }

    const [starters, setStarters] = useState([]);

    useEffect(() => {
        fetchStarters();
    }, []);

    const fetchStarters = async () => {
        try {
            const response = await fetch('http://localhost:3001/getStarters');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setStarters(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const [maincourse, setMaincourse] = useState([]);

    useEffect(() => {
        fetchMaincourse();
    }, []);

    const fetchMaincourse = async () => {
        try {
            const response = await fetch('http://localhost:3001/getMaincourse');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setMaincourse(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };



    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        fetchDrinks();
    }, []);

    const fetchDrinks = async () => {
        try {
            const response = await fetch('http://localhost:3001/getDrinks');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setDrinks(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };




    const [desserts, setDesserts] = useState([]);

    useEffect(() => {
        fetchDesserts();
    }, []);

    const fetchDesserts = async () => {
        try {
            const response = await fetch('http://localhost:3001/getDesserts');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setDesserts(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    
    return (
        <div className='FoodMenu'>
            <div className="navigation">
                <div className="user-con">
                    <img src={Avatar} alt="" /> 
                    <div className="text">
                        <h2>M3's TMZ</h2>
                        {/* <p>TMZ</p> */}
                    </div>
                </div>
                <ul className="menu-items">
                    {foodNav.map((item) => {
                        return <Link onClick={item.link} ><li
                        key={item.id} 
                        >
                            {item.icon}
                            <span> {item.title} </span>
                        </li></Link>
                    })}
                </ul>
                <div className="bottom-nav">
                    <li onClick={handleSignOut} style={{cursor: 'pointer'}}>
                        {signout} Sign Out
                    </li>
                </div>
            </div>
            <div className="content" id='content' onSubmit={handleSubmit}>
                <div className="customer-details" id='customer-details' style={{display: 'flex'}}>
                    <h1>Customer Details</h1>
                    <div className='Form' onSubmit={handleSubmit}>
                        <div className="input-control">
                            <input 
                                type="text" 
                                value={customerName}
                                name={'customerName'} 
                                placeholder="Customer Name"
                                onChange={handleInput('customerName')}
                            />
                        </div>
                        <div className="input-control">
                            <input value={mobile}  
                                type="text" 
                                name={'mobile'} 
                                placeholder={'Mobile Number'}
                                onChange={handleInput('mobile')} 
                                required
                            />
                        </div>
                        <div className="selects input-control">
                            <select required value={membership} name="membership" id="membership" onChange={handleInput('membership')}>
                                <option value=""  disabled >Membership Status</option>
                                <option value="member">Member</option>
                                <option value="newCustomer">Not a Member</option>
                            </select>
                        </div>
                        <div className="input-control">
                            <textarea name="description" value={description} placeholder='Add A Reference' id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
                        </div>
                    </div>
                </div>
                <div className="starters" id='starters' style={{display: 'none'}}>
                    <h1>Starters</h1>
                    <div className="foods">
                        {starters.map((food) => {
                            return <FoodItem 
                                name = {food.name}
                                price={food.price}
                                img={food.img}
                                onClick={() => {paying = 0; document.getElementById('foodCart').style = 'display:flex'; document.getElementById('content').style = 'width:65vw'; TotalAmount += food.price; foodOrdered.push(food); setInputState({...inputState, amount: TotalAmount, orders: foodOrdered}); console.log("foodOrdered", foodOrdered); }}
                            />
                        })}
                    </div>
                </div>
                <div className="main-course" id='main-course' style={{display: 'none'}}>
                    <h1>Burgers</h1>
                    <div className="foods">
                        {maincourse.map((food) => {
                            return <FoodItem 
                                name = {food.name}
                                price={food.price}
                                img={food.img}
                                onClick={() => {paying = 0; document.getElementById('foodCart').style = 'display:flex'; document.getElementById('content').style = 'width:65vw'; TotalAmount += food.price; foodOrdered.push(food); setInputState({...inputState, amount: TotalAmount, orders: foodOrdered}); console.log("foodOrdered", foodOrdered);}}
                            />
                        })}
                    </div>
                </div>
                <div className="drinks" id='drinks' style={{display: 'none'}}>
                    <h1>Drinks</h1>
                    <div className="foods">
                        {drinks.map((food) => {
                            return <FoodItem 
                                name = {food.name}
                                price={food.price}
                                img={food.img}
                                onClick={() => {paying = 0; document.getElementById('foodCart').style = 'display:flex'; document.getElementById('content').style = 'width:65vw'; TotalAmount += food.price; foodOrdered.push(food); setInputState({...inputState, amount: TotalAmount, orders: foodOrdered}); console.log("foodOrdered", foodOrdered);}}
                            />
                        })}
                    </div>
                </div>
                <div className="desserts" id='desserts' style={{display: 'none'}}>
                    <h1>Desserts</h1>
                    <div className="foods">
                        {desserts.map((food) => {
                            return <FoodItem 
                                name = {food.name}
                                price={food.price}
                                img={food.img}
                                onClick={() => {paying = 0; document.getElementById('foodCart').style = 'display:flex'; document.getElementById('content').style = 'width:65vw'; TotalAmount += food.price; foodOrdered.push(food); setInputState({...inputState, amount: TotalAmount, orders: foodOrdered}); console.log("foodOrdered", foodOrdered);}}
                            />
                        })}
                    </div>
                </div>
                <div className="checkout" id='checkout' style={{display: 'none'}}>
                    <h1>Checkout</h1>
                    <div className="submit-btn">
                        <div className="bill-customer">
                            <span>Customer Name: {customerDetails.customerName}</span> <br /> 
                            <span>Customer Mobile: {customerDetails.mobile}</span> <br />
                            <span>Membership: {customerDetails.membership}</span> <br />
                            <span>Customer Reference: {customerDetails.description}</span> <br />
                            <span>Total Price: {findTotal()}</span> <br />
                        </div>
                        <div className="bill" id='bill'>
                        {foodOrdered.map((food) => {
                            console.log(billing)
                                return(
                                    <>
                                        <CheckoutItem 
                                            name = {food.name}
                                            price={food.price}
                                            img={food.img}
                                            onClick={ () => {console.log(); TotalAmount -= food.price; paying -= food.price*2; foodOrdered.splice(foodOrdered.indexOf(food), 1); setInputState({...inputState, amount: TotalAmount, orders: foodOrdered});findTotal() }}
                                        />
                                    </>
                                )
                            })}
                        </div>
                        
                        
                        {/* <Button 
                            name={'Show Orders'}
                            icon={plus}
                            bPad={'.8rem 1.6rem'}
                            bRad={'30px'}
                            bg={'var(--color-accent'}
                            color={'#fff'}
                            onClick={handleSubmit} 
                        /> */}
                        <Button 
                            name={'Delete All Orders'}
                            // icon={plus}
                            bPad={'.8rem 1.6rem'}
                            bRad={'30px'}
                            bg={'var(--color-accent'}
                            color={'#fff'}
                            onClick={handleDelete} 
                        />
                    </div>
                </div>
                <div className="billing" id='billing' style={{display: 'none'}}>
                    <h1>Billing</h1>
                    <Bill />
                    <Button 
                            name={'Generate Bill'}
                            // icon={plus}
                            bPad={'.8rem 1.6rem'}
                            bRad={'30px'}
                            bg={'var(--color-accent'}
                            color={'#fff'}
                            onClick={handleBills} 
                        />
                </div>
            </div>
            <div className="foodCart" id='foodCart'>
            <h1>Cart {foodOrdered.length} </h1>
            <p> {foodOrdered.map((food) => {
                paying += food.price
                console.log(paying, food.price)
                return(
                    <li> {food.name}  {food.price} </li>
                )
            })} </p>
            <p> Total:  {findTotal()} </p>
            <Button 
                name={'Go to Cart'}
                icon={cart}
                bPad={'.8rem 1.6rem'}
                bRad={'30px'}
                bg={'var(--color-accent'}
                color={'#fff'}
                onClick={displayCheckout} 
            />
            </div>
        </div>
    )
}

export default FoodMenu