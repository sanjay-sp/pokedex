import React from "react";
import CardComponent from "./Card";
import './Cards.css'

const Cards = ({state}) => {

    return <div className="cards">
        {state.map((pokemon)=> {
            return <CardComponent data={pokemon}/>
        })}
    </div>
}

export default Cards;