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

//Section: App 
const App = () => {

    //Subsection: State variables
    const [pokeData, setpokeData] = useState([]);
    const [lastItem, setLastItem] = useState(null);
    const [page, setPage] = useState(pageInit);
    const [loading, setLoading] = useState(false);
    const [sortID, setSortID] = useState(true);

    //On page load and When page changes get 20 items from database
    useEffect(() => {
        setTimeout(async () => {
            var sort_type;
            sortID?  sort_type = "Myid" :  sort_type = "name";
            const response = await readFromDatabase(sort_type, lastItem);
            setLastItem(response[response.length - 1][sort_type]);
            setpokeData((prev) => {
                return [...prev, ...response];
            });
            setLoading(false);
        }, 250);
    }, [page, sortID]);

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
            setSortID(!sortID);
            setPage(0);
            setpokeData([]);
            setLastItem(null);
        } else if ((button === "id")&&(!sortID)){
            setSortID(!sortID);
            setPage(0);
            setpokeData([]);
            setLastItem(null);
        };

    };

    return (
        <div className='flex flex-col items-center'>
            <h1 className="mt-24 text-center text-8xl">Pokedex</h1>
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
