import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs,} from "firebase/firestore"; 
import { query, orderBy, limit, where } from "firebase/firestore"; 
//The purpose of this code is to test data collection from the firebase database.

//Section: Configs
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

let page = 1;
console.log(await readFromDatabase(page));


//Section: functions
async function readFromDatabase(page_num){
  var data = [];
  // const querySnapshot = await getDocs(query(pokeCollection, orderBy("time", "asc"), where("sensor", "==", sensor), where("time", ">=", start_date), where("time", "<=", end_date), limit(20)));
  const querySnapshot = await getDocs(query(pokeCollection, where("Myid", ">", page_num * 20), orderBy("Myid", "asc"), limit(20)));
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  return data
};

