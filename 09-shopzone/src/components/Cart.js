import React, { useEffect } from 'react'
import { useGlobalContext, ACTIONS } from './context'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'

const Cart = () => {
    const { dispatch, cart, totalAmount, showCart } = useGlobalContext();

    useEffect(()=>{
        if(localStorage.getItem('cart') !== ''){
            const existingCart = JSON.parse(localStorage.getItem('cart'));
            dispatch({type: ACTIONS.ADD_EXISTING_CART,payload: {existingCart: existingCart}});
        } 
    },[dispatch])

    useEffect(()=>{
        
        if(cart.length !== 0){
            dispatch({type: ACTIONS.CAL_TOTAL_AMOUNT});
            localStorage.setItem('cart', JSON.stringify(cart));
        }            
        if(cart.length === 0)
            localStorage.removeItem('cart')
    },[cart,dispatch]);

    return (
        <div className={showCart?'cart':'cart hide-cart'}>
            <div className="cart__title">
                your cart
            </div>
            <div className="cart__remove" onClick={()=>dispatch({type: ACTIONS.TOGGLE_CART})}>
                <AiOutlineCloseCircle />
            </div>
            {
                cart.length === 0 && <div className="emtpyCart">
                    <div className="cart-msg">
                        your cart is empty!
                    </div>
                </div>
            }
            {   
                cart.length !== 0 && <>
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
                                        <div className="section__removeItem" onClick={()=>dispatch({type: ACTIONS.REMOVE_FROM_CART,payload: {id}})}>
                                        remove
                                        </div>
                                        <div className="section__quantity">
                                            <div className="incIcon" onClick={()=>dispatch({type: ACTIONS.CHANGE_COUNT,payload:{operation:'increment',id: id}})}>
                                                <FaChevronUp />
                                            </div>
                                            <div className="quantity">
                                                {count}
                                            </div>
                                            <div className="decIcon" onClick={()=>dispatch({type: ACTIONS.CHANGE_COUNT,payload:{operation:'decrement',id: id}})}>
                                                <FaChevronDown />
                                            </div>

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="cart__total">
                        <div className="section__total">
                            <div className='title'>total</div>
                            <div className='totalAmout'>$ {totalAmount}</div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Cart
