import React, { useReducer } from 'react'; 
import './SideBar.css';
import SideBarRow from './SideBarRow';

function SideBar(){
    return(
        <div className='Sidebar'>
            <SideBarRow title={useReducer.displayName}/>
            <SideBarRow title="Friends"/>
            <SideBarRow title="Market Place"/>
            <SideBarRow title="videos"/>
            <SideBarRow title="Library"/>
   
        </div>
    );
}

export default SideBar