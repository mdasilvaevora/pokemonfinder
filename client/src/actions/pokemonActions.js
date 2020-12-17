import fetchUrl from '../configuration/configuration';
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
    dispatch({type:FETCH_LOADING});
    var url = fetchUrl;
    if(name.length != 0 ) url = url + `/?name=${name}`;
    axios
        .get(url)
        .then(res => {
           return res.data;
        })
        .then(data => {
            setPokemons(dispatch,data.pokemons)
        })
        .catch(err => {
            const emptyPokemons = [];
            setPokemons(dispatch,emptyPokemons)
            dispatch({ type: GET_ERRORS, payload: err})
        })
};