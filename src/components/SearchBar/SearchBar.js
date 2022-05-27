import React, { useEffect, useState } from "react";
import './SearchBar.css'

const SearchBar = ({filter}) => {

    const [name,setName] = useState('')

    const filterOnChange = (e) => {
        e.preventDefault();
        const {value} = e.target
        setName(value)
        filter(value)
    }

    useEffect(()=>{
        console.log('in search bar');
    },[name])

    return <div>
        <input type="textbox" className="searchbar" placeholder="Enter Pokemon Name..." onChange={filterOnChange}/>
    </div>
}

export default SearchBar;