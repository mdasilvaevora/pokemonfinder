import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

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

class Result extends Component {
    render() {
        console.log(this.props.pokemons)
        let pokemons = this.props.pokemons
        return (
            <div className="search-result-container">
                {pokemons.map(pokemon => {
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

Result.propTypes = {
    fetchPokemons: PropTypes.func.isRequired,
    pokemons: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    pokemons: state.pokemons.pokemons
})

export default connect(
    mapStateToProps
)(withRouter(Result));
