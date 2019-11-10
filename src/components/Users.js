import React from 'react'
import User from './User'

function Users() {
    return (
        <div className='right'>
            <User
                src='https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg' 
                alt='man' 
                name='Elon Mask'
                />
            <div className="users__block">
            <User
                src='https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg' 
                alt='man' 
                name='Elon Mask'
                min/>
            <User
                src='https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg' 
                alt='man' 
                name='Elon Mask'
                min/>
            <User
                src='https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg' 
                alt='man' 
                name='Elon Mask'
                min/>
                <User
                src='https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg' 
                alt='man' 
                name='Elon Mask'
                min/>
            </div>    
        </div>
    )
}
export default Users;
