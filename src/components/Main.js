import React, {useState} from 'react';


export default function Main(props){
    const [isFavorite, setIsFavorite] = useState(true) //usetate for like button
    const [display, setDislay] = useState(props.display)
    

    var like_icon = './images/like.png';
    var unlike_icon = './images/unlike.png';

    //on clcik react re-renders the components to check if value of choice_icon changed
    let choice_icon = isFavorite === false ? like_icon : unlike_icon 

    function toggleFavorite(){
        setIsFavorite(prevState => {return prevState === true ? false : true} )
    }

    const displayContent = display ? {display:'inline-block'} : {display: 'none'}
    return(
        <main className="card" style = {displayContent}>
            <img onClick={toggleFavorite} className="card-like-btn" src={choice_icon} alt="like-icon" />
            <img src={props.data.img} className="card-image skeleton"/>
            <div className="card-info">
                <div>
                    <h3><strong>{props.data.title}</strong></h3>
                    <p>{props.data.host}</p>
                    <p>{props.data.date}</p>
                    <p>{props.data.price}</p>
                </div>

                <div> <p>4.22</p></div>
            </div>
        </main>
    )
} 