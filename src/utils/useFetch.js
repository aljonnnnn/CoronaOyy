import { useState, useEffect } from 'react'

const useFetch = (url, country) => {
    const [data, setData] = useState()
    const [pending, setPending] = useState(true)
    const [error, setError] = useState(null)
    if (country) {
        url +=  country
    }

    useEffect( () => {
        const abortCont = new AbortController();

        setData(null)
        setPending(true)
        fetch(url, { signal: abortCont.signal})
        .then(res => {
            if (!res.ok) { // error coming back from server
                throw Error('could not fetch the data for that resource');
            } 

            return res.json();
        })
        .then(data => {
            setData(data)
            setPending(false)
        })
        .catch(err => {
            if (err.name === 'AbortError') {
                console.log('fetch aborted')
              } else {
                // auto catches network / connection error
                setPending(false);
                console.log(err.message)
                setError(err.message)
              }
        })

        // return (() => console.log('clean up'))
        return () => abortCont.abort();

    }, [url])

    return { data, pending, error }
}

export default useFetch