import { useState, useEffect} from 'react'
import servicesCreator from '../services/utils/service-utils'

export default function useData(collectionName){
    const service = servicesCreator(collectionName)
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => service.list().then( response => {
        setIsLoading(false)
            setData(response.docs.map( data => { 
                return { id: data.id, key: data.id, ...data.data() }
            }))
        })
    ,[])

  

    return [data, isLoading]
}

