import axios from "axios";
import {
    GET_ERRORS,
    FETCH_LOADING,
    SET_POKEMONS
} from './types';

function setPokemons (dispatch,data) {
    dispatch({
        type:SET_POKEMONS,
        payload: data
    })
} 

//Fetch pokemons
export const fetchPokemons = name => dispatch => {
    console.log("Fetching...")
    dispatch({type:FETCH_LOADING});
    fetch(`http://localhost:5000/api/pokemon/?name=${name}`)
        .then(res => {
            return res.json()
        })
        .then(data => {
            setPokemons(dispatch,data.pokemons)
        })
        .catch(err => {
            console.log(err)
        })
};