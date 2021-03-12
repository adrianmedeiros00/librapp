import { Form, Input, Button } from 'antd';


const PublicationsForm = ({insertPublication, afterInsert}) => {

    const whenFinish = (data) => {
        insertPublication(data)
        afterInsert()
    }


    return(
        <>
            <h3>Adicionar Publicação</h3>
                <Form onFinish={whenFinish} 
                style={
                    {
                        display: 'flex',
                        flexDirection:'column',
                        backgroundColor:'white', 
                        padding:'40px', 
                        borderRadius:'2px',
                        maxWidth: '50%'
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
                    <Button type='primary' htmlType='submit' style={{height:'2rem', width:'5rem', marginLeft:'auto'}} >Salvar</Button>
                </Form>
        </>
    )
   
}

export default PublicationsForm