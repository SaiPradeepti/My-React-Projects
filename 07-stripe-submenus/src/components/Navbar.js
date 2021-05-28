import React from 'react'
import logo from '../images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
    const { openSubmenu,closeSubmenu,openSidebar,closeSidebar } = useGlobalContext();
    
    return (
        <nav className='nav'>
            <div className="nav__center">
                <div className="nav__header">
                    <img src={logo} className='nav__logo' alt="stripe" />
                    <button className='btn toggle-btn' onClick={openSidebar}>
                        <FaBars />
                    </button>
                </div>
                <ul className="nav__links">
                    <li><button className="link__btn">products</button></li>
                    <li><button className="link__btn">developers</button></li>
                    <li><button className="link__btn">company</button></li>
                </ul>
                <button className="btn signin__btn">Sign in</button>
            </div>
        </nav>
    )
}

export default Navbar
