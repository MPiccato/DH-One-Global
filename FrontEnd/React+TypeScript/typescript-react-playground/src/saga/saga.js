import {put, call, takeEvery} from 'redux-saga/effects';
import { failedFetch, loadingPokemons, fetchPokemons } from '../reducer/pokemonSlice';


// Función que se encarga de hacer la petición a la API
const fetchingPokemons = async (page) => {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/ability/?limit=20&offset=${page * 10}`)
    const data = await respuesta.json();
    return data;
}

// Saga paraa obtener los datos de la API

function* getPokemon(){
    const page = actionChannel.payload;
    try {
        yield put(loadingPokemons());

        // Obtener los datos de la API
        const data = yield call(fetchingPokemons,page);

        // Guardar los datos en la store si todo es exitoso
        yield put(fetchPokemons({pokemons: data.results, page:page}))


    } catch (error) {
        yield put(failedFetch({error: error.message}));
    }

};

// Saga para escuchar las acciones
function* pokemonSaga() {
    yield takeEvery('pokemon/fetchingPokemons', getPokemon);
}

export  default pokemonSaga;

