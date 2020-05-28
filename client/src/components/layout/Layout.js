import React, { Component } from 'react'

import Footer from './Footer';

export default class Layout extends Component {
    render() {
        return (
            <div className="app-root">
                <header className="app-header"> </header>
                <main className="app-main">
                    {this.props.children}
                </main>
                <Footer/>
                
            </div>
        )
    }
}
