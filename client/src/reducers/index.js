import { combineReducers } from "redux";
import pokemonReducer from './pokemonReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    pokemons: pokemonReducer,
    errors: errorReducer
})