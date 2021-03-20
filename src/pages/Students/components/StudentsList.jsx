import { Table, Button, Popconfirm } from 'antd'


const startingColumns = [
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

const StudentsList = ({ students, isLoading, remove, edit}) => {
  const columns = [
    ...startingColumns,
    {
      title: 'Ações',
      dataIndex: 'acores',
      key: 'acoes',
      render: (_, students) =>
      <>
        <Popconfirm title='Tem certeza que deseja excluir esse aluno?' onConfirm={() => remove(students.key)}>
          <Button type='danger'>Excluir</Button>
        </Popconfirm>
          <Button type='primary' onClick={() => edit(students.key)} style={{marginLeft:'20px'}}>Editar</Button>
      </>
    }
  ]

  return (
    <>
      <h3>Lista de Alunos</h3>
      <Table
        columns={columns}
        dataSource={students}
        loading={isLoading}
        style={{ fontWeight: 'normal' }} />
    </>
  )
}

export default StudentsList