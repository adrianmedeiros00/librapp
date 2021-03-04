import StudentsList from './components/StudentsList'
import StudentsForm from './components/StudentsForm'
import useData from '../../hooks/useData'


const StudentsPage = () => {

    const [students, isLoading, operations] = useData('alunos')

    return(
        <>
            <h1>Gerenciamento de Alunos</h1>
            <StudentsList students={students} isLoading={isLoading}/>
            <StudentsForm insertStudent={operations.insert} />
        </>
    )
}

export default StudentsPage