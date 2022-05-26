import React from "react";
import Card from "./Card";

const Cards = ({state}) => {

    var filterState = state
    return <div>
        {filterState.map((pokemon)=> {
            return <Card data={pokemon}/>
        })}
    </div>
}

export default Cards;