import React from 'react'; 
import './Feed.css';
import MessageSender from './MessageSender';


function Feed(){
    return(
        <div className='feed'>
            <MessageSender />
            {/* MessageSender */}
        </div>
    );
}

export default Feed 