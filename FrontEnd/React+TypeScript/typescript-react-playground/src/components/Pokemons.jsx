import { useDispatch, useSelector } from "react-redux";
import {getPokemons} from '../saga'
import { useEffect } from "react";
import { fetchingPokemons } from "../reducer/pokemonSlice";

export const Pokemons = () => {
   const {isLoading, pokemons =[], page, error}= useSelector(state => state.pokemons)
   const dispatch = useDispatch();

   useEffect(()=>{
    dispatch(fetchingPokemons())
   },[])

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
            onClick={()=>{dispatch(getPokemons(page))}}
        >Next Page</button>
    </div>
   )
}