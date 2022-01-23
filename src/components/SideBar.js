import React from 'react'; 
import './SideBar.css';
import SideBarRow from './SideBarRow';

function SideBar(){
    return(
        <div className='Sidebar'>
            <SideBarRow title="Friends"/>
            <SideBarRow title="Market Place"/>
   
        </div>
    );
}

export default SideBar