import { Table } from 'antd'


const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Telefone',
      dataIndex: 'phone',
      key: 'phone',
    }
  ]

export default function StudentsList({students, isLoading}){
    return(
        <>
            <h3>Lista de Alunos</h3>
            <Table style={{display:'flex',marginRight:'50px', fontWeight:'normal'}} columns={columns} dataSource={students} loading={isLoading} />
        </>
    )
}