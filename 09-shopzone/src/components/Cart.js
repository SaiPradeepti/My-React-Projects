import React from 'react'
import { useGlobalContext } from './context'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'

const Cart = () => {
    const { dispatch, cart, showCart } = useGlobalContext();
    return (
        <div className={showCart?'cart':'cart hide-cart'}>
            <div className="cart__title">
                your cart
            </div>
            <div className="cart__remove" onClick={()=>dispatch({type:'toggleCart'})}>
                <AiOutlineCloseCircle />
            </div>
            <div className="cart__details">
                {
                    cart.map(item => {
                        const {id, title, price, count} = item;
                        return (
                            <div className="section" key={id}>
                                <div className="section__title">
                                    {title}
                                </div>
                                <div className="section__price">
                                    $ {price}
                                </div>
                                <div className="section__quantity">
                                    <div className="incIcon" onClick={()=>dispatch({type:'changeCount',payload:{operation:'increment',id: id}})}>
                                        <FaChevronUp />
                                    </div>
                                    <div className="quantity">
                                        {count}
                                    </div>
                                    <div className="decIcon">
                                        <FaChevronDown />
                                    </div>
                                    {/* <div className="decIcon" onClick={()=>dispatch({type:'changeCount',payload:{operation:'decrement',id: id}})}>
                                        <FaChevronDown />
                                    </div> */}

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cart
