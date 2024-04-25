import React, { useEffect, useState } from "react";
import PokeList from "./components/PokeList";
import Loader from "./components/Loader";

import datalistbyid from "./datalistbyid.js";
import datalistbyname from "./datalistbyname.js";

//Section: config
const pageInit = 0;
const pokemonPerPage = 20

//Section: App 
const App = () => {
    const [pokeData, setpokeData] = useState([]);
    const [page, setPage] = useState(pageInit);
    const [loading, setLoading] = useState(false);
    const [sortID, setSortID] = useState(true);
    const [search, setSearch] = useState("");

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
                console.log(search);
                isNaN(search)?
                response = response.filter((item) => item.name.includes(search)):
                response = response.filter((item) => item.id.includes(search));
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
            setLastItem(null);
        } else if ((button === "id")&&(!sortID)){
            setSortID(true);
            setPage(0);
            setpokeData([]);
            setLastItem(null);
        };
    };

    //Subsection: Searching Pokelist
    const handleSearch = (e) =>{
        const queryText = e.target.value.toLowerCase();
        setSortID(false);
        setPage(0);
        setpokeData([]);
        setSearch(queryText);
    }; 



    return (
        <div className='flex flex-col items-center'>
            <div className="mt-10 text-5xl flex gap-10">
                <label>Search:</label>
                <input id="search" className="text-black" onChange={handleSearch} ></input>
            </div>
            <h1 className="mt-12 text-center text-8xl">Pokedex</h1>
            <div className="flex w-3/5 justify-center gap-24 text-5xl p-6 rounded-3xl bg-slate-500">
                <label className="p-5">Sort by:</label>
                <button value="id" className={ `p-5 ${sortID ? "bg-slate-800": ""}` } onClick={handleClick}>by ID</button>
                <button value="name" className={ `p-5 ${!sortID ? "bg-slate-800": ""}` } onClick={handleClick}>by Name</button>
            </div>
            <PokeList pokeData={pokeData} />
            {loading && <Loader />}
        </div>
    );
};

export default App;
