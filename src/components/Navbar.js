import React from 'react';

export default function Navbar(props){
    return(
        <nav className="nav">
            <button>
                <img src={`../images/${props.img}`} className="navbar-icon" alt="icon"/>
            </button> <br />
            
            <p className="navbar-text"> {props.text}</p>
        </nav>
    )
}