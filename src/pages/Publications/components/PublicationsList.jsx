import { Table, Button } from 'antd'

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

const PublicationsList = ({ publications, isLoading, remove }) => {

  const columns = [
    ...startingColumns,
    {
      title: 'Ações',
      dataIndex: 'acoes',
      key: 'acoes',
      render: (_,publications) => 
        <Button type='danger' onClick={ () => remove(publications.key) }>Excluir</Button>
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