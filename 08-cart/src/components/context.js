import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { reducer } from './reducer';

const AppContext = createContext();


export const AppProvider = ({children}) => {
    const initialState = {
        isLoading : true,
        list: [],
        totalAmount: 0,
        itemCount: 0,
    }
    const [state,dispatch] = useReducer(reducer,initialState);  

    const fetchData = async () => {
        const data = await fetch('https://course-api.com/react-useReducer-cart-project');
        const dataJSON = await data.json();
        dispatch({type: 'END_LOADING',payload: {data: dataJSON}});
    }

    useEffect(()=>{
        fetchData();
    },[])

    useEffect(()=>{
        dispatch({type: 'GET_TOTALS'});
    },[state.list])

    return(
        <AppContext.Provider value={{
        dispatch,
        ...state,
        }}>
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}
