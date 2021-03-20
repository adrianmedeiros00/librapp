import { db } from '../../firebase.config'

export const servicesCreator = (collectionName) => {
    const collection = db.collection(collectionName)
    return {
        list    : (    ) => collection.get(),
        insert  : (data) => collection.add(data),
        remove  : ( id ) => collection.doc(id).delete(),
        update  : (data) => {
            const id = data.id
            const dataCopy = {...data}
            delete dataCopy.id
            return collection.doc(id).update(dataCopy)
        },
        registry: ( id ) => collection.doc(id).get()
    }
}



