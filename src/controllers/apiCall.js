
async function callPokemons(){
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`);
    let pokemonsList = await response.json();
    let pokemons= [];

    for (let i = 0; i < pokemonsList.results.length; i++) {
        let pokemon = await fetch(pokemonsList.results[i].url)
        pokemons[i] = await pokemon.json();
    }

    //console.log(pokemonsList);
    console.log(pokemons);
    return pokemons;
}

let pokemons = await callPokemons();
export {callPokemons, pokemons}