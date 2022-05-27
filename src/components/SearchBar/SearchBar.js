import React from "react";
import './SearchBar.css'

const SearchBar = ({filter}) => {

    const filterOnChange = (e) => {
        filter(e.target.value)
    }

    return <div>
        <input type="textbox" className="searchbar" placeholder="Enter Search Term..." onChange={filterOnChange}/>
    </div>
}

export default SearchBar;