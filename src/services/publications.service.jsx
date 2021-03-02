import { servicesCreator } from './utils/service-utils'

export const {
    list: publicationsList,
    registry: getPublication,
    insert: insertPublication,
    update: updatePublication,
    remove: removePublication
} = servicesCreator('publicacoes')

