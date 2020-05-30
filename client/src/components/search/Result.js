import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Loader from '../loaders/loader';
import EmptyResults from '../messages/EmptyResults';
import SearchInfo from '../messages/SearchInfo';
import ResultList from './ResultList';
import ErrorInfo from '../messages/ErrorInfo';

class Result extends Component {

    render() {
        const { pokemons, loading, fetchCount, errors } = this.props;
        const result = pokemons.length != 0;
        const firstRender = fetchCount == 0;
        const error = errors.length != 0;

        return (
            <div className="search-result-container row">
                {!loading?
                    error?
                            <div className="row center">
                                <ErrorInfo/>
                            </div>
                    : 
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
                        <ResultList pokemons={pokemons}/>
                :
                <div className="row center loader-container">
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
    fetchCount: PropTypes.number.isRequired,
    errors: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    pokemons: state.pokemons.pokemons,
    loading: state.pokemons.loading,
    fetchCount: state.pokemons.fetchCount,
    errors: state.errors.errors
})

export default connect(
    mapStateToProps
)(withRouter(Result));
