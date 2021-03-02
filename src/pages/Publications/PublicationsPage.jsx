import PublicationsForm from './components/PublicationsForm'
import PublicationsList from './components/PublicationsList'


export default function PublicationsPage(){
    return(
        <>
            <h1>Gerenciamento de Publicações</h1> 
                <PublicationsList/>
                <PublicationsForm/>
        </>       
    ) 
}
