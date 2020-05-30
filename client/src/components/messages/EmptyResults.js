import React from 'react'
import "./Messages.css";

export default function EmptyResults() {
    return (
        <div className="container">
            <img src="https://i.ibb.co/JdQkc5y/logo.png" className="message" alt="logo" border="0"/>
            <h5 className="message-text">No hemos encontrado el pokemon que buscas.</h5>
            <p className="message-text">Busca a tus alrededores, tal vez esta más cerca de los que esperas.</p>
        </div>
    )
}
