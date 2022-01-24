import React from 'react'; 
import  { Link }  from 'react-router-dom';
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
                <Link to="/" className="Header__item">Home</Link>
                <Link to="MarketPlace" className="Header__item">Market Place</Link>
                <Link to="DoodleCollab" className="Header__item">Doodle Collab</Link>
                <Link to="Settings" className="Header__item">Settings</Link> 
                <Link to="Library" className="Header__item">Library</Link> 
            </div>

            {/*For the profile picture/username...still need to find out to have a picture*/} 
            <div className="header__right">
                <div className="profile_image">
                    <h4>Magik</h4>
                </div>
                <Link to="Login" className="Header__item">Login</Link>
                <Link to="Signup" className="Header__item">Sign up</Link>
            </div>
        </div>
    )
}

export default Header