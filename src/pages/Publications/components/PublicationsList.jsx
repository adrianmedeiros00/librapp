import { Table, Button, Popconfirm } from 'antd'

const startingColumns = [
  {
    title: 'Título',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Autor',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: 'Edição',
    dataIndex: 'edition',
    key: 'edition',
  },
  {
    title: 'ISBN',
    dataIndex: 'isbn',
    key: 'isbn',
  }
]

const PublicationsList = ({ publications, isLoading, edit, remove }) => {

  const columns = [
    ...startingColumns,
    {
      title: 'Ações',
      dataIndex: 'acoes',
      key: 'acoes',
      render: (_,publications) =>
      <> 
      <Popconfirm title='Tem certeza que deseja excluir essa publicação?' onConfirm={() => remove(publications.key)}>
        <Button type='danger'>Excluir</Button>
      </Popconfirm>
      <Button type='primary' onClick={() => edit(publications.key)} style={{marginLeft:'20px'}} >Editar</Button>
      </>
    }
  ]

  return (
    <>
      <h3>Lista de Publicações</h3>
      <Table
        columns={columns}
        dataSource={publications}
        loading={isLoading}
        style={{ fontWeight: 'normal' }}
      />
    </>
  )
}

export default PublicationsList