import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, serverTimestamp} from "firebase/firestore"; 
import axios from "axios";
//The purpose of this code is to store the data from the pokeAPI into a firebase for easier sorting of data. 

//Section: Configs
const firebaseConfig = {
  apiKey: "AIzaSyAju9Io9rjlnPWsQxCeGaPf3fpLxFYbnqM",
  authDomain: "pokedex-acd66.firebaseapp.com",
  projectId: "pokedex-acd66",
  storageBucket: "pokedex-acd66.appspot.com",
  messagingSenderId: "1031108778772",
  appId: "1:1031108778772:web:9c11ea2fa82a18834c0001"
};


//Section: functions
async function addToDatabase(id, name, url){
  try {
      const docRef = await addDoc(collection(db, "Pokedata"), {
        Myid: id,
        name: name,
        url: url,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
};


//Section: Main
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

///
const response = await axios.get(
  "https://pokeapi.co/api/v2/pokemon/?limit=1025&offset=0"
);

for(let i = 0; i < 1025; i++){
  const id = i+1;
  const name = response.data["results"][i]["name"];
  const url = response.data["results"][i]["url"];
  addToDatabase(id, name, url);
};

