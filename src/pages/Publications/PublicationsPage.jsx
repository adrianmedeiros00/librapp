import PublicationsForm from './components/PublicationsForm'
import PublicationsList from './components/PublicationsList'
import useData from '../../hooks/useData'
import { useState } from 'react'
import { Button } from 'antd'

const PublicationsPage = () => {

    const [publications, isLoading, operations] = useData('publicacoes')
    const [isVisible, setVisible] = useState(false)

    return (
        <>
            <h1>Gerenciamento de Publicações</h1>
            <Button type={isVisible? 'ghost' : 'primary'} onClick={() => setVisible(!isVisible)}>
                {isVisible ? '<< Voltar' : 'Adicionar Publicação'}
            </Button>

            { isVisible ? (
                <PublicationsForm insertPublication={operations.insert} afterInsert={() => setVisible(false)} />
            ) : (
                <PublicationsList publications={publications} isLoading={isLoading} remove={operations.remove} />
            )
            }

        </>
    )
}

export default PublicationsPage