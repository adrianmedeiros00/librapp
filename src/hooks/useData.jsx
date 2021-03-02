import { useState, useEffect} from 'react'

export default function useData(service){
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => service().then( response => {
        setIsLoading(false)
            setData(response.docs.map( data => { 
                return { id: data.id, key: data.id, ...data.data() }
            }))
        })
    ,[])

    return [data, isLoading]
}

