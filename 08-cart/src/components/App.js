import React from 'react'
import { useGlobalContext } from './context'
import Navbar from './Navbar'
import CartContainer from './CartContainer'

const App = () => {
    const { dispatch, isLoading } = useGlobalContext();

    const fetchData = async () => {
        const data = await fetch('https://course-api.com/react-useReducer-cart-project');
        const dataJSON = await data.json();
        dispatch({type: 'endLoading',payload: {data: dataJSON}});
    }

    if(isLoading){
        fetchData();
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
