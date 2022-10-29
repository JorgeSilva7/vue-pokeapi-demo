/**
* Esta es una forma (1). Crear funciones que realizan una solicitud HTTP para luego solo utilizarla
* Entonces se puede llamar a esta función desde varios archivos solo utilizando la palabra reservada 'await'
* la cual solo se puede usar en funciones async. Ver ejemplo en HomeView
*/
import axios from 'axios';

const baseURL = "https://pokeapi.co/api/v2"

export function listPokemon(limit) {
    return axios.get(`${baseURL}/pokemon?limit=${limit}`);
}

export function getPokemon(url) {
    return axios.get(url).then(res => { return res.data });
}