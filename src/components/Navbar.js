import React from 'react';

export default function Navbar(props){
    return(
        <nav>
            <button>
                <img src={`../images/${props.img}`} className="header-icon" alt="icon"/>
            </button> <br />
            <p> {props.text}</p>
        </nav>
    )
}