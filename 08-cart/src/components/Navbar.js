import React from 'react'
import { HiShoppingBag } from 'react-icons/hi';
import {IconContext} from "react-icons";

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className="nav__center">
                <div className="nav__header">
                    <h2>Cart</h2>
                </div>
                <div className="nav__icon">
                    <HiShoppingBag className='icon'/>
                    <div className="itemCount">
                        0
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
