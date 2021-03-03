import { Table } from 'antd'


const columns = [
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

export default function PublicationsList({publications, isLoading}){
    return(
      <>
        <h3>Lista de Publicações</h3>
         <Table style={{display:'flex',marginRight:'50px', fontWeight:'normal'}} columns={columns} dataSource={publications} loading={isLoading} />
      </>
    )
}
