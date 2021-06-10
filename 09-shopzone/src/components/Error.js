import React from 'react'
import { Link } from 'react-router-dom'
import { FaChevronLeft } from 'react-icons/fa'

const Error = () => {
    return (
        <div className='error'>
            <div className="error__content">
                <h1>Oops! you landed on a wrong page</h1>
            </div>
            <div className="error__btn">
                <Link to='/products'>
                    <div className="btn">
                        <div className="line"></div>                   
                        <FaChevronLeft />
                        Back to Products
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Error
