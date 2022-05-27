import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import Cards from "./Cards/Cards";

const Main = ({state}) => {
    const [data, setData] = useState([]);

    const filterCards = (inp) => {
        const filteredData = state.filter((item)=> {
          if(item.name.toLowerCase().includes(inp.toLowerCase())) {
            return item
          }
        });
    
        setData(filteredData);
      }

    useEffect(()=> {
        console.log('in main');
        setData(state)
    },[])

    return <>
    <SearchBar filter={filterCards}/>
    <Cards state={data}/>
    </>
}

export default Main;