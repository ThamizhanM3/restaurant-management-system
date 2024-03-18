import React from 'react'
import Button from '../Button/Button'
import { plus } from '../Utils/Icons'
import "./CheckoutItem.css"

const CheckoutItem = ({name, price, count, img, onClick}) => {
    return (
        <div className='CheckoutItem'>
            <div className="image">
                <img src={img} alt="" />
            </div>
            <div className="description">
                <p>Name : {name} </p> <br />
                <p> Price : {price} </p><br />
                <Button 
                    name={'Remove Item'}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'rgba(252, 246, 249, 0.78)'}
                    color={'#f56692'}
                    onClick={onClick} 
                />
            </div>
        </div>
    )
}

export default CheckoutItem
