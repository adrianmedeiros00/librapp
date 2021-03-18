import { db } from '../../firebase.config'

export default function servicesCreator(collectionName){
    const collection = db.collection(collectionName)
    return {
        insert  : (data) => collection.add(data),
        remove  : ( id ) => collection.doc(id).delete(),
        update  : (data) => null,
        registry: ( id ) => collection.doc(id).get(),
        list    : (    ) => collection.get()
    }
}



