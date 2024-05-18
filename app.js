import { listaNueva } from "./src/view/vista.js";
// import { pokemons } from "./src/controllers/apiCall.js";


const searchInput = document.getElementById("search-input")
const searchButton = document.getElementById("searchButton")
const listapokemons = document.getElementById("lista")



searchButton.addEventListener('click', function(){
    listapokemons.innerHTML = "<P> Lentos pero seguros avanzando fuerte</P>"

})
// console.log(`estamos dentro ${pokemons}`);

console.log(listaNueva);


listaNueva.forEach(element => {
    const pokeCard = document.createElement('div')    
    pokeCard.classList.add('pokeCards')
    //const movimientos = movimientos.map(key => element.movimientos[key]).join()
// <p>Movimientos: ${movimientos}</p>
    pokeCard.innerHTML = `
    <h2>Nombre: ${element.nombre}</h2>
    <h3>Tipo: ${element.tipo}</h3>
    <p>Peso: ${element.peso}</p>
   
    <img src= '${element.imagen}' height = 300px width=200px />
    `

    listapokemons.appendChild(pokeCard)
});


