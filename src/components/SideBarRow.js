import React from 'react';
import './SideBarRow.css'; 

// adding props so I can pass in different atributes in SideBar class
function SideBarRow(props){
    return (
        <div className='SideBarRow'>
            <p>{props.title}</p>
        </div>
    );
}

export default SideBarRow