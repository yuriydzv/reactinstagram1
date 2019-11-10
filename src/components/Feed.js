import React from 'react'
import Posts from './Posts';
import Users from './Users';

 function Feed() {
    return (
        <div className="container feed">
            <Posts/>
            <Users/>
        </div>
    )
}
export default Feed;