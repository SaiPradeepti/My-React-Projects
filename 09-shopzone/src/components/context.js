import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { reducer } from './reducer';
import { useFetch } from './useFetch'

const AppContext = createContext();
const url = 'https://fakestoreapi.com/products';

export const ACTIONS = {
    SET_ERROR_TRUE: 'set-error-true',
    SET_PRODUCTS: 'set-products',
    SET_FILTER: 'set-filter',
    SET_MSG_SUBMITTED: 'set-msg-submitted-true',
    SET_ICON_ID: 'set-icon-id',
    SET_SHOW_OVERLAY: 'set-show-overlay',
    SET_HIDE_OVERLAY: 'set-hide-overlay',
    SET_FORM_INPUT: 'set-form-input',
    TOGGLE_CART: 'toggle-cart',
    ADD_TO_CART: 'add-to-cart',
    REMOVE_FROM_CART: 'remove-from-cart',
    CHANGE_COUNT: 'change-count',
    CAL_TOTAL_ITEMS: 'cal-total-items-cart',
    CAL_TOTAL_AMOUNT: 'cal-total-amount-cart',
    ADD_EXISTING_CART: 'add-existing-cart',
}

export function AppProvider({children}){    
    const {data,error} = useFetch(url); 
    const initialState = {
        products: [],
        categories: [],
        cart: [],
        totalItems: 0,
        totalAmount: 0,
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
            dispatch({type: ACTIONS.SET_ERROR_TRUE});
    },[error]);

    useEffect(() => {
        if(data.length !== 0)
            dispatch({type: ACTIONS.SET_PRODUCTS,payload: {data : data}});
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