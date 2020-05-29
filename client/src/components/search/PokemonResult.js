import React from 'react';
import Fade from 'react-reveal';

export default function PokemonResult(props) {
    const { pokemon } = props;
    const name = pokemon.name.charAt(0).toUpperCase(0) + pokemon.name.slice(1)
    return (
        <div className="row">
         <div className="col s12 m5">
             <Fade top>
                <div className="card horizontal">
                    <div className="card-stacked">
                        <div className="card-content">
                            <h5>{name}</h5>
                            <p>Experiencia base: {pokemon.baseExperience} xp </p>
                            <p>Altura: {pokemon.height} decimetres</p>
                            <p>Peso: {pokemon.weight} hectograms</p>
                        </div>
                    </div>
                </div>
             </Fade>
        </div>
    </div>
    )
}
