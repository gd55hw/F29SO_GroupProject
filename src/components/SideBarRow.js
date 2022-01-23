import React from 'react';
import './SideBarRow.css'; 

// adding props so I can pass in different atributes in SideBar class
function SideBarRow({src, title }){
    return (
        <div className='SideBarRow'>
            {src}
            <h4>{title}</h4>
        </div>
    );
}

export default SideBarRow