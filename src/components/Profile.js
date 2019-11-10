import React from 'react'
import User from './User'
import Palette from './Palette'

const Profile = () =>{
    return (
        <div className="container profile">
            <User
                src='https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg' 
                alt='man' 
                name='Elon Mask'
                />
            <Palette/>
        </div>
    )
}

export default Profile;
