import {
    FETCH_LOADING,
    SET_POKEMONS
} from '../actions/types';

const initialState = {
    loading: false,
    pokemons: []
}
export default function(state = initialState, action) {
    switch(action.type){
        case FETCH_LOADING:
            return{
                ...state,
                loading:true
            };
        case SET_POKEMONS:
            return{
                ...state,
                loading:false,
                pokemons: action.payload
            }
        default:
            return state;
    }
}