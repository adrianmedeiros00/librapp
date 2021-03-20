/* eslint-disable */
import { useState, useEffect } from 'react'
import  { servicesCreator }  from '../services/utils/service-utils'

const useData = (collectionName) => {
    const service = servicesCreator(collectionName)
    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        service.list()
        .then( (response) => {
                setIsLoading(false)
                setList(response.docs.map( data => {
                    return { id: data.id, key: data.id, ...data.data() }
                }))
            })
    }, [service])

    const operations = {
        insert: (data) => service.insert(data)
            .then( docRef => setList([...list, { id: docRef.id, key: docRef.id, ...docRef }])),
        remove: (id) => service.remove(id).then( () => {
                setList(list.filter(data => data.id !== id))
            }),
        update: (data) => service.update(data)
            .then(() => {
            setList([...list.filter(dado => dado.id !== data.id), {id: data.id, key: data.id, ...data}])
        }),
        registry: null,
    }

    return [list, isLoading, operations]
}

export default useData

