import React from 'react'
import { useGlobalContext } from './context'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const Cart = () => {
    const { dispatch, showCart } = useGlobalContext();
    return (
        <div className={showCart?'cart':'cart hide-cart'}>
            <div className="cart__title">
                your cart
            </div>
            <div className="cart__remove" onClick={()=>dispatch({type:'toggleCart'})}>
                <AiOutlineCloseCircle />
            </div>
            <div className="cart__details">
        
            </div>
        </div>
    )
}

export default Cart
