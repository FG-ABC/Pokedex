import React from "react";
import { Line } from 'rc-progress';
import "./Modal.css";
import FindMyWeakness from "../findweakness.js";
import next from "../assets/next.svg";
import previous from "../assets/previous.svg";

const Modal = ({ toggleView, prevPokemon, nextPokemon, detailData }) => {
  var myTypes = [];
  detailData.types.map((item) => {
    myTypes.push(item.type.name);
  });
  const myWeaknesses = FindMyWeakness(myTypes);

  return (
    <div className="modal">
      {/* Overlay background */}
      <div onClick={toggleView} className="overlay"></div>

      {/* Main modal */}
      <div className="modal-content text-center flex flex-col items-center justify-center w-10/12">
        {/* Navbar */}
        <nav className="w-full mx-1 flex justify-between">
          <div className="" onClick={prevPokemon}>
            <img src={previous} width={30}></img>
          </div>
          <h2 className=" text-2xl ">
            {" "}
            {detailData.id <= 999
              ? ("00" + detailData.id).slice(-3)
              : detailData.id}{" "}
          </h2>
          <div className="" onClick={nextPokemon}>
            <img src={next} width={30}></img>
          </div>
        </nav>
        
        {/* Main modal Content */}
        <div className="w-full text-left flex flex-col md:flex-row items-center md:items-start mt-4 ">
          {/* Image and name */}
          <div className="modal_image flex flex-col items-center md:px-2 md:order-2 md:w-1/3 md:self-center">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${detailData.id}.png`}
              alt={detailData.name}
            />
            <h2 className="text-2xl text-center">{detailData.name}</h2>
          </div>
          
          {/* H, W, and Stats */}
          <div className="flex flex-col w-full my-3 md:order-1 md:w-1/3 md:pr-5 lg:pr-8">
            <h3 className="text-xs md:text-sm lg:text-lg text-center">{`Weight: ${detailData.weight}`}</h3>
            <h3 className="text-xs md:text-sm lg:text-lg text-center">{`Height: ${detailData.height}`}</h3>
            <h3 className="text-xs md:text-sm lg:text-lg text-center mt-3 mb-1">Base Stats:</h3>
            <div className="flex flex-col gap-y-1 md:gap-y-5 lg:gap-y-7">
              {detailData.stats.map((item) => {
                let statName;
                let typesrc;
                switch (item.stat.name) {
                  case "hp":
                    statName = "hp "
                    break;

                  case "attack":
                    statName = "atk"
                    break;
                
                  case "defense":
                    statName = "def"
                    break;  

                  case "special-attack":
                    statName = "sp-atk"
                    break;

                  case "special-defense":
                    statName = "sp-def"
                    break;

                  case "speed":
                    statName = "spd"
                    break;
                    
                  default:
                    statName = item.stat.name
                    break;
                }
                switch (myTypes[0]) {
                  case "bug":
                      typesrc = "#92BC2C";
                      break;

                  case "dark":
                      typesrc = "#595761";
                      break;

                  case "dragon":
                      typesrc = "#0C69C8";
                      break;

                  case "electric":
                      typesrc = "#F2D94E";
                      break;

                  case "fairy":
                      typesrc = "#EE90E6";
                      break;

                  case "fighting":
                      typesrc = "#D3425F";
                      break;

                  case "fire":
                      typesrc = "#FBA54C";
                      break;

                  case "flying":
                      typesrc = "#A1BBEC";
                      break;
                  
                  case "ghost":
                      typesrc = "#5F6DBC";
                      break;

                  case "grass":
                      typesrc = "#5FBD58";
                      break;

                  case "ground":
                      typesrc = "#DA7C4D";
                      break;

                  case "ice":
                      typesrc = "#75D0C1";
                      break;

                  case "normal":
                      typesrc = "#A0A29F";
                      break;

                  case "poison":
                      typesrc = "#B763CF";
                      break;

                  case "psychic":
                      typesrc = "#FA8581";
                      break;

                  case "rock":
                      typesrc = "#C9BB8A";
                      break;

                  case "steel":
                      typesrc = "#5695A3";
                      break;

                  case "water":
                      typesrc = "#539DDF";
                      break;
              
                  default:
                      typesrc = "#FFFFFF";
                      break;
              }
                return (
                  <div className="flex justify-between h-6">
                    <h3 className="text-xs w-4/12 md:text-sm lg:text-lg text-center">{statName}</h3>
                    <div className="h-full w-8/12 grid">
                      <Line className={`rounded-xl h-full w-full col-start-1 row-start-1`} percent={item.base_stat} trailWidth={40} strokeColor={typesrc} />
                      <h3 className="col-start-1 row-start-1 w-full text-center">{item.base_stat}</h3>
                    </div>
                    
                  </div>
                );
              })}
            </div>
          </div>
        
          {/* Abilities, Types, and Weaknesses */}
          <div className="flex flex-col w-full h-full justify-between md:order-3 md:w-1/3 md:pl-5">
            <div className="flex md:flex-col">
              {/* Abilities */}
              <div className="flex-col flex w-1/2 md:w-full">
                <h3 className="text-xs md:text-sm lg:text-lg mt-3 text-center mb-1">Abilities</h3>
                {detailData.abilities.map((item) => {
                  if (!item.is_hidden) {
                    return (
                      <h3 className="text-xs md:text-sm lg:text-lg text-center">{item.ability.name}</h3>
                    );
                  }
                })}
              </div>
              {/* Types */}
              <div className="flex-col flex w-1/2 md:w-full">
                <h3 className="text-xs md:text-sm lg:text-lg mt-3 text-center mb-1">Types</h3>
                <div className="flex flex-col gap-y-1">
                  {detailData.types.map((item) => {
                    return (
                      <h3 className={`text-xs md:text-sm lg:text-lg text-center w-full rounded-xl ${item.type.name}`}>{item.type.name}</h3>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* Weaknesses */}
            <div className="flex flex-col ">
            <h3 className="text-xs md:text-sm lg:text-lg mt-3 mb-1 text-center">Weaknesses</h3>
            <div className="flex flex-wrap md:flex-col gap-y-1">
              {myWeaknesses.map((item) => {
                return <h3 className={`text-xs md:text-sm lg:text-lg text-center w-1/2 rounded-xl md:w-full ${item}`}>{item}</h3>;
              })}
            </div>
          </div>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default Modal;
