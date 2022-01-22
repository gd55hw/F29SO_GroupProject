import React from 'react'; 
import './Header.css';

function Header() {
    return (
        /*making the header, we need to divide the header into three parts 
          each part will have items inside of it such as tabs, logo and so on
        */
        <div className="header">
            <div className="header__left">
               <img src="/images/logo.PNG" alt=""></img>
                <div className="SearchBar__input" >
                    <input type="text"></input>
                </div>
            </div>

            <div className="header__middle">
                <a href="Home" className="Header__item">Home</a>
                <a href="MarketPlace" className="Header__item">Market Place</a>
                <a href="DoodleCollab" className="Header__item">Doodle Collab</a>
                <a href="Settings" className="Header__item">Settings</a>
            </div>

            <div className="header__right"></div>
        </div>
    )
}

export default Header