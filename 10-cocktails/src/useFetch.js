import React,{ useState, useEffect } from 'react'

export const useFetch = (url) => {
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    const [data,setData] = useState([]);

    useEffect(() => {
        
        setTimeout(()=>{
            setLoading(true);
            fetch(url)
                .then(response =>{
                    if(!response.ok)
                        throw Error("Couldn't fetch the dtata from the source")
                    return response.json()
                })
                .then(jsonData => {
                        console.log(jsonData);
                        setData(jsonData);
                    // else{
                    //     setCocktails([]);
                    // }
                    setLoading(false);
                })
                .catch(error => {
                    setLoading(false);
                    setError(error.msg);
                })
        },1000);
        
    }, [url])

    return { loading, error, data };
}