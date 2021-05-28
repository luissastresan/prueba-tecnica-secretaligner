import React from 'react'

import { FiUser } from 'react-icons/fi'
import { RiArrowDownSLine } from 'react-icons/ri'

import './Header.css'

const Header = () =>{
    return (
        <header className="header">
            <div className="user-icon">
                <FiUser />
            </div>
            <div className="user-name">
                <span>Dr. Pablo Kenyalan</span>
                <span>
                    <RiArrowDownSLine />
                </span>
            </div>
        </header>
    )
}

export default Header