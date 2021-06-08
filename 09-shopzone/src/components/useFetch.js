import { useState, useEffect } from 'react'

export const useFetch = (url) => {
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState([]);
    const [error,setError] = useState(null);
    
    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {

            fetch(url, { signal: abortCont.signal })
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
                if(err.name === 'AbortError'){
                    console.log('Fetch aborted by the user')
                }else{
                setError(err)
                setLoading(false)
                }
            })
            
        },1000)

        return () => {
            console.log('cleanup')
            abortCont.abort();
        }
    },[url])

    return { loading, data, error };
}