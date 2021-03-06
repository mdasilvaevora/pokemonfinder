import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { fetchPokemons } from "../../actions/pokemonActions";
import * as M from 'materialize-css/dist/js/materialize'
import './Search.css';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({name: event.target.value})
    }

    handleSubmit(event){
        if(this.state.name.length == 0) M.toast({html: 'Debes ingresar el nombre del pokemon a buscar.'})
        else this.props.fetchPokemons(this.state.name);
    }

    render(){
        return (
                <div className="row">
                    <form className="col s12">
                        <div className="search-bar-container">
                            <div className="input-field col s10">
                                <input id="search" 
                                        type="text" 
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                        placeholder="Ingrese el nombre del pokemon a buscar" />
                            </div>
                            <div className="col s2 right-align">
                                <a className="waves-effect waves-light btn red lighten-2"
                                    onClick={this.handleSubmit}>
                                        Buscar
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
        )
    }
}

SearchBar.propTypes = {
    fetchPokemons: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors
})

export default connect(
    mapStateToProps,
    { fetchPokemons }
)(withRouter(SearchBar));