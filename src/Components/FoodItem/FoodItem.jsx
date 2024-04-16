import React from 'react'
import './FoodItem.css'
import Button from '../Button/Button';
import { plus } from '../Utils/Icons';

const FoodItem = ({name, price, count, img, onClick}) => {
    return (
        <div className='FoodItem'>
            <div className="image">
                <img src={img} alt="" />
            </div>
            <div className="description">
                <p>
                    Name : {name}
                </p>
                <p>
                    Price : {price}
                </p>
                {/* count : {count} <br /> */}
                {/* <button onClick={() => {count += 1; console.log(count)}}>inc {count} </button> */}
                {/* <input type="button" name={name} id={name} onClick={onClick} value='Add Item'/> */}
            </div>
            <div className="addButton">
                <Button 
                    name={'Add Item'}
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

export default FoodItem
