import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
    <div className = 'title'>
        <h2>Pet Reggie</h2>
        <div className = 'navmenu'>    
            <h3><Link to="/" className={'navoptions'}>Home</Link></h3>
            <h3><Link to="/register" className={'navoptions'}>Register</Link></h3>
            <h3><Link to="/owners" className={'navoptions'}>Owners</Link></h3>
            <h3><Link to="/update" className={'navoptions'}>Update</Link></h3>
            <h3><Link to="/remove" className={'navoptions'}>Remove</Link></h3>
        </div>
    </div>
    )
}
export default Nav

