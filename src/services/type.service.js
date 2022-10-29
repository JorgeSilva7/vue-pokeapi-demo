/**
 * Esta es una forma (2) donde se crea una clase y se crean metodo para utilizar en los archivos
 * donde se requiera. Forma 1 y 2 son válidas.
 */
import axios from 'axios';

class TypeService {
    constructor(){
        this.resource = axios.create({
            baseURL: 'https://pokeapi.co/api/v2/'
        })
    }

    list() {
        return this.resource.get('type')
    }
}

export default new TypeService();