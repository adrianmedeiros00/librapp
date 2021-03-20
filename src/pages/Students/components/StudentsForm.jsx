import { Form, Input, Button } from 'antd';
import { useEffect } from 'react'

const StudentsForm = ({student, saveStudent, afterInsert}) => {

    const [form] = Form.useForm()

    useEffect(()=>{
        form.setFieldsValue(student)
    }, [student])


    const whenFinish = (data) => {
        saveStudent(data)
        afterInsert()
    }


    return(
        <>
            <h3>{ student ? `Editando ${student.name}` : 'Novo(a) Aluno'}</h3>
                <Form form={form} onFinish={whenFinish} style={
                    {
                        display: 'flex',
                        flexDirection:'column',
                        backgroundColor:'white', 
                        height:'100%',
                        borderRadius:'2px',
                        padding: '10px',
                        maxWidth: '30rem',
                        alignItens: 'center'
                    }
                }>
                      <Form.Item name='id'>
                        <Input type='hidden' />
                    </Form.Item>

                    <Form.Item label="Nome" name='name'>
                        <Input />
                    </Form.Item>
                    <Form.Item label="E-mail" name='email'>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Telefone" name="phone">
                        <Input />
                    </Form.Item>
                    <Button type='primary' htmlType='submit'  style={{height:'2rem', width:'5rem', marginLeft:'auto'}}>Salvar</Button>
                </Form>
        </>
    )
   
}
export default StudentsForm