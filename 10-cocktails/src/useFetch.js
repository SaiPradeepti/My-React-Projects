import React,{ useState, useEffect } from 'react'

export const useFetch = (url,searchTerm) => {
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    const [cocktails,setCocktails] = useState([]);

    useEffect(() => {

        setTimeout(()=>{
            setLoading(true);
            console.log(`${url}${searchTerm}`)
            fetch(`${url}${searchTerm}`)
                .then(response =>{
                    if(!response.ok)
                        throw Error("Couldn't fetch the dtata from the source")
                    return response.json()
                })
                .then(data => {
                    const { drinks } = data;
                    if(drinks){
                        setCocktails(drinks);
                    }
                    else{
                        setCocktails([]);
                    }
                    setLoading(false);
                })
                .catch(error => {
                    setLoading(false);
                    setError(error.msg);
                })
        },1000);
        
    }, [url,searchTerm])

    return { loading, error, cocktails };
}