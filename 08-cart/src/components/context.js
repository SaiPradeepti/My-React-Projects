import React, { createContext, useContext, useReducer } from 'react';
import { reducer } from './reducer';

const AppContext = createContext();


export const AppProvider = ({children}) => {
    const initialState = {
        isLoading : true,
        list: [],
        totalAmount: 2199.96,
    }
    const [state,dispatch] = useReducer(reducer,initialState); 

    return(
        <AppContext.Provider value={{
        dispatch,
        isLoading:state.isLoading,
        list:state.list,
        totalAmount: state.totalAmount
        }}>
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}
