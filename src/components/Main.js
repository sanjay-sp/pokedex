import React, { useEffect, useState } from "react";
import CardComponent from "./Cards/Card";
import SearchBar from "./SearchBar/SearchBar";
import Cards from "./Cards/Cards";
import './Main.css'
import Pagination from "./Pagination";

const Main = ({currState, data, state, paginate, postsPerPage, perPageHandler, filterAllState, filterByType}) => {

    const [name,setName] = useState('');

    const filterOnChange = (e) => {
        e.preventDefault();
        filterAllState();
        const {value} = e.target
        setName(value)
        // filter(value)
    }

    const getType = () => {
        const values = [];
        state.map((item)=>{
            item.types.map((data)=>{
                values.push(data.type.name.toUpperCase());
            })
        })
        return [...new Set(values)]
    }

    return <div>
        <input type="textbox" className="searchbar" placeholder="Enter Pokemon Name..." onChange={filterOnChange}/>
        {name=="" ? <div>
        <div className="filterColumn">
            <select onChange={(e)=>filterByType(e.target.value)}>
            <option name="All">All</option>
            {getType().map((item)=> {
                return <option name={item}>{item}</option>
            })}
          </select>
            <select onChange={(e)=>perPageHandler(e.target.value)}>
            <option name="100" value="100">ALL</option>
            <option name="10"> 10</option>
            <option name="20">20</option>
            <option name="50">50</option>
          </select>
            </div>
          <div className="page-numbers">
            <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate}/>
          </div>
        </div>
        : <div></div> }
        <div className="cards">
        {currState.filter((item)=> {
            if (item.name.toLowerCase().includes(name.toLowerCase())) {
                return item
            }
            else if(name==  "") {
                filterAllState("empty")
                return item;
          }
        }).map((pokemon)=> {
            return <CardComponent data={pokemon}/>
        })}
        </div>
    </div>
}

export default Main;