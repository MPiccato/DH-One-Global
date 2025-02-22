import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "../saga/rootSaga";
import { pokemonSlice } from "../reducer/pokemonSlice";
import createSagaMiddleware from "redux-saga/core";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        pokemons: pokemonSlice.reducer
    },
    middleware: [sagaMiddleware]
})
sagaMiddleware.run(rootSaga);

export default store;