import React, { useEffect, useState } from "react";
import CardComponent from "./Cards/Card";
import SearchBar from "./SearchBar/SearchBar";
import Cards from "./Cards/Cards";
import './Main.css'
import Pagination from "./Pagination";

const Main = ({state, paginate, postsPerPage, perPageHandler}) => {
    // const [data, setData] = useState([]);
    // const [firstRender, setFirstRender] = useState(true);

    // const filterCards = (inp) => {
    //     const filteredData = state.filter((item)=> {
    //       if(item.name.toLowerCase().includes(inp.toLowerCase())) {
    //         return item
    //       }
    //     });
    
    //     setData(filteredData);
    //   }

    // useEffect(()=> {
    //     console.log('in main');
    //     console.log(firstRender);
    //     if (firstRender) {
    //         setData(state);
    //         setFirstRender(false);
    //     }
    //     // setData(state);
    //     // console.log(data);
    //     console.log('data in effect',data);
    // },[firstRender])

    // return <>
    // { <div>
    // <SearchBar filter={filterCards}/>
    // <Cards state={state}/>
    // </div>}
    // </>

    const [name,setName] = useState('')

    const filterOnChange = (e) => {
        e.preventDefault();
        const {value} = e.target
        setName(value)
        // filter(value)
    }

    useEffect(()=>{
        console.log(name);
    },[name])

    return <div>
        <input type="textbox" className="searchbar" placeholder="Enter Pokemon Name..." onChange={filterOnChange}/>
        <div className="filterColumn">
        <select onChange={(e)=>perPageHandler(e.target.value)}>
        <option name="10"> 10</option>
        <option name="20">20</option>
        <option name="50">50</option>
      </select>
        <Pagination postsPerPage={postsPerPage} totalPosts={100} paginate={paginate}/>
        </div>
        <div className="cards">
        {state.filter((item)=> {
          if(item.name.toLowerCase().includes(name.toLowerCase())) {
            return item
          }
        }).map((pokemon)=> {
            return <CardComponent data={pokemon}/>
        })}
        </div>
    </div>
}

export default Main;