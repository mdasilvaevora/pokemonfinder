import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Loader from '../loaders/loader';
import EmptyResults from '../messages/EmptyResults';
import SearchInfo from '../messages/SearchInfo';
import PokemonResult from './PokemonResult';

class Result extends Component {

    render() {
        const { pokemons, loading, fetchCount } = this.props;
        const result = pokemons.length != 0;
        const firstRender = fetchCount == 0;

        return (
            <div className="search-result-container container">
                {!loading? 
                    !result?
                        firstRender?
                            <div className="row center">
                                <SearchInfo/>
                            </div>
                            :
                            <div className="row center">
                                <EmptyResults/>
                            </div>
                    :
                        pokemons.map(pokemon => {
                            return (
                                <PokemonResult pokemon={pokemon}/>
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
    pokemons: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    fetchCount: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
    pokemons: state.pokemons.pokemons,
    loading: state.pokemons.loading,
    fetchCount: state.pokemons.fetchCount
})

export default connect(
    mapStateToProps
)(withRouter(Result));
