import { listaNueva } from "./src/view/vista.js";
import { listapokemons, searchButton, regresarppal } from "./src/constants.js";
import { busqueda } from "./src/controllers/searchPokemon.js"

console.log(listaNueva);

//LLAMA A LA FUNCION BUSCAR POKEMON POR SU NOMBRE
searchButton.addEventListener('click', function () {
    busqueda();
})

//VUELVE A LA PANTALLA INICIAL
regresarppal.addEventListener('click', function () {
    show();
})

// MUESTRA EN PANTALLA TARJETAS CON LOS POKEMONS
function show() {
    listapokemons.innerHTML = ''
    listaNueva.forEach(element => {
        const pokeCard = document.createElement('div')    
        pokeCard.classList.add('pokeCards')
    
        pokeCard.innerHTML = `
        <h2>Nombre: ${element.nombre}</h2>
        <h3>Tipo: ${element.tipo}</h3>
        <p>Peso: ${element.peso}</p>
        <img src= '${element.imagen}' height = 300px width=200px />
        `
        listapokemons.appendChild(pokeCard)
    });
}

show();




