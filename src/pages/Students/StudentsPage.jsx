import StudentsList from './components/StudentsList'
import StudentsForm from './components/StudentsForm'
import useData from '../../hooks/useData'
import { useState, useEffect } from 'react'
import { Button } from 'antd'

const StudentsPage = () => {

    const [students, isLoading, operations] = useData('alunos')
    const [isVisible, setVisible] = useState(false)
    const [studentInEdition, setStudentInEdition] = useState(undefined)
    

    const edit = (id) => {
        const loadedStudent = students.find(s => s.id === id)
        setStudentInEdition(loadedStudent)
        setVisible(true)
    }

    const save = (student) => {
        if(student.id){
            operations.update(student)
            return
        }
        delete student.id
        operations.insert(student)
        
    }

    useEffect(()=>{
        if(!isVisible){
            setStudentInEdition(undefined)
        }
    }, [isVisible])


    return (
        <>
            <h1>Gerenciamento de Alunos</h1>
            <Button type={isVisible? 'danger' : 'primary'} onClick={() => setVisible(!isVisible)}>
                {isVisible ? 'Voltar' : 'Adicionar Aluno'}
            </Button>

            { isVisible ? (
                <StudentsForm student={studentInEdition} saveStudent={save} afterInsert={() => setVisible(false)} />
            ) : (
                <StudentsList edit={edit} students={students} isLoading={isLoading} remove={operations.remove} />
            )
            }

        </>
    )
}

export default StudentsPage