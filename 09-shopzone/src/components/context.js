import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { reducer } from './reducer';
import { useFetch } from './useFetch'

const AppContext = createContext();
const url = 'https://fakestoreapi.com/products';

export function AppProvider({children}){    
    const {data,error} = useFetch(url); 
    const initialState = {
        products: [],
        categories: [],
        cart: [],
        loading: true,
        error: false,
        filter: 'all',
        msgSubmitted: false,
        showOverlay: false,
        iconId: 0,
        formInput: {email:'',textarea:''},
        showCart: false,
    }

    const [state,dispatch] = useReducer(reducer,initialState);

    useEffect(() => {
        if(error)
            dispatch({type:'setErrorTrue'});
    },[error]);

    useEffect(() => {
        if(data.length !== 0)
            dispatch({type:'setProducts',payload: {data : data}});
    },[data]);
    
    return (
        <AppContext.Provider value={{dispatch,...state}}>
            {children}
        </AppContext.Provider>
    )
}

export function useGlobalContext (){
    return useContext(AppContext);
}