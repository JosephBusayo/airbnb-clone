import React from 'react';

export default function Header(){
    return(
        <header className="header">
            <img src="./images/logo.png" className="logo" />

            <div className="header-btn-container">
                <button className="header-btn"><strong>Anywhere</strong></button>
                <button className="header-btn"><strong>Any week</strong></button>
                <button className="header-btn no-right-border">
                    Add guests <img src="./images/search-icon.png" className="search-icon" />
                </button>
            </div>

            <div className="header-text">
                <button className="header-btn no-right-border">Become a Host</button>
                <button className="header-btn no-right-border">
                    <img src="./images/globe-icon.png" className="header-icon"/>
                </button>
                <button className="header-btn no-right-border">
                    <img src="./images/nav-icon.png" className="header-icon"/>
                </button>
            </div>
        </header>
    )
}