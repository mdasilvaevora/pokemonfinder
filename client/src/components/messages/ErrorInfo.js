import React from 'react'

export default function ErrorInfo() {
    return (
        <div className="container">
            <img src="https://i.ibb.co/C9jyCqz/Pokemon-Transparent-Background.png" 
                className="message"
                alt="Pokemon-Transparent-Background" 
                border="0"/>
            <h5 className="message-text">Error del servidor.</h5>
            <p className="message-text">Vuelva a intentar, porfavor!.</p>
        </div>
    )
}
