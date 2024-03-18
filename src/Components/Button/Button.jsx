import React from 'react'
import "./Button.css"

function Button({name, icon, onClick, bg, bPad, color, bRad}) {
    return (
        <div className='Button' style={{
            background: bg,
            padding: bPad,
            borderRadius: bRad,
            color: color
        }} onClick={onClick}> 
            {icon}
            {name}
        </div>
    )
}

export default Button