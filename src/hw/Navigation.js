import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <header>
            <nav>
                <ul className='menu'>
                    <li><Link to='/'>Home</Link></li>
                    <li> <Link to='/Person'>Person</Link></li>
                    <li> <Link to='/City'>City</Link></li>
                    <li> <Link to='/Book'>Book</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation
