import React from 'react'
import "./Messages.css";

export default function EmptyResults() {
    return (
        <div className="container">
            <a >
                <img src="https://i.ibb.co/JdQkc5y/logo.png" className="message" alt="logo" border="0"/>
            </a>
            <h5>No hemos encontrado el pokemon que buscas.</h5>
            <p>Busca a tus alrededores, tal vez esta más cerca de los que esperas.</p>
        </div>
    )
}
