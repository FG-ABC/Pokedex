import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, orderBy, limit, where} from "firebase/firestore"; 
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
async function readFromDatabase(page_num){
    var data = [];
    const querySnapshot = await getDocs(query(pokeCollection, where("Myid", ">", page_num * 20), orderBy("Myid", "asc"), limit(pokemonPerPage)));
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    return data
  };

//Section: App 
const App = () => {

    //Subsection: State variables
    const [pokeData, setpokeData] = useState([]);
    const [page, setPage] = useState(pageInit);
    const [loading, setLoading] = useState(false);

    //On page load and When page changes get 20 items from database
    useEffect(() => {
        setTimeout(async () => {
            const response = await readFromDatabase(page);
            setpokeData((prev) => {
                return [...prev, ...response];
            });
            setLoading(false);
        }, 500);
    }, [page]);

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

    return (
        <div className=''>
            <h1 className="mt-5 text-center text-6xl ">Pokedex</h1>
            <PokeList pokeData={pokeData} />
            {loading && <Loader />}
        </div>
    );
};

export default App;
