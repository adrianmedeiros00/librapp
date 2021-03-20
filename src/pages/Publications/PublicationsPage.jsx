import PublicationsForm from './components/PublicationsForm'
import PublicationsList from './components/PublicationsList'
import useData from '../../hooks/useData'
import { useEffect, useState } from 'react'
import { Button } from 'antd'

const PublicationsPage = () => {

    const [publications, isLoading, operations] = useData('publicacoes')
    const [isVisible, setVisible] = useState(false)
    const [publicationInEdition, setPublicationInEdition] = useState(undefined)
    


    const edit = (id) => {
        const loadedPublication = publications.find(p => p.id === id)
        setPublicationInEdition(loadedPublication)
        setVisible(true)
    }

    const save = (publication) => {
        if(publication.id){
            operations.update(publication)
            return
        }
        delete publication.id
        operations.insert(publication)
        
    }

    useEffect(()=>{
        if(!isVisible){
            setPublicationInEdition(undefined)
        }
    }, [isVisible])


    return (
        <>
            <h1>Gerenciamento de Publicações</h1>
            <Button type={isVisible? 'danger' : 'primary'} onClick={() => setVisible(!isVisible)}>
                {isVisible ? ' Voltar ' : 'Adicionar Publicação'}
            </Button>

            { isVisible ? (
                <PublicationsForm publication={publicationInEdition} savePublication={save} afterInsert={() => setVisible(false)} />
            ) : (
                <PublicationsList edit={edit} publications={publications} isLoading={isLoading} remove={operations.remove} />
            )
            }

        </>
    )
}

export default PublicationsPage