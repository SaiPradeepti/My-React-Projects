import React,{ useState, useContext, useEffect, useCallback } from "react";
import { useFetch } from './useFetch'

const AppContext = React.createContext();

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('a');
    const { loading, error, cocktails } = useFetch(url,searchTerm);

    return <AppContext.Provider value={{
        loading,
        cocktails,
        setSearchTerm
    }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }