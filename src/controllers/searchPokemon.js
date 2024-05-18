import { listapokemons } from "../constants.js";
import { listaNueva } from "../view/vista.js";


async function busqueda () {
    let nombreInput = document.getElementById("search-input").value
    let exist = listaNueva.some(nombrePokemon => nombrePokemon.nombre === nombreInput )
    listapokemons.innerHTML = '';

    if (exist) {
        let encontrado = listaNueva.filter(name => name.nombre === nombreInput)
        let index = encontrado.findIndex(indice => indice.nombre === nombreInput)
        console.log("=================================");
        console.log(encontrado[index]);


        const pokeCard = document.createElement('div')    
        pokeCard.classList.add('pokeCards')
        let movimientos = encontrado[index].movimientos//.map(movimiento => movimiento.nombre)//.join(', ')
    
        

        console.log(movimientos);
        pokeCard.innerHTML = `
        <h2>Nombre: ${encontrado[index].nombre}</h2>
        <h3>Tipo: ${encontrado[index].tipo}</h3>
        <p>Peso: ${encontrado[index].peso}</p>
        <img src= '${encontrado[index].imagen}' height = 300px width=200px />
        <p>Movimientos: ${movimientos.join(',   ')}</p>
        `
        listapokemons.appendChild(pokeCard)
    }
}

export { busqueda }