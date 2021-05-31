import React from 'react'
import { HiShoppingBag } from 'react-icons/hi';
import { useGlobalContext } from './context'

const Navbar = () => {
    const { list } = useGlobalContext();
    let itemCount;
    if(list.length !== 0)
        itemCount = (list.map(item=>item.amount)).reduce((sum,count)=>sum+count)
    else
        itemCount = 0;
    console.log(itemCount);

    return (
        <nav className='nav'>
            <div className="nav__center">
                <div className="nav__header">
                    <h2>Cart</h2>
                </div>
                <div className="nav__icon">
                    <HiShoppingBag className='icon'/>
                    <div className="itemCount">
                        {itemCount}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
