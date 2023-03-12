import React from 'react'
import { Link } from 'react-router-dom'

function MenuDropdown() {
  return (
    <div className='MenuDropdown'>
        <div className='MenuDropdownBackground'>
            <div className='borderparting'></div>
            <div className='borderparting'></div>
            <div className='borderparting'></div>
            <div className='borderparting'></div>
            <div></div>
        </div>
        <div className='MenuText'>
            <h4 className='menu'>Menu</h4>
            <h4>01</h4><Link to="/about" className='link'><h1>About</h1></Link>
            <h4>02</h4><Link to="/projects" className='link'><h1>Projects</h1></Link>
            <h4>03</h4><Link to="/contact" className='link'><h1>Contacts</h1></Link>
            <h4>04</h4><Link to='/insights' className='link'><h1>News and Insights</h1></Link>
            <h4>05</h4><Link to='/' className='link'><h1>Home</h1></Link>
        </div>
    </div>
  )
}

export default MenuDropdown