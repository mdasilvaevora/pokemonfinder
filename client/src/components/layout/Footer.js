import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="row">
                    <div className="col s6">
                        <span>Hecho por Manu</span>
                    </div>
                    <div className="col s6 right-align">
                        <a className="waves-effect waves-light btn">Link a mi repo</a>
                    </div>
                </div>
            </div>
        )
    }
}
