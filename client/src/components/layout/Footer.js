import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="row">
                <div className="col s6">
                    <span>Hecho por Manu</span>
                </div>
                <div className="col s6 push-s6">
                    <a className="waves-effect waves-light btn">Link a mi repo</a>
                </div>
            </div>
        )
    }
}
