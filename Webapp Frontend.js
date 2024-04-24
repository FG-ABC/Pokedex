import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs,} from "firebase/firestore"; 
import { query, orderBy, limit, where, startAfter } from "firebase/firestore"; 
//The purpose of this code is to test data collection from the firebase database.

//Section: Configs
const pokemonPerPage = 1;
const sortType = "name"; //or Myid
const firebaseConfig = {
  apiKey: "AIzaSyAju9Io9rjlnPWsQxCeGaPf3fpLxFYbnqM",
  authDomain: "pokedex-acd66.firebaseapp.com",
  projectId: "pokedex-acd66",
  storageBucket: "pokedex-acd66.appspot.com",
  messagingSenderId: "1031108778772",
  appId: "1:1031108778772:web:9c11ea2fa82a18834c0001"
};


//Section: Main
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const pokeCollection = collection(db, "Pokedata"); 
var lastItem;

console.log(await readFromDatabase(sortType));
console.log(await readFromDatabase(sortType, lastItem));



//Section: functions
async function readFromDatabase(sort_type, last_item = null){
  var data = [];
  if (last_item){
    var querySnapshot = await getDocs(query(pokeCollection,  orderBy(sort_type, "asc"), startAfter(last_item), limit(pokemonPerPage)));
  } else{
    var querySnapshot = await getDocs(query(pokeCollection,  orderBy(sort_type, "asc"), limit(pokemonPerPage)));
  }
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  lastItem = (data[data.length - 1][sortType]);
  return data
};

