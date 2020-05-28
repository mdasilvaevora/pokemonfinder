import React from 'react'
import "./EmptyResults.css";
export default function EmptyResults() {
    return (
        <div className="container">
            <a href="https://imgbb.com/">
                <img src="https://i.ibb.co/JdQkc5y/logo.png" className="empty-pokemon" alt="logo" border="0"/>
            </a>
            <h5>No hemos encontrado el pokemon que buscas</h5>
            <p>Tal vez esta más cerca de los que esperas</p>
        </div>
    )
}
