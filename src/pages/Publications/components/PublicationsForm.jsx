import { Form, Input, Button } from 'antd';


export default function PublicationsForm(){
    return(
        <>
            <h3>Adicionar Publicações</h3>
                <Form style={{backgroundColor:'white', marginRight:'60%', padding:'3rem', borderRadius:'2px'}}>
                    <Form.Item label="Título" name="title">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Autor" name="author">
                        <Input />
                    </Form.Item>
                    <Form.Item label="ISBN" name="isbn">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Edição" name="edition">
                        <Input />
                    </Form.Item>
                    <Button type='primary' htmlType='submit'>Salvar</Button>
                </Form>
        </>
    )
   
}