import React from 'react'
import './Orb.css'
import { useWindowSize } from '../Utils/useWindowSize'

function Orb() {

    const {width, height} = useWindowSize()

    console.log(width, height)

    return (
        <div className='Orb'>
        
        </div>
    )
}

export default Orb
