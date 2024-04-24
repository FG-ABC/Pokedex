import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, orderBy, limit, where, startAfter} from "firebase/firestore"; 
import PokeList from "./components/PokeList";
import Loader from "./components/Loader";

//Section: config
const pageInit = 0;
const pokemonPerPage = 20
const firebaseConfig = {
    apiKey: "AIzaSyAju9Io9rjlnPWsQxCeGaPf3fpLxFYbnqM",
    authDomain: "pokedex-acd66.firebaseapp.com",
    projectId: "pokedex-acd66",
    storageBucket: "pokedex-acd66.appspot.com",
    messagingSenderId: "1031108778772",
    appId: "1:1031108778772:web:9c11ea2fa82a18834c0001"
  };

//Section: database init
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const pokeCollection = collection(db, "Pokedata"); 

//Section: functions 
async function readFromDatabase(sort_type, last_item){
    var data = [];
    if (last_item){
      var querySnapshot = await getDocs(query(pokeCollection,  orderBy(sort_type, "asc"), startAfter(last_item), limit(pokemonPerPage)));
    } else{
      var querySnapshot = await getDocs(query(pokeCollection,  orderBy(sort_type, "asc"), limit(pokemonPerPage)));
    }
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    return data
  };

async function searchFromDatabase(sort_type, search, last_item){
    var data = [];
    if (last_item){
        var querySnapshot = await getDocs(query(pokeCollection,where('name', '<=', search+ '\uf8ff'), where('name', '>=', search), orderBy(sort_type, "asc"), startAfter(last_item), limit(pokemonPerPage)));
    } else{
        var querySnapshot = await getDocs(query(pokeCollection,where('name', '<=', search+ '\uf8ff'), where('name', '>=', search), orderBy(sort_type, "asc"), limit(pokemonPerPage)));
    }
    
    querySnapshot.forEach((doc) => {
        data.push(doc.data());
    });
    return data
};

//Section: App 
const App = () => {

    //Subsection: State variables
    const [pokeData, setpokeData] = useState([]);
    const [lastItem, setLastItem] = useState(null);
    const [page, setPage] = useState(pageInit);
    const [loading, setLoading] = useState(false);
    const [sortID, setSortID] = useState(true);
    const [search, setSearch] = useState("");

    //List made from page load
    useEffect(() => {
        setTimeout(async () => {
            if(search === ""){
                var sort_type;
                sortID?  sort_type = "Myid" :  sort_type = "name";
                const response = await readFromDatabase(sort_type, lastItem);
                setLastItem(response[response.length - 1][sort_type]);
                setpokeData((prev) => {
                    return [...prev, ...response];
                });
                setLoading(false);
            }
        }, 250);
    }, [page, sortID]);

    //List made from searching 
    useEffect(() => {
        setTimeout(async () => {
            if(search != ""){
                var sort_type;
                sortID?  sort_type = "Myid" :  sort_type = "name";
                const response = await searchFromDatabase(sort_type, search, lastItem);
                console.log(response);
                if (response.length != 0){
                    setLastItem(response[response.length - 1][sort_type]);
                    setpokeData((prev) => {
                    return [...prev, ...response];
                });
                }
                setLoading(false);
            }
        }, 0);
    }, [page, sortID, search]);

    //Give window scroll handler
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    //When the bottom of screen is reached, add 1 to page (each page is 20 pokemon) <- infinite scroll 
    const handleScroll = async () => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
        ) {
            setLoading(true);
            setPage((prev) => prev + 1);
        }
    };

    //Change sorting type
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

    //Search pokemon
    const handleSearch = () =>{
        const search = document.getElementById('search').value.toLowerCase();
        setSortID(false);
        setPage(0);
        setpokeData([]);
        setLastItem(null);
        setSearch(search);
    }; 

    //If enter key is pressed on search bar
    const handleEnter = (e) => {
        if(e.key === 'Enter'){
            handleSearch();
        }
    }

    return (
        <div className='flex flex-col items-center'>
            <div className="mt-10 text-5xl flex gap-10">
                <label>Search:</label>
                <input id="search" className="text-black" onKeyDown={handleEnter} ></input>
                <button className="text-black bg-white px-4" onClick={handleSearch}>Enter</button>
                
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
