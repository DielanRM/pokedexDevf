import { pokemons } from "../controllers/apiCall.js";
import Pokemon from "../models/classPokemon.js";


async function crearLista() {
     var listaNueva = []
    const nuevaLista = pokemons.map(async function (pokemon) {
        let nombre = pokemon.name
        let tipo = await pokemon.types[0].type.name
        let peso = pokemon.weight
        let imagen = pokemon.sprites.front_default
        let movimientos = await pokemon.moves.map((moves)=>{moves.move.name})

        let nuevoPokemon = new Pokemon(nombre, tipo, peso, imagen, movimientos)
        listaNueva.push(nuevoPokemon)
    
        return nuevaLista
    })
    return listaNueva
}


let listaNueva = await crearLista();

export { listaNueva }


