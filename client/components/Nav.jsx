import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
    <div className = 'title'>
        <h2>Pet Reggie</h2>
        <div className = 'navmenu'>    
            <h3><Link to="/" className={'navoptions'}>Home</Link></h3>
            <h3>Register</h3>
            <h3>Update</h3>
            <h3>Remove</h3>
        </div>
    </div>
    )
}
export default Nav

