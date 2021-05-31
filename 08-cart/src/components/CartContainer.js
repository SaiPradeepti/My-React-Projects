import React from 'react'
import { useGlobalContext } from './context'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const CartContainer = () => {
    const { dispatch, list, totalAmount } = useGlobalContext();

    if(totalAmount === 0){
        return (
            <section className='cart'>
                <div className="cart__center">
                    <div className="cart__header">
                        <h2>your bag</h2>
                    </div>
                    <div className="emptyCart"><h4>is currently empty</h4></div>
                </div>
            </section>
        )
    }

    return (
        <section className='cart'>
            <div className="cart__center">
                <div className="cart__header">
                    <h2>your bag</h2>
                </div>                 
                    <div className="cart__items">
                        {
                            list.map((item)=>{
                                const {id,amount,img,title,price} = item;
                                return (
                                    <article key={id} className="item">
                                        <div className="item__img">
                                            <img src={img} alt={title} />
                                        </div>
                                        <div className="item__details">
                                            <div className="title">
                                                <h4>{title}</h4>
                                            </div>
                                            <div className="price">
                                                $ {price}
                                            </div>
                                            <div className="remove" onClick={()=>{
                                                dispatch({type: 'REMOVE_ITEM',payload: {id: id}})
                                            }}>
                                                <button>remove</button>
                                            </div>
                                        </div>
                                        <div className="item__amount">
                                            <div className="icon" onClick={()=>dispatch({type: 'INCREASE_AMOUNT',payload: {id: id}})}><FaChevronUp /></div>
                                            {
                                                amount===0 ? dispatch({type: 'REMOVE_ITEM',payload: {id: id}}) : <div className="amount">{amount}</div>              
                                            }                                    
                                            <div className="icon" onClick={()=>dispatch({type: 'DECREASE_AMOUNT',payload: {id: id}})}><FaChevronDown /></div>
                                        </div>
                                    </article>
                                )
                            })
                        }
                        </div>
                    <div className="amountTotal">
                            <h4>Total</h4>
                            <h4>$ {totalAmount.toFixed(2)}</h4>
                        </div>
                    <div className="clear">
                        <button className="btn" onClick={()=>dispatch({type:'EMPTY_CART'})}>clear cart</button>
                    </div>
            </div>
        </section>
    )
}

export default CartContainer
