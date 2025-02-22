import {createSlice} from '@reduxjs/toolkit';
import createAction from 'redux-toolkit/lib/createAction';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemon: [],
        isLoading: false,
        error: null
    },
    reducers: {
        loadingPokemons: (state) => {
            state.isLoading = true;
        },
        fetchPokemons: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;

        },
        failedFetch: (state, action) => {
            state.isLoading = false;
            state.error = action.payload.error;
        }
    }
})

export const {loadingPokemons, fetchPokemons, failedFetch} = pokemonSlice.actions;

export const fetchingPokemons =  createAction('pokemon/fetchingPokemons');