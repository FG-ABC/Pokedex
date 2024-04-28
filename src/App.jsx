import React, { useEffect, useState } from "react";
import PokeList from "./components/PokeList";
import Loader from "./components/Loader";
import Modal from "./components/Modal.jsx";

import "./App.css"

import datalistbyid from "./datalistbyid.js";
import datalistbyname from "./datalistbyname.js";

//Section: config
const pageInit = 0;
const pokemonPerPage = 20

//Section: functions
const getPokemonData = (id) =>{
    const response = datalistbyid[(id - 1)];
    return response
}

//Section: App 
const App = () => {
    const [pokeData, setpokeData] = useState([]);
    const [page, setPage] = useState(pageInit);
    const [loading, setLoading] = useState(false);
    const [sortID, setSortID] = useState(true);
    const [search, setSearch] = useState("");
    const [detailView, setDetailView] = useState(false);
    const [detailData, setDetailData] = useState({});
    const [currentPokemon, setcurrentPokemon] = useState(0);

    //Subsection: Load Pokelist
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = async () => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
        ) {
            setLoading(true);
            setPage((prev) => prev + 1);
        }
    };

    useEffect(() => {
        setTimeout(async () => {
            let response;
            sortID ?
            response = datalistbyid:
            response = datalistbyname;
            

            if (search != ""){
                isNaN(search)?
                response = response.filter((item) => item.name.includes(search)):
                response = response.filter((item) => (`${item.id}`).includes(search));
            };

            response = response.slice(page * pokemonPerPage, (page * pokemonPerPage) + pokemonPerPage);
            
            setpokeData((prev) => {
                return [...prev, ...response];
            });
            setLoading(false);
        }, 50);
    }, [page, sortID, search]);

    //Subsection: Sorting Pokelist
    const handleClick = (e) => {
        const button = e.target.value;
        if ((button === "name")&&(sortID)){
            setSortID(false);
            setPage(0);
            setpokeData([]);
        } else if ((button === "id")&&(!sortID)){
            setSortID(true);
            setPage(0);
            setpokeData([]);
        };
    };

    //Subsection: Searching Pokelist
    const handleSearch = (e) =>{
        const queryText = e.target.value.toLowerCase();
        console.log(queryText);
        setPage(0);
        setpokeData([]);
        setSearch(queryText);
    }; 

    //Subsection: Modal Pop Up
    const toggleView = (id) =>{
        setDetailView((prev) => !prev);
        setcurrentPokemon(id);
        const PokemonData = getPokemonData(id);
        setDetailData(PokemonData)
    }

    const nextPokemon = () =>{
        var PokemonData;
        if (currentPokemon === 1025){
            setcurrentPokemon(1);
            PokemonData = getPokemonData(1);
        } else{
            setcurrentPokemon((prev) => prev + 1);
            PokemonData = getPokemonData(currentPokemon + 1);
        }
        setDetailData(PokemonData);
    }
    const prevPokemon = () =>{
        var PokemonData;
        if (currentPokemon === 1){
            setcurrentPokemon(1025);
            PokemonData = getPokemonData(1025);
        } else{
            setcurrentPokemon((prev) => prev - 1);
            PokemonData = getPokemonData(currentPokemon - 1);
        }
        setDetailData(PokemonData);
    }

    return (   
        <div className='flex flex-col items-center w-100vw'>
            {/* Modal Popup */}
            {detailView &&
                <Modal
                toggleView = {toggleView}
                prevPokemon = {prevPokemon}
                nextPokemon = {nextPokemon} 
                detailData = {detailData}
                />
            }

            {/* Header */}
            <header className="flex justify-center w-full h-24 p-2 sm:h-32 sm:p-4 lg:p-6 ">
                <h1 className="text-4xl text-center mx-5 sm:text-5xl lg:text-6xl lg:pt-3">Pokedex Project</h1>
            </header>
            

            <div className="sm:w-8/12 md:w-10/12 flex flex-col items-center">

                {/* Search and Sort */}
                <div className="flex flex-col items-center w-full mt-5 p-5 md:w-10/12">
                    <label className="mx-5 lg:text-4xl">Search Pokemon</label>
                    <input className="w-11/12 rounded-2xl mt-3 h-8 px-3 lg:h-16 lg:text-4xl" onChange={handleSearch}></input>
                    <label className="mx-5 lg:text-4xl mt-3">Sort By</label>
                    <span className="flex justify-evenly w-full mt-3">
                        <button value="id" className={ `${sortID ? "activeSort" : ""}` } onClick={handleClick}>ID</button>
                        <button value="name" className={ `${!sortID ? "activeSort": ""}` } onClick={handleClick}>Name</button>
                    </span>
                </div> 


                {/* Pokelist */}
                <div>
                    <PokeList pokeData={pokeData} detailViewActivate = {toggleView} />
                    {loading && <Loader />}
                </div>
            
            </div>


        </div>
    );
};

export default App;
