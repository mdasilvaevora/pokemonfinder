import React, { Component } from "react";

import SearchBar from './SearchBar';
import Result from "./Result";
class Search extends Component {
    render(){
        return (
            <div className="search-container">
                <h1>Pokemon finder</h1>
                <p>El que quiere Pokemons, que los busque.</p>
                <SearchBar/>
                <Result/>
            </div>
        )
    }
}

export default Search;