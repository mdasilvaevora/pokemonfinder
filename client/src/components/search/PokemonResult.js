import React from 'react';
import Fade from 'react-reveal';

export default function PokemonResult(props) {
    
    return (
        <div className="row">
         <div className="col s12 m5">
             <Fade top>
                <div className="card-panel">
                    {props.pokemon.name}
                </div>
             </Fade>
        </div>
    </div>
    )
}
