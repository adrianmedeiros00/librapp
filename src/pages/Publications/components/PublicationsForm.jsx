import { Form, Input, Button } from 'antd';


const PublicationsForm = ({insertPublication}) => {
    return(
        <>
            <h3>Adicionar Publicações</h3>
                <Form onFinish={insertPublication} 
                style={
                    {
                        backgroundColor:'white', 
                        padding:'3rem',
                        borderRadius:'2px', 
                        display:'block', 
                        flexDirection:'column',
                        marginRight:'60%'
                    }
                }>
                    <Form.Item label="Título" name='title'>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Autor" name="author">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Edição" name="edition">
                        <Input />
                    </Form.Item>
                    <Form.Item label="ISBN" name="isbn">
                        <Input />
                    </Form.Item>
                    <Button type='primary' htmlType='submit'>Salvar</Button>
                </Form>
        </>
    )
   
}

export default PublicationsForm