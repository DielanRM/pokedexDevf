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


