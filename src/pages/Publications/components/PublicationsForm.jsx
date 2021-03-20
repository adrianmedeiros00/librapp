import { Form, Input, Button } from 'antd';
import { useEffect } from 'react'

const PublicationsForm = ({publication, savePublication, afterInsert}) => {
    
    const [form] = Form.useForm()

    useEffect(()=>{
        form.setFieldsValue(publication)
    }, [publication])


    const whenFinish = (data) => {
        savePublication(data)
        afterInsert()
    }


    return(
        <>
            <h3>{ publication ? `Editando ${publication.title}` : 'Nova Publicação'}</h3>
                <Form form={form} onFinish={whenFinish} 
                style={
                    {
                        display: 'flex',
                        flexDirection:'column',
                        backgroundColor:'white', 
                        padding:'10px', 
                        borderRadius:'2px',
                        maxWidth: '30rem',
                    }
                }>
                    <Form.Item name='id'>
                        <Input type='hidden' />
                    </Form.Item>

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