import React, {Component} from 'react'
import User from './User'

class Post extends Component {
  render(){
      return(
          <div className="post"> 
            
            <User
                src='https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg' 
                alt='man' 
                name='Elon Mask'
                min/>
                  <img src="ss" alt="ss">
                  </img>
                  <div className="post__name">
                    some account
                  </div>
                  <div className="post__descr">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                  </div>
            
          </div>
        )
  }
}
export default Post;