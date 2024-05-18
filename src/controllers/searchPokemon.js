import { listapokemons } from "../constants.js";
import { listaNueva } from "../view/vista.js";

const searchInput = document.getElementById("search-input").value

function busqueda () {
    listapokemons.innerHTML = '';
    listapokemons.innerHTML = `<p>ta taaa ${searchInput}</p>`
    console.log("-------------------------------------------------");
    console.log(listaNueva);
}

export { busqueda }