import React from 'react'
import { useGlobalContext } from './context'
import Navbar from './Navbar'
import CartContainer from './CartContainer'

const App = () => {
    const { isLoading } = useGlobalContext();

    if(isLoading){
        return (
            <div className='app__loading'>
                <h1>loading...</h1>
            </div>
        )
    }

    return (
            <main>
                <Navbar />
                <CartContainer />
            </main>
        )
    
}

export default App
