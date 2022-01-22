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
                    <input placeholder="Search mashup" type="text"></input>
                </div>
            </div>

            {/*Here I'm declaring the bottons which will take us to other pages*/} 
            <div className="header__middle">
                <a href="Home" className="Header__item">Home</a>
                <a href="MarketPlace" className="Header__item">Market Place</a>
                <a href="DoodleCollab" className="Header__item">Doodle Collab</a>
                <a href="Settings" className="Header__item">Settings</a>
            </div>

            {/*For the profile picture/username...still need to find out to have a picture*/} 
            <div className="header__right">
                <div className="profile_image">
                    <h4>Magik</h4>
                </div>
            </div>
        </div>
    )
}

export default Header