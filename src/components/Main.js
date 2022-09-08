import React, {useState} from 'react';


export default function Main(props){
    const [isFavorite, setIsFavorite] = useState(true) //usetate for like button

    var like_icon = './images/like.png';
    var unlike_icon = './images/unlike.png';

    let choice_icon = isFavorite === false ? like_icon : unlike_icon 
    function toggleFavorite(){
        setIsFavorite(prevState => {return prevState === true ? false : true} )
    }
    //on clcik react re-renders the components to check if value of choice_icon changed
    return(
        <main className="card">
            <img onClick={toggleFavorite} className="card-like-btn" src={choice_icon} alt="like-icon" />
            <img src={props.data.img} className="card-image"/>
            <h3><strong>{props.data.title}</strong></h3> <span></span>
            <p>{props.data.desc}</p>
            <p>{props.data.price}</p>
        </main>
    )
} 