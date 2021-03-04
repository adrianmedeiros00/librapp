import { Table } from 'antd'

const columns = [
    {
      title: 'Livro',
      dataIndex: 'book',
      key: 'book',
    },
    {
      title: 'Data de Empréstimo',
      dataIndex: 'loanDate',
      key: 'loanDate',
    },
    {
      title: 'Prazo de Entrega',
      dataIndex: 'deadline',
      key: 'deadline',
    },
    {
        title: 'Aluno',
        dataIndex: 'name',
        key: 'name',
    }
  ]

const LoansList = ({loans, isLoading}) => {


    return(
        <>
            <h3>Lista de Empéstimos</h3>
            <Table style={{fontWeight:'normal'}} columns={columns} dataSource={loans} loading={isLoading} />
        </>
    )
    


}

export default LoansList