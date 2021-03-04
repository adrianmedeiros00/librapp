import { useState, useEffect } from 'react'
import servicesCreator from '../services/utils/service-utils'

export default function useData(collectionName){
    const service = servicesCreator(collectionName)
    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => service.list()
        .then( response => {
            setIsLoading(false)
                setList(response.docs.map( data => { 
                    return { id: data.id, key: data.id, ...data.data() }
            }))
        })
    , [])


    const operations = {
        insert: (data) => service.insert(data)
            .then( docRef => 
                setList([...list, { id: docRef.id, key: docRef.id, ...docRef.data() }])
            ),
        remove: null,
        update: null,
        registry: null
    }


    return [list, isLoading, operations]
}

