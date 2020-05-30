import React from 'react'
import Pokemon from './Pokemon';
import Fade from 'react-reveal';

export default function ResultList(props) {
    console.log(props.pokemons)
    const pokemons = props.pokemons;
    return (
        <Fade top>
            <h4>Resultado de la búsqueda</h4>
            {pokemons.map(pokemon => {
                return (
                    <Pokemon pokemon={pokemon}/>
                )
            })}
        </Fade>
    )
}
