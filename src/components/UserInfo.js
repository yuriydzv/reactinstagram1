import React,{Component} from 'react'
import User from './User'

class  UserInfo extends Component{
    render(){
    return (
        <div>
            <User/>
            <h1>{}</h1>
            <span>Verified</span>
            <button>Follow</button>
            <a>
                Posts :
                <span>123</span></a>
            <a>
                 Subscribers :
                <span>123</span></a>
            <a>
                Subscribered :
                <span>123</span></a>
        </div>
    )
}
}

export default UserInfo
