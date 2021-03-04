import { db } from '../../firebase.config'

export const servicesCreator = (collectionName) => {
    const collection = db.collection(collectionName)
    return {
        insert  : (data) => collection.add(data),
        remove  : (data) => null,
        update  : (data) => null,
        registry: ( id ) => collection.doc(id).get(),
        list    : (    ) => collection.get()
    }
}

export default servicesCreator

