import React from 'react'; 
import './Header.css';

function Header() {
    return (
        /*making the header, we need to divide the header into three parts 
          each part will have items inside of it such as tabs, logo and so on
        */
        <div className="header">
            <div className="header__left"></div>

            <div className="header__middle"></div>

            <div className="header__right"></div>
        </div>
    )
}

export default Header