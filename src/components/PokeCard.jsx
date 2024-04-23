import React from "react";
import "./PokeCard.css";

const PokeCard = ({ id, name }) => {
    return (
        <div className='card'>
            {/* <div className='card_image'>
                <img src={image} alt={name} />
            </div> */}
            <div className='card_info'>
                <h2>{id}</h2>
                <h2>{name}</h2>
            </div>
        </div>
    );
};

export default PokeCard;