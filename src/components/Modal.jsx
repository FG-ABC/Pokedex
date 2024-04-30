import React from 'react';
import "./Modal.css";
import FindMyWeakness from "../findweakness.js";
import next from "../assets/next.svg";
import previous from "../assets/previous.svg";

const Modal = ({toggleView, prevPokemon, nextPokemon, detailData}) => {
  var myTypes = [];
  detailData.types.map((item)=>{
    myTypes.push(item.type.name);
  });
  const myWeaknesses = FindMyWeakness(myTypes);
  return (
    <div className="modal">
        <div onClick={toggleView} className="overlay"></div>
        <div className="modal-content text-center flex flex-col items-center justify-center">
            <nav className='w-full mx-1 flex justify-between'>
              <div className='' onClick={prevPokemon}>
                <img src={previous} width={30}></img>
              </div>
              <h2 className=' text-2xl '> { detailData.id <= 999 ? (("00" + detailData.id).slice(-3)): detailData.id } </h2>
              <div className=''onClick={nextPokemon}>
                <img src={next} width={30}></img>
              </div>
            </nav>
            
            <div className='modal_image'>
                <img src={
                    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${detailData.id}.png`
                } alt={detailData.name} />
            </div>
              
            <h2 className='text-2xl'>{detailData.name}</h2>
            <div className='details w-full text-left flex flex-col mt-4'>
              <h3 className='text-xs text-center'>{`Weight: ${detailData.weight}`}</h3>
              <h3 className='text-xs text-center'>{`Height: ${detailData.height}`}</h3>
              <div id="stats" className='flex flex-col my-3'>
                <h3 className='text-xs text-center mb-2'>Base Stats:</h3>
                {detailData.stats.map((item)=>{
                    return (<h3 className='text-xs'>{item.stat.name}: {item.base_stat}</h3>)
                  })}
              </div>

              <div id="basicInfo" className='flex'>
                <div className='flex-col flex w-1/2 '>
                  <h3 className='text-xs mt-3 text-center'>Abilities</h3>
                  {detailData.abilities.map((item)=>{
                    if (!item.is_hidden){
                      return (<h3 className='text-xs text-center'>{item.ability.name}</h3>)
                    }
                  })}
                </div>
                <div className='flex-col flex w-1/2'>
                  <h3 className='text-xs mt-3 text-center'>Types</h3>
                  {detailData.types.map((item)=>{
                    return (<h3 className='text-xs text-center'>{item.type.name}</h3>)
                  })}
                </div>
              </div>

              <div id="weaknesses" className='flex flex-col'>
                <h3 className='text-xs mt-3 text-center'>Weaknesses </h3>
                  {myWeaknesses.map((item)=>{
                    return(<h3 className='text-xs text-center'>{item}</h3>)
                  })}

              </div>
            </div>
           
              

        </div>
    </div>
  )
}

export default Modal