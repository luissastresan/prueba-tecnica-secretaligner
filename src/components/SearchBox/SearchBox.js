import React, { useState } from 'react'

import { FaSearch } from 'react-icons/fa'

import './SearchBox.css'

const SearchBox = ({ changeValue }) => {
    const [ value, setValue ] = useState("")

    const onchangeValue = (e) => {
        const { value } = e.target
        setValue(value)
        changeValue(value)
    }

    return (
        <div className="searchContainer">
            <FaSearch />
            <input className="searchBox" type="search" onChange={onchangeValue} placeholder="Buscar..." value={value}/>
        </div>
    )
}

export default SearchBox