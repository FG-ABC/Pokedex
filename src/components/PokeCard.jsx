import React from "react";
import "./PokeCard.css";
import datalistbyid from "../datalistbyid";

import bug from "../assets/icons/bug.svg";
import dark from "../assets/icons/dark.svg";
import dragon from "../assets/icons/dragon.svg";
import electric from "../assets/icons/electric.svg";
import fairy from "../assets/icons/fairy.svg";
import fighting from "../assets/icons/fighting.svg";
import fire from "../assets/icons/fire.svg";
import flying from "../assets/icons/flying.svg";
import ghost from "../assets/icons/ghost.svg";
import grass from "../assets/icons/grass.svg";
import ground from "../assets/icons/ground.svg";
import ice from "../assets/icons/ice.svg";
import normal from "../assets/icons/normal.svg";
import poison from "../assets/icons/poison.svg";
import psychic from "../assets/icons/psychic.svg";
import rock from "../assets/icons/rock.svg";
import steel from "../assets/icons/steel.svg";
import water from "../assets/icons/water.svg";
import pokemon from "../assets/pokeball.svg";


const PokeCard = ({ id, name, detailViewActivate }) => {
    let types = [];
    let typesrc;
    const dataset = datalistbyid[id - 1];
    dataset.types.forEach((item) =>{
        types.push(item.type.name)
    });
    
    return (
        <div className='card' onClick={() => detailViewActivate(id)}>
            <div className='card_image'>
                <img src={
                    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
                } alt={name} />
            </div>
            <div className='card_info pt-3'>
                <span className='flex px-2 justify-between items-center'>
                    <div className="flex gap-1">
                    {types.map((type, index) => {
                        switch (type) {
                            case "bug":
                                typesrc = bug;
                                break;

                            case "dark":
                                typesrc = dark;
                                break;

                            case "dragon":
                                typesrc = dragon;
                                break;

                            case "electric":
                                typesrc = electric;
                                break;

                            case "fairy":
                                typesrc = fairy;
                                break;

                            case "fighting":
                                typesrc = fighting;
                                break;

                            case "fire":
                                typesrc = fire;
                                break;

                            case "flying":
                                typesrc = flying;
                                break;
                            
                            case "ghost":
                                typesrc = ghost;
                                break;

                            case "grass":
                                typesrc = grass;
                                break;

                            case "ground":
                                typesrc = ground;
                                break;

                            case "ice":
                                typesrc = ice;
                                break;

                            case "normal":
                                typesrc = normal;
                                break;

                            case "poison":
                                typesrc = poison;
                                break;

                            case "psychic":
                                typesrc = psychic;
                                break;

                            case "rock":
                                typesrc = rock;
                                break;

                            case "steel":
                                typesrc = steel;
                                break;

                            case "water":
                                typesrc = water;
                                break;
                        
                            default:
                                typesrc = pokemon;
                                break;
                        }
                        return (
                            <div className={`icon ${type}`}>
                                <img src={typesrc}/>
                            </div>
                        );
                    })}
                    </div>
                    <h2 className="text-sm flex ite">{
                        id <= 999?
                        (("00" + id).slice(-3)):
                        id
                    }</h2>
                </span>
                <h3 className="text-center">{name}</h3>
            </div>
        </div>
    );
};

export default PokeCard;