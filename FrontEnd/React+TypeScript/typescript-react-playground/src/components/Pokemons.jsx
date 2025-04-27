import { useDispatch, useSelector } from "react-redux";
import {getPokemons} from '../saga'
import { useEffect } from "react";
import { fetchingPokemons } from "../reducer/pokemonSlice";
import { useState } from "react";

export const Pokemons = () => {

   const [localPage, setLocalPage]= useState(0)
   const {isLoading, pokemons =[], error}= useSelector(state => state.pokemons)
   const dispatch = useDispatch();

   useEffect(()=>{
    dispatch(fetchingPokemons(localPage))
   },[localPage, dispatch])

   return (
    <div>
        <h1>Pokemons</h1>
        {isLoading && <p>Cargando...</p>}
        {error && <p>{error}</p>}
        <div>
            {pokemons.map((pokemon, index) =>{
                <p key={index}>{pokemon.name}</p>
            })}
        </div>
        <button
            onClick={()=> setLocalPage(localPage + 1)}
        >Next Page</button>
    </div>
   )
}