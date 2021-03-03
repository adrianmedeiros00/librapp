import { db } from '../../firebase.config'

export const servicesCreator = (collectionName) => {
    const collection = db.collection(collectionName)
    return {
        list    : (    ) => collection.get(),
        registry: ( id ) => collection.doc(id).get(),
        insert  : (data) => null,
        update  : (data) => null,
        remove  : (data) => null
    }
}

export default servicesCreator

