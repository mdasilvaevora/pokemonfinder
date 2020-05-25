import React, { Component } from "react";

export default class SearchBar extends Component {
    render(){
        return (
            <div className="search-bar-container">
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s10">
                                <input id="search" type="search" placeholder="Ingrese el nombre del pokemon a buscar" />
                            </div>
                            <div className="col s2 right-align">
                                <a className="waves-effect waves-light btn">Buscar</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}