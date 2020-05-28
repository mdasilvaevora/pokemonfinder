import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Loader from '../loaders/loader';
import EmptyResults from '../messages/EmptyResults';

class Result extends Component {
    render() {
        const { pokemons, loading } = this.props;
        const result = pokemons.length != 0;
        return (
            <div className="search-result-container container">
                {!loading? 
                    !result?
                        <div className="row center">
                            <EmptyResults/>
                        </div>
                    :
                        pokemons.map(pokemon => {
                            return (
                                <div className="row">
                                    <div className="col s12 m5">
                                        <div className="card-panel">
                                            {pokemon.name}
                                        </div>
                                    </div>
                                </div>
                            )
                        })

                :
                <div className="row center">
                    <Loader/>
                </div>
                }
            </div>
        )
    }
}

Result.propTypes = {
    fetchPokemons: PropTypes.func.isRequired,
    pokemons: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    pokemons: state.pokemons.pokemons,
    loading: state.pokemons.loading
})

export default connect(
    mapStateToProps
)(withRouter(Result));
