import React, { Component } from 'react'

const data = [
    {
        name: "Pikachu"
    },
    {
        name: "Otro Pokemon"
    },
    {
        name: "Otro Pokemons más"
    }
]

export default class Result extends Component {
    render() {
        return (
            <div className="search-result-container">
                {data.map(pokemon => {
                    return (
                        <div className="row">
                            <div className="col s12 m5">
                                <div className="card-panel teal">
                                    {pokemon.name}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
