import React, { Component } from "react";

import Layout from '../layout/Layout';
import SearchBar from './SearchBar';
import Result from "./Result";

import './Search.css';

class Search extends Component {
    render(){
        return (
            <Layout>
                <div className="search-container container">
                    <h1>Pokemon finder</h1>
                    <blockquote>El que quiere Pokemons, que los busque.</blockquote>
                    <SearchBar/>
                    <Result/>
                </div>
            </Layout>
        )
    }
}

export default Search;