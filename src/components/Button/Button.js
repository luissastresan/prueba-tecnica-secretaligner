import React from 'react'

import {BiPlus} from 'react-icons/bi'
import { RiArrowDownSLine } from 'react-icons/ri'

import './Button.css'

const Button = ({ text, color, width, height, border, positionIcon, onClickHander} ) => {
    
    const style = {
        color: color,
        width: width,
        height: height,
        border: border
    }

    return (
        <button style={style} onClick={onClickHander}>
            {positionIcon === "left" ? <BiPlus /> : null}
            {text}
            {positionIcon === "right" ? <RiArrowDownSLine /> : null}
        </button>
    )
}

export default Button