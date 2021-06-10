import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useGlobalContext} from './context'
import { Link } from 'react-router-dom'
import Error from './Error'


const ProductDetails = () => {
    const { id } = useParams(); 
    const { dispatch, loading, products} = useGlobalContext();

    if(loading){
        return <div className='loading-msg'>
            <h1>Loading details of selected item..</h1>
        </div>
    }

    return (
        <div className='productDetails'>
            {
                products.map(item => {
                    if(parseInt(item.id) === parseInt(id)){
                        console.log(item)
                        const {id,title,price,description,image} = item;
                        return (
                            <article key={id} className='product'>
                                <div className="product__image">
                                    <div className="img-shadow">
                                        <img src={image} alt={title} />
                                    </div>
                                </div>
                                <div className="product__details">
                                    <div className="title">{title}</div>
                                    <div className="price">$ {price}</div>
                                    <div className="desc">{description}</div>
                                    <div className="dummy">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque commodi molestias earum voluptas qui delectus pariatur dolor repellendus obcaecati quidem, illo ipsam. Nesciunt rerum error repellendus iusto quos sunt architecto. Quia odio quaerat officiis ipsa veritatis architecto suscipit dolorum tempore voluptatibus nesciunt adipisci eaque inventore odit, rem nam unde laudantium!</div>
                                </div>
                            </article>
                        )
                    }
                })
            }{
                products.find(item => item.id === id) === undefined && <div className='error-msg'><p>Product with such an ID doesn't exist. Please checkout other products...</p></div>
            }
        </div>
    )
}

export default ProductDetails
