import { useState, useEffect } from 'react'

export const useFetch = (url) => {
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState([]);
    const [error,setError] = useState(null);
    
    useEffect(() => {
        setTimeout(() => {

            fetch(url)
            .then(response => {
                if(!response.ok)
                    throw Error("couldn't fetch the data from the source")
                return response.json()
            })
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err)
                setLoading(false)
            })
            
        },1000)
    },[url])

    return { loading, data, error };
}