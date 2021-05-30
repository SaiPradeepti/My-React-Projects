import React from 'react'
import { useGlobalContext } from './context'

const CartContainer = () => {
    const { list } = useGlobalContext();

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
                                <div className="item__details"></div>
                                <div className="item__amount"></div>
                            </article>
                        )
                    })
                }
                </div>
            </div>
        </section>
    )
}

export default CartContainer
