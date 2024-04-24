import React from "react";
import "./PokeCard.css";

const PokeCard = ({ id, name }) => {
    return (
        <div className='card'>
            <div className='card_image'>
                <img src={
                    //For animated gifs -> `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`
                    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
                } alt={name} />
            </div>
            <div className='card_info'>
                <h2>{id}</h2>
                <h2>{name}</h2>
            </div>
        </div>
    );
};

export default PokeCard;