import React, { useEffect, useState } from 'react'; 
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';


function Feed(){
    return(
        <div className='feed'>
            <MessageSender />
            <Post 
            message="this works"
            username='me'
            //image={image}
            />
        </div>
    );
}

export default Feed 