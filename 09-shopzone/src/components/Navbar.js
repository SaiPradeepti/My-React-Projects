import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { ACTIONS, useGlobalContext } from './context'
import { FaShoppingCart } from 'react-icons/fa'

const Navbar = () => {
    const { dispatch, cart, totalItems, showOverlay } = useGlobalContext();

    useEffect(()=>{
        dispatch({type: ACTIONS.CAL_TOTAL_ITEMS});
    },[cart])

    return (
        <nav className='nav'>
            <Link to='/' className='brand'>
                ShopZone
            </Link>
            <ul className="links">
                <li>
                    <Link to='/' className='link'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/products' className='link'>
                        Products
                    </Link>
                </li>
                <li>
                    <Link to='/about' className='link'>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='/contact' className='link'>
                        Contact
                    </Link>
                </li>
                <li>
                    <div className='cart-icon link' onClick={()=>dispatch({type: ACTIONS.TOGGLE_CART})}>
                        <FaShoppingCart />
                        <div className="itemCount">{totalItems}</div>
                    </div>
                </li>
            </ul>
            <div className="hamburger-icon" onClick={()=>{dispatch({type: ACTIONS.SET_SHOW_OVERLAY})}} style={showOverlay ? {display: 'none'} : {}}>
                <GiHamburgerMenu />
            </div>
            {
                showOverlay && (
                    <div className="overlay">
                        <div className="overlay__container">
                            <ul className="overlay__links">
                            <li onClick={()=>dispatch({type: ACTIONS.SET_HIDE_OVERLAY})}>
                                <Link to='/' className='link'>
                                    Home
                                </Link>
                            </li>
                            <li onClick={()=>dispatch({type: ACTIONS.SET_HIDE_OVERLAY})}>
                                <Link to='/products' className='link'>
                                    Products
                                </Link>
                            </li>
                            <li onClick={()=>dispatch({type: ACTIONS.SET_HIDE_OVERLAY})}>
                                <Link to='/about' className='link'>
                                    About
                                </Link>
                            </li>
                            <li onClick={()=>dispatch({type: ACTIONS.SET_HIDE_OVERLAY})}>
                                <Link to='/contact' className='link'>
                                    Contact
                                </Link>
                            </li>
                            <li onClick={()=>dispatch({type: ACTIONS.SET_HIDE_OVERLAY})}>
                                <div className='cart-icon link' onClick={()=>dispatch({type: ACTIONS.TOGGLE_CART})}>
                                    <FaShoppingCart />
                                    <div className="itemCount">{totalItems}</div>
                                </div>
                            </li>
                        </ul>
                        <div className="close-icon" onClick={()=>dispatch({type: ACTIONS.SET_HIDE_OVERLAY})}>
                            <AiOutlineClose  />
                        </div>
                        </div>
                    </div>
                )
            }
        </nav>
    )
}

export default Navbar
