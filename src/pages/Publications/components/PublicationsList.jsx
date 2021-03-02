import  useData  from '../../../hooks/useData'
import { publicationsList } from '../../../services/publications.service'
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

export default function PublicationsList(){

    const [publications, isLoading] = useData(publicationsList)

    return(
      <>
        <h3>Lista de Publicações</h3>
         <Table style={{marginRight:'50px', fontWeight:'normal'}} columns={columns} dataSource={publications} loading={isLoading} />
      </>
    )
}
