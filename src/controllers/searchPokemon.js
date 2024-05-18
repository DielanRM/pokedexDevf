import { listapokemons } from "../constants.js";
import { listaNueva } from "../view/vista.js";


async function busqueda() {
    let nombreInput = document.getElementById("search-input").value;
    let exist = listaNueva.some(nombrePokemon => nombrePokemon.nombre === nombreInput)
    listapokemons.innerHTML = '';
    const pokemonInfo = document.createElement('div')
    pokemonInfo.classList.add('pokeInfo')

    if (exist) {
        let encontrado = listaNueva.filter(name => name.nombre === nombreInput)
        let index = encontrado.findIndex(indice => indice.nombre === nombreInput)
        console.log("=================================");
        console.log(encontrado[index]);




        let movimientos = encontrado[index].movimientos

        console.log(movimientos);
        pokemonInfo.innerHTML = `
        <div class= "info">   
        <img src= '${encontrado[index].imagen}' height = 400px width=300px />    
        <h2>Nombre: ${encontrado[index].nombre}</h2>
        <h3>Tipo: ${encontrado[index].tipo}</h3>
        <p>Peso: ${encontrado[index].peso}</p>
        </div>        
        <div class= "info">
        <p>MOVIMIENTOS: </p>
        <p>${movimientos.join(',    -')}</p>
        </div>
        `
        listapokemons.appendChild(pokemonInfo)
    } else {
        pokemonInfo.innerHTML = `<h2>El pokemon ${nombreInput} no existe, porfavor intenta con otro</h2>`
        listapokemons.appendChild(pokemonInfo)
    }
}

export { busqueda }