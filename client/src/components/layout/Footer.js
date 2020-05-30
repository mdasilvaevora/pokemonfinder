import React, { Component } from 'react'
import "./footer.css";

export default class Footer extends Component {
    render() {
        return (
            <footer class="footer-container page-footer">
                <div className="footer-copyright">
                    <div className="container">
                        @2020 Manuel da Silva Evora
                        <a class="grey-text text-lighten-4 right"
                            href="https://github.com/mdasilvaevora/pokemonfinder">
                            Link a mi repo
                        </a>
                    </div> 
                </div>
            </footer>
        )
    }
}
