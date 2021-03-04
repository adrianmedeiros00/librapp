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

 const StudentsList = ({students, isLoading}) => {
    return(
        <>
            <h3>Lista de Alunos</h3>
            <Table  columns={columns} dataSource={students} loading={isLoading} style={{fontWeight:'normal'}}/>
        </>
    )
}

export default StudentsList