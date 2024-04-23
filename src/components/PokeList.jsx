import React from "react";
import PokeCard from "./PokeCard";

const PokeList = ({ pokeData }) => {
    return (
        <div className='flex flex-wrap items-center justify-center'>
            {pokeData.map((data, index) => {
                console.log("Hello");
                // const response = await axios.get(data.url);
                // const imgURL = (response.data.sprites.front_default);
                return (
                    <PokeCard
                        key={index}
                        // image={imgURL}
                        id = {data.Myid}
                        name={data.name}
                    />
                );
            })}
        </div>
    );
};

export default PokeList;
