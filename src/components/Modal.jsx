import React from 'react';
import "./Modal.css";

const Modal = ({toggleView, prevPokemon, nextPokemon, detailData}) => {
  return (
    <div className="modal">
        <div onClick={toggleView} className="overlay"></div>
        <div className="modal-content w-8/12 h-56 text-center flex justify-center">
            <button onClick={prevPokemon} className="text-black">Previous</button>
            <span className="flex flex-col justify-center items-center">
                <h2>My name is {detailData.name} </h2>
                <h2>And my id is {detailData.id}</h2>
            </span>
            <button onClick={nextPokemon} className="text-black">Next</button>
        </div>
    </div>
  )
}

export default Modal