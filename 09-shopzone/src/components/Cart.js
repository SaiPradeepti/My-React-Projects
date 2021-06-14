import React from 'react'
import { useGlobalContext } from './context'

const Cart = () => {
    const { dispatch, showCart } = useGlobalContext();
    return (
        <div className="cart__container">
            <div className={showCart?'cart':'cart hide-cart'}>
            hello
        </div>
        </div>
    )
}

export default Cart
