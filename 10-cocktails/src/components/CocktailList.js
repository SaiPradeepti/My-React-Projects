import React from 'react'
import Loading from './Loading'
import Cocktail from './Cocktail'
import { useGlobalContext } from '../context'

const CocktailList = () => {
    const { loading, cocktails } = useGlobalContext();
    
    if(loading){
        return <Loading />
    }

    if(cocktails.length < 1){
        return (
            <h2>no cocktails matched your search criteria</h2>
        )
    }


    return (
        <div>
            <h2>cocktail list component</h2>
        </div>
    )
}

export default CocktailList
