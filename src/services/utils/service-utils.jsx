import { db } from '../../firebase.config'

export default function servicesCreator(collectionName){
    const collection = db.collection(collectionName)
    return {
        insert  : (data) => collection.add(data),
        remove  : (data) => null,
        update  : (data) => null,
        registry: ( id ) => collection.doc(id).get(),
        list    : (    ) => collection.get()
    }
}



