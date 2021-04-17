import { useState, useEffect } from 'react'

const useFetch = (url, country) => {
    const [data, setData] = useState()
    if (country) {
        url +=  country
    }

    useEffect( () => {
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setData(data)
        })

    }, [url])

    return { data }
}

export default useFetch