import PublicationsForm from './components/PublicationsForm'
import PublicationsList from './components/PublicationsList'
import useData from '../../hooks/useData'

export default function PublicationsPage(){

    const [publications, isLoading] = useData('publicacoes')
    
    return(
        <>
                <h1>Gerenciamento de Publicações</h1>
                <PublicationsList publications={publications} isLoading={isLoading}/>
                <PublicationsForm />
        </>       
    ) 
}
