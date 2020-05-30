import {
    FETCH_LOADING,
    SET_POKEMONS
} from '../actions/types';

const initialState = {
    fetchCount: 0,
    loading: false,
    pokemons: []
}
export default function(state = initialState, action) {
    switch(action.type){
        case FETCH_LOADING:
            return{
                ...state,
                loading:true,
                fetchCount:state.fetchCount+1
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