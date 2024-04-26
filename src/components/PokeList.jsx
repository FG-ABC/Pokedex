import React from "react";
import PokeCard from "./PokeCard";

const PokeList = ({ pokeData , detailViewActivate}) => {
    return (
        <div className='flex flex-wrap items-center justify-center'>
            {pokeData.map((data, index) => {
                return (
                    <PokeCard
                        key={index}
                        id = {data.id}
                        name={data.name}
                        detailViewActivate = {detailViewActivate}
                    />
                );
            })}
        </div>
    );
};

export default PokeList;
