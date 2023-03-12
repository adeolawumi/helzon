import React from 'react'
import './NavBar.css'
import Burger from './Burger'
import icon from '../../assets/Logo.png'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div className='navbar'>
            <Link to="/" className='link'><img src={icon}/></Link>
            <Burger/>
        </div>
    )
}

export default Navbar
