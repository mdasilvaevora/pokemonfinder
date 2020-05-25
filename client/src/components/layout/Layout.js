import React, { Component } from 'react'

import Search from '../search/Search';
import Footer from './Footer';

export default class Layout extends Component {
    render() {
        return (
            <div className="app-container container">
                <Search/>
                <Footer/>
            </div>
        )
    }
}
