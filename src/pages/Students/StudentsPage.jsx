import StudentsList from './components/StudentsList'
import StudentsForm from './components/StudentsForm'
import useData from '../../hooks/useData'


export default function StudentsPage(){

    const [students, isLoading] = useData('alunos')

    return(
        <>
            <h1>Gerenciamento de Alunos</h1>
            <StudentsList students={students} isLoading={isLoading}/>
            <StudentsForm />
        </>
    )
}