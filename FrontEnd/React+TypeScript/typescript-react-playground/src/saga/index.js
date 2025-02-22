import {all} from 'redux-saga/effects';
import pokemonSaga from './saga';

export default function* rootSaga() {
    yield all([
        // Aquí irán las sagas
        pokemonSaga(),
    ])
}