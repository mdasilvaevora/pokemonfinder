import axios from 'axios';

import {
    GET_ERRORS,
    FETCH_LOADING,
    SET_POKEMONS
} from './types';

//Fetch pokemons
export const fetchPokemons = name => dispatch => {
    dispatch({type:FETCH_LOADING});
    axios
        .get(`/api/pokemons/?name=${name}`)
        .then(res => {
            dispatch({
                type:SET_POKEMONS,
                payload: res 
            })
        })
        .catch(err => {
            dispatch({
                type:GET_ERRORS,
                payload:err.response.data
            })
        })
};