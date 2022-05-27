import React from "react";
import CardComponent from "./Card";
import './Cards.css'

const Cards = ({state}) => {

    var filterState = state
    return <div className="cards">
        {filterState.map((pokemon)=> {
            return <CardComponent data={pokemon}/>
        })}
    </div>
}

export default Cards;