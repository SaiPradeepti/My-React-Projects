import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='nav'>
            <Link to='/' className='brand'>
                ShopZone
            </Link>
            <ul className="links">
                <li>
                    <Link to='/' className='link'>
                        Products
                    </Link>
                </li>
                <li>
                    <Link to='/' className='link'>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='/' className='link'>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
