import { Form, Input, Button } from 'antd';


const StudentsForm = ({insertStudent}) => {
    return(
        <>
            <h3>Cadastrar Alunos</h3>
                <Form onFinish={insertStudent} style={
                    {
                        display: 'flex',
                        flexDirection:'column',
                        backgroundColor:'white', 
                        padding:'3rem', 
                        borderRadius:'2px',
                        maxWidth:'30rem'
                    }
                }>
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