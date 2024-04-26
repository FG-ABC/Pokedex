import React from "react";
import "./PokeCard.css";

const PokeCard = ({ id, name, detailViewActivate }) => {

    return (
        <div className='card' onClick={() => detailViewActivate(id)}>
            <div className='card_image'>
                <img src={
                    //For animated gifs -> `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`
                    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
                } alt={name} />
            </div>
            <div className='card_info pt-3'>
                <h2 className="text-sm">{
                    id <= 999?
                    (("00" + id).slice(-3)):
                    id
                }</h2>
                <h3 className="">{name}</h3>
            </div>
        </div>
    );
};

export default PokeCard;