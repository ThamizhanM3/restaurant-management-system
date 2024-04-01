import React from 'react'
import "./Bill.css"
import { billing } from '../Utils/billingDetails'
import { foodOrdered, paying } from '../FoodMenu/FoodMenu'

const Bill = () => {
    return (
        <div className='Bill'>
            <div className="head-above">
                <h3>Your Order Number</h3><h2>1568</h2>
                <h1>My Restaurant</h1>
            </div>
            <div className="content-below">
                <h5>Service Partner: User Name</h5>
            </div>
            <div className="bill-content">
                <div className="foodItem">
                    <div className="foodNameTitle"> <h3> Food </h3> </div>
                    <div className="foodPriceTitle"> <h3> Price </h3> </div>
                </div>
                {foodOrdered.map((food) => {
                    return(
                        <div className='foodItem'>
                            <div className="foodName"> {food.name} </div>
                            <div className="foodPrice"> {food.price} </div>
                        </div>
                    )
                })}
                <div className="foodItem">
                    <div className="foodTotalTitle"> <h3> Total </h3> </div>
                    <div className="foodTotalPrice"> <h4> {paying/2} </h4> </div>
                </div>
            </div>
        </div>
    )
}

export default Bill
