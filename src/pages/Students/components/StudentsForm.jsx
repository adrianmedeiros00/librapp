import { Form, Input, Button } from 'antd';


export default function StudentsForm(){
    return(
        <>
            <h3>Cadastrar Alunos</h3>
                <Form style={{display: 'block',flexDirection:'column',backgroundColor:'white', padding:'3rem', borderRadius:'2px', marginRight:'60%'}}>
                    <Form.Item label="Nome" name="name">
                        <Input />
                    </Form.Item>
                    <Form.Item label="E-mail" name="email">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Telefone" name="phone">
                        <Input />
                    </Form.Item>
                    <Button type='primary' htmlType='submit'>Salvar</Button>
                </Form>
        </>
    )
   
}