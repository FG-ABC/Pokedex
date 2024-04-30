//Damage taken by type pokemon from every other type
const Normal = {
    normal: 1,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 1,
    fighting: 2,
    poison: 1,
    ground: 1,
    flying: 1,
    psychic: 1,
    bug: 1,
    rock: 1,
    ghost: 0,
    dragon: 1,
    dark: 1,
    steel: 1,
    fairy: 1,
};
const Fire = {
    normal: 1,
    fire: 1/2,
    water: 2,
    electric: 1,
    grass: 1/2,
    ice: 1/2,
    fighting: 1,
    poison: 1,
    ground: 2,
    flying: 1,
    psychic: 1,
    bug: 1/2,
    rock: 2,
    ghost: 1,
    dragon: 1,
    dark: 1,
    steel: 1/2,
    fairy: 1/2,
};
const Water = {
    normal: 1,
    fire: 1/2,
    water: 1/2,
    electric: 2,
    grass: 2,
    ice: 1/2,
    fighting: 1,
    poison: 1,
    ground: 1,
    flying: 1,
    psychic: 1,
    bug: 1,
    rock: 1,
    ghost: 1,
    dragon: 1,
    dark: 1,
    steel: 1/2,
    fairy: 1,
};
const Electric = {
    normal: 1,
    fire: 1,
    water: 1,
    electric: 1/2,
    grass: 1,
    ice: 1,
    fighting: 1,
    poison: 1,
    ground: 2,
    flying: 1/2,
    psychic: 1,
    bug: 1,
    rock: 1,
    ghost: 1,
    dragon: 1,
    dark: 1,
    steel: 1/2,
    fairy: 1,
};
const Grass = {
    normal: 1,
    fire: 2,
    water: 1/2,
    electric: 1/2,
    grass: 1/2,
    ice: 2,
    fighting: 1,
    poison: 2,
    ground: 1/2,
    flying: 2,
    psychic: 1,
    bug: 2,
    rock: 1,
    ghost: 1,
    dragon: 1,
    dark: 1,
    steel: 1,
    fairy: 1,
};
const Ice = {
    normal: 1,
    fire: 2,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 1/2,
    fighting: 2,
    poison: 1,
    ground: 1,
    flying: 1,
    psychic: 1,
    bug: 1,
    rock: 2,
    ghost: 1,
    dragon: 1,
    dark: 1,
    steel: 2,
    fairy: 1,
};
const Fighting = {
    normal: 1,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 1,
    fighting: 1,
    poison: 1,
    ground: 1,
    flying: 2,
    psychic: 2,
    bug: 1/2,
    rock: 1/2,
    ghost: 1,
    dragon: 1,
    dark: 1/2,
    steel: 1,
    fairy: 2,
};
const Poison = {
    normal: 1,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 1/2,
    ice: 1,
    fighting: 1/2,
    poison: 1/2,
    ground: 2,
    flying: 1,
    psychic: 2,
    bug: 1/2,
    rock: 1,
    ghost: 1,
    dragon: 1,
    dark: 1,
    steel: 1,
    fairy: 1/2,
};
const Ground = {
    normal: 1,
    fire: 1,
    water: 2,
    electric: 0,
    grass: 2,
    ice: 2,
    fighting: 1,
    poison: 1/2,
    ground: 1,
    flying: 1,
    psychic: 1,
    bug: 1,
    rock: 1/2,
    ghost: 1,
    dragon: 1,
    dark: 1,
    steel: 1,
    fairy: 1,
};
const Flying = {
    normal: 1,
    fire: 1,
    water: 1,
    electric: 2,
    grass: 1/2,
    ice: 2,
    fighting: 1/2,
    poison: 1,
    ground: 0,
    flying: 1,
    psychic: 1,
    bug: 1/2,
    rock: 2,
    ghost: 1,
    dragon: 1,
    dark: 1,
    steel: 1,
    fairy: 1,
};
const Psychic = {
    normal: 1,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 1,
    fighting: 1/2,
    poison: 1,
    ground: 1,
    flying: 1,
    psychic: 1/2,
    bug: 2,
    rock: 1,
    ghost: 2,
    dragon: 1,
    dark: 2,
    steel: 1,
    fairy: 1,
};
const Bug = {
    normal: 1,
    fire: 2,
    water: 1,
    electric: 1,
    grass: 1/2,
    ice: 1,
    fighting: 1/2,
    poison: 1,
    ground: 1/2,
    flying: 2,
    psychic: 1,
    bug: 1,
    rock: 2,
    ghost: 1,
    dragon: 1,
    dark: 1,
    steel: 1,
    fairy: 1,
};
const Rock = {
    normal: 1/2,
    fire: 1/2,
    water: 2,
    electric: 1,
    grass: 2,
    ice: 1,
    fighting: 2,
    poison: 1/2,
    ground: 2,
    flying: 1/2,
    psychic: 1,
    bug: 1,
    rock: 1,
    ghost: 1,
    dragon: 1,
    dark: 1,
    steel: 2,
    fairy: 1,
};
const Ghost = {
    normal: 0,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 1,
    fighting: 0,
    poison: 1/2,
    ground: 1,
    flying: 1,
    psychic: 1,
    bug: 1/2,
    rock: 1,
    ghost: 2,
    dragon: 1,
    dark: 2,
    steel: 1,
    fairy: 1,
};
const Dragon = {
    normal: 1,
    fire: 1/2,
    water: 1/2,
    electric: 1/2,
    grass: 1/2,
    ice: 2,
    fighting: 1,
    poison: 1,
    ground: 1,
    flying: 1,
    psychic: 1,
    bug: 1,
    rock: 1,
    ghost: 1,
    dragon: 2,
    dark: 1,
    steel: 1,
    fairy: 2,
};
const Dark = {
    normal: 1,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 1,
    fighting: 2,
    poison: 1,
    ground: 1,
    flying: 1,
    psychic: 0,
    bug: 2,
    rock: 1,
    ghost: 1/2,
    dragon: 1,
    dark: 1/2,
    steel: 1,
    fairy: 2,
};
const Steel = {
    normal: 1/2,
    fire: 2,
    water: 1,
    electric: 1,
    grass: 1/2,
    ice: 1/2,
    fighting: 2,
    poison: 0,
    ground: 2,
    flying: 1/2,
    psychic: 1/2,
    bug: 1/2,
    rock: 1/2,
    ghost: 1,
    dragon: 1/2,
    dark: 1,
    steel: 1/2,
    fairy: 1/2,
};
const Fairy = {
    normal: 1,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 1,
    fighting: 1/2,
    poison: 2,
    ground: 1,
    flying: 1,
    psychic: 1,
    bug: 1/2,
    rock: 1,
    ghost: 1,
    dragon: 0,
    dark: 1/2,
    steel: 2,
    fairy: 1,
};
const FindMyWeakness = (arr) =>{
    var myPokemon = {
        normal: 1,
        fire: 1,
        water: 1,
        electric: 1,
        grass: 1,
        ice: 1,
        fighting: 1,
        poison: 1,
        ground: 1,
        flying: 1,
        psychic: 1,
        bug: 1,
        rock: 1,
        ghost: 1,
        dragon: 1,
        dark: 1,
        steel: 1,
        fairy: 1,
    };
    var output = [];
    arr.forEach((type) => {
        let typesrc;
        switch (type) {
            case "bug":
                typesrc = Bug;
                break;

            case "dark":
                typesrc = Dark;
                break;

            case "dragon":
                typesrc = Dragon;
                break;

            case "electric":
                typesrc = Electric;
                break;

            case "fairy":
                typesrc = Fairy;
                break;

            case "fighting":
                typesrc = Fighting;
                break;

            case "fire":
                typesrc = Fire;
                break;

            case "flying":
                typesrc = Flying;
                break;
            
            case "ghost":
                typesrc = Ghost;
                break;

            case "grass":
                typesrc = Grass;
                break;

            case "ground":
                typesrc = Ground;
                break;

            case "ice":
                typesrc = Ice;
                break;

            case "normal":
                typesrc = Normal;
                break;

            case "poison":
                typesrc = Poison;
                break;

            case "psychic":
                typesrc = Psychic;
                break;

            case "rock":
                typesrc = Rock;
                break;

            case "steel":
                typesrc = Steel;
                break;

            case "water":
                typesrc = Water;
                break;
        
            default:
                console.log("Something wrong happened!");
                break;
        };
        for (let key in typesrc) {
            myPokemon[key] = myPokemon[key] * typesrc[key];
          } 
    });
    for (let key in myPokemon) {
        if (myPokemon[key] > 1){
            output.push(key)
        };
    }
    return output 
};

export default FindMyWeakness;