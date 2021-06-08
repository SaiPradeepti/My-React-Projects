import React, { useEffect } from 'react'
import { useGlobalContext} from './context'
import { Link } from 'react-router-dom'

const Products = () => {
    const { dispatch, products, loading, error} = useGlobalContext();

    if(loading){
        return <div className='loading-msg'>
            <h1>Fetching you the best products...</h1>
        </div>
    }

    if(error){
        return <div className='erro-msg'>
            <h1>Oops! Something went wrong...</h1>
        </div>
    }

    return (
        <div className='products'>
            {
                products.map(item => {
                    const {id,title,image} = item;

                    return (
                        <section key={id} className='product'>
                            <Link to={`/product/${id}`}>
                                <div className="product__image">
                                    <img src={image} alt={title} />
                                </div>
                                <div className="product__title">{title}</div>
                            </Link>
                        </section>
                    )
                })
            }
        </div>
    )
}

export default Products
