import React from 'react';

export default function Main(props){
    return(
        <main className="card">
            <div className="card-like-btn">LIKE</div>
            <img src={props.data.img} className="card-image"/>
            <h3><strong>{props.data.title}</strong></h3> <span></span>
            <p>{props.data.desc}</p>
            <p>{props.data.price}</p>
        </main>
    )
} 