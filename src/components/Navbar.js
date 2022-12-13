import React from 'react';


export default function Navbar(props){
    return(
            <nav className="nav">
                <button>
                    <img 
                    onClick={() => props.toggleHandler(props.desc)}
                    src={`../images/${props.img}`}
                    className="navbar-icon" alt="icon"/>
                </button> <br />
                
                <p className="navbar-text"> {props.desc}</p>
            </nav>
        )
    }

/* const data = mainData.map((item) => {
    const{category} = item
    return (category)
})
function Tap(){

if (data.category.includes(props.text)){
    console.log(data.category)
}
   
} */